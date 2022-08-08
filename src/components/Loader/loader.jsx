import React from "react";
import { Circles } from 'react-loader-spinner';
import styled from "styled-components";

const Loader =()=> {
    return (
        <Load><Circles/></Load>
        
    )
}

export default Loader

const Load = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
`;