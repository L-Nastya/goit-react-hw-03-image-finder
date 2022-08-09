import { React, Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";
import { fetchPicture } from "services/api";
import Searchbar from "./Searchbar/Searchbar"
import ImageGallery from "./ImageGallery/ImageGallery";
import Modal from './modal/modal';
import LoadMore from './Button/Button'
import Loader from "./Loader/loader";



const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class App extends Component {
  state = {
    request: '',
    page: 1,
    pictures: [],
    showModal: false,
    showBtn: false,
    error: null,
    largeImageURL: '',
    status: Status.IDLE,
  }

  async componentDidUpdate(prevProps, prevState) {
        if (prevState.request !== this.state.request || prevState.page !== this.state.page) {
                this.setState({ status: Status.PENDING});
          const result = await fetchPicture(this.state.request, this.state.page)
          if (result.hits.length > 0 && result.hits.length < 12) {
            this.setState({
              showBtn: false,
              status: Status.RESOLVED,
              pictures: [...this.state.pictures,...result.hits]
            })
            toast.info(`That's all we found`)
          } else if (result.total > 12) {
            this.setState({
                        pictures: [...this.state.pictures, ...result.hits],
                      status: Status.RESOLVED,
                         showBtn: true,
                    });
          }
               if (result.total === 0) {
                    this.setState({
                        page: 1,
                        status: Status.IDLE,
                        showBtn: false,
                    });
                    toast.error(`Sorry, no results for ${this.state.request}`);    
               }
        }
    }
    

  formSubmit = (text) => {
    this.setState({
      request: text,
      pictures: [],
      page: 1,
    })
  }
  btnLoad = () => {
    this.setState(prevState => ({
    page: prevState.page + 1 }))
  };
   showLargePicture = (pictureId) => {
             this.setState(() => ({
            largeImageURL: pictureId,
        }))
    }
 closeModal = () => {
   this.setState({
     largeImageURL: '',
   })    
    };
  render() {
    const{status, largeImageURL, showBtn, pictures}=this.state
    return (
      < MainContainer >
        <Searchbar onSubmit={this.formSubmit}></Searchbar>
        {status === 'idle' && <Message>Enter a request</Message>}
        {status === 'pending' && <Loader></Loader>}
        {status === 'resolved' && 
        <ImageGallery
          pictures={pictures}
          largeImg={this.showLargePicture}
        />}
        { largeImageURL.length > 0 && <Modal onClose={this.closeModal}><img src={largeImageURL} alt="Увеличенная картинка" /></Modal>}
        { showBtn && <LoadMore onLoad={this.btnLoad}></LoadMore>}
        
        <ToastContainer autoClose={2000}/>
     </MainContainer>)
  }
 
};
export default  App

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;
const Message = styled.div`
    text-align: center;
    font-size: 40px;
    font-style: italic;
    font-weight: bold;
`;