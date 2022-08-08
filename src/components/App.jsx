import { React, Component } from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar/Searchbar"
import ImageGallery from "./ImageGallery/ImageGallery";
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';




class App extends Component {
  state = {
    request: '',
  }


  formSubmit = (text) => {
    this.setState({ request: text })
  }
  

  render() {
    return (
      < MainContainer >
      <Searchbar onSubmit={this.formSubmit}></Searchbar>
        <ImageGallery
          request={this.state.request}
        />
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