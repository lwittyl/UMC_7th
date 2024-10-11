import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return (
        <NavStyle>
            <Logo to={'/'} color={'#FC2D61'}><h2>Chart</h2></Logo>
            <DivStyle>
                <Logo to={'/login'}><BtnStyle>로그인</BtnStyle></Logo>
                <Logo to={'/signup'}><BtnStyle color={'#FC2D61'}>회원가입</BtnStyle></Logo>
            </DivStyle>
        </NavStyle>
    );
}

export default Navbar;

const NavStyle = styled.nav`
    display: flex;
    padding: 0.8rem 1.7rem;
    color: #FC2D61;
    background-color: #131517;
    justify-content: space-between;
`
const DivStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const BtnStyle = styled.button`
    padding: 0.8rem 1.5rem;
    margin: 0 0.5rem;
    color: white;
    background-color: ${props => props.color || '#131517'};
    border: none;
    border-radius: 15px;
    &:hover{
        background-color: white;
        color: black;
    }
`
const Logo = styled(Link)`
    text-decoration: none;
    color: ${props => props.color || 'white'};
`