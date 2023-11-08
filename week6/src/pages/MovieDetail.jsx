import React from "react";
import * as Content from "../components/Movie.style"
import {useLocation,useParams} from 'react-router-dom'
import { IMG_BASE_URL } from "../components/Movie";

export default function MovieDetail() {
  const{id} = useParams();
  const{state} = useLocation();
  console.log(id);
  console.log(state);
  
  return <Content.PageContainer>
        <Content.PosterFull>
        <Content.PosterImg src={IMG_BASE_URL+ state.poster_path} alt='영화포스터'/>
    
      <Content.PosterName>
        {state.title}
      </Content.PosterName>
      <div>
        {state.overview}
      </div>
      </Content.PosterFull>
  </Content.PageContainer>;
}
