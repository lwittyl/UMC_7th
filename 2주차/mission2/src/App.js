import { MOVIES } from "./mocks/movies.js";
import Movie from "./components/Movie.jsx";

function App() {
  return (
    <div>
      <div className="appContainer">
        {
          MOVIES.results.map((item)=>{
            return(
              <Movie route={item.poster_path} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
