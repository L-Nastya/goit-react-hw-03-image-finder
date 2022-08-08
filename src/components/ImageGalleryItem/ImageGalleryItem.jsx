import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const ImageGalleryItem = ({pictures, onLargePic, onToggle }) => {
    return(
        pictures.map(item =>
            <ListItem key = {item.id}>
                <ListImg
                    onClick={() => onToggle(onLargePic(item.largeImageURL))}
                    src={item.webformatURL}
                    alt={item.tags}
                />
           </ListItem>
  )     
  )    
    
}
export default ImageGalleryItem

const ListItem = styled.li`
     border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

`;

const ListImg = styled.img`
    width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover{
     transform: scale(1.03);
  cursor: zoom-in;

  }
`;

ImageGalleryItem.propTypes = {
  ImageGalleryItem: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          largeImageURL: PropTypes.src,
          webformatURL: PropTypes.src,
          tags: PropTypes.string,
        })),
  onToggle: PropTypes.func.isRequired,
  onLargePic: PropTypes.func.isRequired,
}