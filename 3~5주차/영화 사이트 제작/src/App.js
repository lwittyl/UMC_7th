import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/root-layout.jsx";
import Movies from "./pages/Movies.jsx";
import Login from "./pages/Login.jsx"
import SignUp from "./pages/SignUp.jsx";
import Search from "./pages/Search.jsx";
import './App.css';
import MoviePage from "./pages/MoviePage.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <Movies url={'popular'}/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path:'/signup',
        element: <SignUp/>
      },
      {
        path: '/search',
        element: <Search/>
      },
      {
        path: '/movies',
        element: <MoviePage/>
      },
      {
        path: '/movies/popular',
        element: <Movies url={'popular'}/>
      },
      {
        path: '/movies/now-playing',
        element: <Movies url={'now_playing'}/>
      },
      {
        path: '/movies/top-rated',
        element: <Movies url={'top_rated'}/>
      },
      {
        path: '/movies/up-coming',
        element: <Movies url={'upcoming'}/>
      },
      {
        path: '/movies/:movieId',
        element: <MovieDetail/>
      }
    ]
  }
])
function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
