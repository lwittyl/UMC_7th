import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BiSolidCameraMovie } from "react-icons/bi";
const SideBar = () =>{
    return(
        <SideStyle>
            <Logo to={'/search'}><SideContent><FaSearch/>찾기</SideContent></Logo>
            <Logo to={'/movies'}><SideContent><BiSolidCameraMovie/>영화</SideContent></Logo>
        </SideStyle>
    );
}
export default SideBar;

const SideStyle = styled.div`
    display: flex;
    width: 10%;
    padding: 1rem;
    background-color: #131517;
    justify-content: left;
    flex-direction: column;
`
const SideContent = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 1rem;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
`
const Logo = styled(Link)`
    text-decoration: none;
    color: white;
`