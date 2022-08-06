import React from "react";

const ImageGalleryItem = ({pictures}) => {
    return(
        pictures.map(picture =>
            <li key = {picture.id}>
           <img src={picture.webformatURL} alt="" />
           </li>
  )      
    )
}
export default ImageGalleryItem