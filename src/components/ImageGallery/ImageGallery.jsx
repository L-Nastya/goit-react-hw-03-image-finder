import { React, Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem"
import styled from "styled-components";
import Modal from '../modal/modal';
import LoadMore from '../Button/Button'
import { fetchPicture } from "services/api";
import Loader from "components/Loader/loader";
import { toast} from 'react-toastify';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
class ImageGallery extends Component {
 
    state = {
        page: 1,
        pictures: [],
        showModal: false,
        error: null,
        largeImageURL: null,
        status: Status.IDLE,
    }

  
    async componentDidUpdate(prevProps, prevState) {
        if (prevProps.request !== this.props.request) {
                this.setState({ status: Status.PENDING });
                const result = await fetchPicture(this.props.request, this.state.page)
            if (result.total === 0) {
                    this.setState({
                        pictures: [],
                        showBtn: false,
                        page: 1,
                        status: Status.IDLE,
                    });
                    toast.error(`Sorry, no results for ${this.props.request}`);
                    
                }
                if (prevState.page !== this.state.page) {
                        this.setState(prevState => ({
                            page: prevState.page + 1,
                      }))
                }
                if (this.state.page === 1) {
                    this.setState({
                        pictures: [...result.hits],
                        status: Status.RESOLVED,
                        showBtn: true,
                    });
                }
                else {
                    this.setState({
                        pictures: [...this.state.pictures, ...result.hits],
                        status: Status.RESOLVED,
                         showBtn: true,
                    });
            }
        }
    }
    
    btnLoad = () => {
        this.componentDidUpdate(this.state.pictures, this.state.page)
  };
   
    toggleModal = () => {
        this.setState(({  showModal }) => ({
            showModal: !showModal,
        }));
    };
    showLoadMore = () => {
        this.setState(({  showBtn }) => ({
            showBtn: !showBtn,
        }));
    };
    showLargePicture = (pictureId) => {
             this.setState(() => ({
            largeImageURL: pictureId,
        }))
    }
    render() {
        const { pictures, showModal, status } = this.state
      
        if (status === 'idle') {
            return <Message>Enter a request</Message>;
        }
        if (status === 'pending') {
      return <Loader></Loader>
        }
         if (status === 'resolved') {
      return    <> <PictureList>
                    {showModal && (    
                       <Modal onClose={this.toggleModal}>
                        <img src={this.state.largeImageURL} alt="Увеличенная картинка" />
                       </Modal>)}
                    <ImageGalleryItem 
                    pictures={pictures} 
                    onLargePic={this.showLargePicture}
                    onToggle={this.toggleModal}/>  
                  </PictureList>
           <LoadMore onLoad={this.btnLoad}></LoadMore> </>
        }
    
    }
}
export default ImageGallery
 
const PictureList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
const Message = styled.div`
    text-align: center;
    font-size: 40px;
    font-style: italic;
    font-weight: bold;
`;