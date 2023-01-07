// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Bienvenido a la Mansion"}/>
    </>
  );
}

export default App;
