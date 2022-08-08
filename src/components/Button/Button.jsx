import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const LoadMore =({onLoad})=> {
    return (
        <LoadBtn  type ="button" onClick={onLoad}>Load more</LoadBtn>
    )
}

export default LoadMore

const LoadBtn = styled.button`
  padding: 8px 16px;
  margin: 0 auto;
  border-radius: 2px;
  background-color: #2b6f3a;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  width: 20%;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
:hover,
:focus{
    background-color: #369f30;

}
`;

LoadMore.propTypes = {
    onLoad: PropTypes.func.isRequired,
}