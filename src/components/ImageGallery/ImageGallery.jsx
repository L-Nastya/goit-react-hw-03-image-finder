import { React, Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem"
class ImageGallery extends Component{
    state = {
        pictures: [],
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.request !== this.props.request) {
            fetch(`https://pixabay.com/api/?q=${this.props.request}&page=1&key=28085560-20e71cd79b088a688c0cfa752&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => res.json())
                .then(pictures=> this.setState({pictures: pictures.hits})); 
        }
    
}

    render() {
        return (
            <ul >
                 <ImageGalleryItem 
                    pictures={this.state.pictures}      
                />   
            </ul>
        )
        
    }
}
 export default ImageGallery