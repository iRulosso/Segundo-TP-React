import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}></Route>
            <Route path='/categoria/:idCategoria' element={<ItemListContainer />}></Route>
            <Route path='/item/:idItem' element={<ItemDetailContainer />} ></Route>
            <Route path='*' element={<h2>Sitio en Construccion</h2>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
