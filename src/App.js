import { Routes, Route } from 'react-router-dom';
import Details from './pages/Details/Details';
import Home from './pages/Home/Home';

function App() {


  return <Routes >
    <Route path='/' element={<Home/>}/>
    <Route path='details/:eventid' element={<Details/>}/>

  </Routes>;
}

export default App;
