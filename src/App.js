// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"Bienvenido A The Mansion"}/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        <Route path='/detail/:id' element={<ItemDetailContainer/>} />
        <Route path='*' element= {<h2>404 Not Found</h2>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
