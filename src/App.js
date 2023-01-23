
import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './containers/CartContainer';
import ChangoShop from './context/ChangoShop';


function App() {

  return (
    <ChangoShop>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"All Might"}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route path='/detail/:id' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='*' element= {<h2>404 Not Found</h2>}/>
        </Routes>
      </BrowserRouter>
    </ChangoShop>
  );
}

export default App;
