import React from "react";
import styled from "styled-components";
const Category = (props) =>{
    return (
        <CardContainer>
            <Img src={props.imgSrc} alt="category image"/>
            <Text>{props.text}</Text>
        </CardContainer>
    );
}

export default Category;

const CardContainer = styled.div`
    width: 380px;
    height: 200px;
    position: relative;
`
const Img = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
    border-radius: 10px;
`
const Text = styled.div`
    position: absolute;
    bottom: 10px;
    left: 10px;
    background-color: rgba(0,0,0,0.6);
    padding: 0.5rem;
    border-radius: 5px;
    font-weight: bold;
`