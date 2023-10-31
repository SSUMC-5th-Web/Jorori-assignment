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
        <Content.movie_container onMouseEnter={onDisplay} onMouseLeave={onDisplayOff}> 
            <Content.poster src={IMG_BASE_URL+ poster_path} alt='영화포스터'/>
            <Content.movie_info>
                <Content.titling>{title}</Content.titling>                        
                <Content.voting>{vote_average}</Content.voting>
                                                                                  
            </Content.movie_info>           
            {visible ? <Content.over>
               <Content.mkTitle>{title}</Content.mkTitle>
                <br/>
                <br/>
            {overview.length >= 120 ? overview.slice(0,120) + "..." : overview }</Content.over> : null}                    
        </Content.movie_container>  
    )                                                                                                                                   
}

export default Movie                                        