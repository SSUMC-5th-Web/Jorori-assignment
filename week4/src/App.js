import Movie from './Components/Movie/Movie';
import * as Content from'./Components/Movie/Movie.style';
import { dummy } from './movieDummy';

function App() {
  
  return (
    <div>
    <Content.app_container>
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
      </Content.app_container>
    </div>
   
  );
}

export default App;
