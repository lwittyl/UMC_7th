import React, { useState } from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Movie(props) {
    const navigate = useNavigate();
    let baseUrl = 'https://image.tmdb.org/t/p/w500';
    
    const [isHovered, setIsHovered] = useState(false);
    const handleClick = () => {
        navigate(`/movies/${props.id}`);
    };

    return (
        <Container onClick={handleClick} isHovered={isHovered}>
            <MovieContainer
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
            >
                <MovieContainerImg src={baseUrl + props.route} alt="Movie Poster"/>
                {isHovered && <Mouse/>}
            </MovieContainer>
            <h4 style={{color: 'white'}}>{props.name}</h4>
            <InnerText>{props.date}</InnerText>
        </Container>
    );
}

const MovieContainer = styled.div`
    position: relative;
`
const MovieContainerImg = styled.img`
    max-width: 180px;
    border-radius: 10px;
`
const Mouse = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 180px;
  height: 100%;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.5);
`
const Container = styled.div`
    display: flex;
    width: 180px;
    flex-direction:column;
    margin: 1rem;
    color: white;
    transform: ${({ isHovered }) => (isHovered ? 'scale(1.05)' : 'scale(1)')};
`
const InnerText = styled.div`
    font-weight: light;
    font-size: 10px;
`