import './App.css';
import { Route , Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MoviesDetails from './Pages/MoviesDetails';
import Movies from './Pages/Movies';


function App() {
  return (
    <>
    <div className="App">
      <NavBar/>
     <Routes>
      <Route path="/movies/:id" element={<MoviesDetails />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
     </Routes>
     
     </div>
     <Footer />
      
    </>
  );
}

export default App;