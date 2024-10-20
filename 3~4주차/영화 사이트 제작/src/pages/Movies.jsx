import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import styled from "styled-components";
const HomePage = (props) =>{
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        const getMovies = async () =>{
            const movies = await axios.get('https://api.themoviedb.org/3/movie/'+props.url+'?language=ko-KR&page=1', {
                headers:{
                    Authorization:`Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODljOGNmMDY3MjQ2Y2E5ZDg0YzA5ZmNmZWQxMzM3OCIsIm5iZiI6MTcyODQ2MzE2OS4zNTY0MjgsInN1YiI6IjY3MDYzYzExYTg4NjE0ZDZiMDhhZDg1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DngosLkhpQATrigOihV_O0kF27JN_FwToRFpkn2JlQ4`,
                }
            })
            setMovies(movies);
        }
        getMovies();
    }, [props.url]);
  return (
      <AppContainer>
        {
          movies.data?.results?.map((item, index)=>{
            return(
              <Movie key={index} id={item.id} route={item.poster_path}  name={item.title} date={item.release_date}/>
            )
          })
        }
      </AppContainer>
  );
}
export default HomePage;
const AppContainer=styled.div`
  display: flex;
  width: 90%;
  padding: 1rem 2rem;
  flex-wrap: wrap;
  gap: 20px;
`