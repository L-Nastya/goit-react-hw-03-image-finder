import { React, Component } from "react";
import Searchbar from "./Searchbar/Searchbar"
import ImageGallery from "./ImageGallery/ImageGallery";
class App extends Component {
  state = {
  picture: '',
}
  formSubmit = text => {
    this.setState({ picture: text });
  }
  render() {
    return (
      <div>
      <Searchbar onSubmit={this.formSubmit}></Searchbar>
        <ImageGallery
          request={this.state.picture}
         />
      </div>
  )
  }
 
};
export default  App
