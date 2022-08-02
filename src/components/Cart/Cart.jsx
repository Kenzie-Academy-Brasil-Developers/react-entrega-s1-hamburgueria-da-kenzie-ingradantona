import { Aside, Div } from "./style";
import Card from "../card/Card";
import CartTotal from "../CartTotal/CartTotal";

export default function Cart({cartList, setCartList}){
    return (
        <Aside>
            <p>Carrinho de compra</p>
            <div>
                { 
                    cartList.length ? (
                        cartList.map((element, i) => {
                            return <Card product={element} key={element.id} index={i} cartList={cartList} setCartList={setCartList}/>
                        })
                    ):(
                        <Div>
                            <p>Sua sacola está vazia</p>
                            <span>Adicione Itens</span>
                        </Div>
                    )
                }
            </div>
            {cartList.length ? <CartTotal cartList={cartList} setCartList={setCartList}/> : <></>}
        </Aside>
    )
}