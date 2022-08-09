import { React} from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem"
import styled from "styled-components";
import PropTypes from 'prop-types';

const ImageGallery = ({pictures, largeImg}) => {
    return (
            <PictureList>
                {pictures.map(item =>
                    <ImageGalleryItem
                        key={item.id}
                        id={item.id}
                        webformatURL={item.webformatURL}
                        tags={item.tags}
                        largeImageURL={item.largeImageURL}
                        onLargePic={largeImg}
                         />)}
        </PictureList>
    )
    
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


ImageGallery.propTypes = {
    pictures: PropTypes.array.isRequired,
    largeImg: PropTypes.func.isRequired,
}