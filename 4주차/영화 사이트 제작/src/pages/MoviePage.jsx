import React from "react";
import styled from "styled-components";
import Category from "../components/Category";
import { Link } from "react-router-dom";
const MoviePage = () =>{
    return (
        <MovieStyle>
            <h1>카테고리</h1>
            <CategoryStyle>
                <Logo to={'/movies/now-playing'}><Category text={'현재 상영중인'} imgSrc={'/img/now.jpeg'}/></Logo>
                <Logo to={'/movies/popular'}><Category text={'인기있는'} imgSrc={'/img/popular.jpeg'}/></Logo>
                <Logo to={'/movies/top-rated'}><Category text={'높은 평가를 받은'} imgSrc={'/img/hot.jpeg'}/></Logo>
                <Logo to={'/movies/up-coming'}><Category text={'개봉 예정중인'} imgSrc={'/img/future.jpeg'}/></Logo>
            </CategoryStyle>
        </MovieStyle>
    );
}

export default MoviePage;

const MovieStyle = styled.div`
    width: 90%;
    padding: 1rem 2rem;
    color:white;
`
const CategoryStyle = styled.div`
    display: flex;
    justify-content: space-between;
`
const Logo = styled(Link)`
    text-decoration: none;
    color: white;
`