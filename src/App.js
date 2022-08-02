import {GlobalStyle, Div} from './style/global'
import { useState } from 'react';
import {useEffect} from 'react'
import Header from './components/Header/Header';
import ProductsList from './components/ProductsList/ProductsList';
import Cart from './components/Cart/Cart';

function App() {
  const [foodList, setFoodList] = useState([])
  const [originFoodList, setOriginFoodList] = useState([])
  const [cartList, setCartList] = useState([])

  useEffect(() => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then(response => response.json())
    .then(response => {
      setFoodList(response)
      setOriginFoodList(response)})
    .catch(err => console.log(err))
  },[])

  return (
    <>
      <GlobalStyle/>
      <Header foodList={foodList} originFoodList={originFoodList} setFoodList={setFoodList} />
      <Div>
        <ProductsList foodList={foodList} cartList={cartList} setCartList={setCartList}/>
        <Cart cartList={cartList} setCartList={setCartList}/>
      </Div>
    </>
  );
}

export default App;
