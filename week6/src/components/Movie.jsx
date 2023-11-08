import * as Content from './Movie.style'
import {useNavigate} from 'react-router-dom'
export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";



function Movie(props) {

    const navigate = useNavigate();

    const onClickMovieItem = () => {
        navigate(`/movie/${props.id}`,{
            state : props
        })
    }

    return (
        <Content.MovieContainer onClick={onClickMovieItem}> 
            <Content.Poster src={IMG_BASE_URL+ props.poster_path} alt='영화포스터'/>
            <Content.MovieInfo>
                <Content.Titling>{props.title}</Content.Titling>                        
                <Content.Voting>{props.vote_average}</Content.Voting>
                                                                                  
            </Content.MovieInfo>           
                            
        </Content.MovieContainer>  
    );                                                                                                                            
}

export default Movie                                        