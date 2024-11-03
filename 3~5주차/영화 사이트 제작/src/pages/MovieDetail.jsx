import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) {
      console.error("영화 ID가 없습니다.");
      setError("영화 ID가 없습니다.");
      setLoading(false);
      return;
    }

    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODljOGNmMDY3MjQ2Y2E5ZDg0YzA5ZmNmZWQxMzM3OCIsIm5iZiI6MTcyODQ2MzE2OS4zNTY0MjgsInN1YiI6IjY3MDYzYzExYTg4NjE0ZDZiMDhhZDg1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DngosLkhpQATrigOihV_O0kF27JN_FwToRFpkn2JlQ4';
        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`,
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );
        setMovie(movieResponse.data);

        const creditsResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?language=ko-KR`,
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );
        setCredits(creditsResponse.data);
      } catch (err) {
        console.error("API 요청 오류:", err);
        setError("영화 정보를 불러오는 데 실패했습니다. API 키를 확인하세요.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) return <Loading>Loading...</Loading>;
  if (error) return <Error>{error}</Error>;
  console.log(movie);
  const year = movie.release_date.split("-")[0];
  const average = Math.round(movie.vote_average*10)/10;
  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
  return (
    <DetailContainer>
      <HeaderContainer  backdropUrl={backdropUrl}>
        <MovieHeader>
          <h1>{movie.title}</h1>
          <p>평균 {average}</p>
          <p>{year}</p>
          <p>{movie.runtime}분</p>
          <h2>{movie.tagline}</h2>
          <p>{movie.overview}</p>
        </MovieHeader>
      </HeaderContainer>
      <Hr/>
      <CastSection>
        <h1>감독/출연</h1>
        <CastList>
          {credits.cast.map((actor) => (
            <CastItem key={actor.id}>
              <CastImage src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={''} />
              <Name>{actor.name}</Name>
              <Role>역할: {actor.character}</Role>
            </CastItem>
          ))}
        </CastList>
      </CastSection>
    </DetailContainer>
  );
};

export default MovieDetail;

const DetailContainer = styled.div`
  width: 90%;
  padding: 0 1rem;
  color: white;
`;
const Hr = styled.hr`
  width: 40%;
  margin: 0;
`
const HeaderContainer = styled.div`
  background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${props => props.backdropUrl});;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  margin-top: 1rem;
  padding: 1rem;
`
const MovieHeader = styled.div`
  margin-bottom: 2rem;
  width: 40%;
`;

const CastSection = styled.div`
  margin-top: 2rem;
`;

const CastList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: flex-start;
  margin: 3rem 0;
`;

const CastItem = styled.div`
  width: 170px;
  display: flex;
  text-align: center;
  flex-direction:column;
  align-items: center;
`;

const CastImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  border: 2px solid white;
`;

const Loading = styled.div`
  color: white;
  margin: 1rem;
  font-weight: bold;
  font-size: 2rem;
`;

const Error = styled.div`
  color: red;
`;

const Name = styled.div`
  color: white;
  margin: 1rem;
  font-weight: bold;
  font-size: 1.1rem;
`
const Role = styled.div`
  color: grey;
  margin: 0;
`