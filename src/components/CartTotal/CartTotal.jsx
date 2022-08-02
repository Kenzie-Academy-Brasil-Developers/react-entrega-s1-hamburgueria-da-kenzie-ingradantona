import { Div } from "./style";

export default function CartTotal({cartList, setCartList}){
    const removeAll = () => {
        setCartList([])
    }
    const calculateTotal = () => {
        return cartList.reduce((acc, current) => {
            return acc + current.price*current.qtd
        },0)
    }
    return (
        <Div>
            <div>
                <span>Total</span>
                <p>R$ {Number.isInteger(calculateTotal()) ? `${calculateTotal()}.00`: calculateTotal()}</p>
            </div>
            <button onClick={() => removeAll()}>Remover Todos</button>
        </Div>
    )
}