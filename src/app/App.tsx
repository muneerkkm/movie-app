import './App.scss';
import HomePage from '../components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailsPage from '../components/DetailsPage';

function App() {
  return (
    <>
     <div className=''>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/detailes/:id' element={<DetailsPage/>}/>
      </Routes>
      </BrowserRouter>
     </div>
    </>
  );
}

export default App;
