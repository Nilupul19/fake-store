import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import { Route, Routes } from 'react-router';
import ProductList from './components/ProductList';
import MenClothes from './components/MenClothes';
import WomenClothes from './components/WomenClothes';


function App() {
  return (
    <div className="App">
       <TopBar/>
       <Routes>
         <Route path='/' element={<ProductList/>}/>
         <Route path='/' element={<MenClothes/>}/>
         <Route path='/' element={<WomenClothes/>}/>
       </Routes>
    </div>
  );
}

export default App;
