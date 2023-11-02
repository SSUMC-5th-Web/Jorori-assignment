import React, { useState } from 'react'
import * as Content from './Movie.style'
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";



function Movie({title,poster_path,vote_average,overview}) {
    const [visible,setVisible] = useState(false);
    function onDisplay(){
        setVisible(true);
    
    }
    function onDisplayOff(){
        setVisible(false);
    }
    
    return (
        <Content.MovieContainer onMouseEnter={onDisplay} onMouseLeave={onDisplayOff}> 
            <Content.Poster src={IMG_BASE_URL+ poster_path} alt='영화포스터'/>
            <Content.MovieInfo>
                <Content.Titling>{title}</Content.Titling>                        
                <Content.Voting>{vote_average}</Content.Voting>
                                                                                  
            </Content.MovieInfo>           
            {visible ? <Content.Over>
               <Content.MkTitle>{title}</Content.MkTitle>
                <br/>
                <br/>
            {overview.length >= 120 ? overview.slice(0,120) + "..." : overview }</Content.Over> : null}                    
        </Content.MovieContainer>  
    );                                                                                                                            
}

export default Movie                                        