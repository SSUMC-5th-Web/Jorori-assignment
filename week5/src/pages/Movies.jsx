import React from 'react'
import * as Content from '../components/Movie.style'
import { dummy } from '../movieDummy'
import Movie from '../components/Movie'
export default function Movies() {
  return (
    <div>
    <Content.AppContainer>
    {
    dummy.results.map((item) =>{
      return (
        <Movie
        title={item.title}
        poster_path={item.poster_path}
        vote_average={item.vote_average}
        overview={item.overview}
        />
      )
    }
    )
    }
    </Content.AppContainer>
  </div>
 
  )
}
