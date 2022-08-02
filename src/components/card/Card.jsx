import { Li, ContainerImg, ContainerContent, ContainerDelete } from "./style";

export default function Card({product, index, cartList, setCartList}){
    const addProduct = () => {
        const item = product
        item.qtd ++

        const newList = cartList.filter((element, i) => i === index ? item : element)

        setCartList(newList)
    }
    const subProduct = () => {
        const item = product
        if(item.qtd > 1){
            item.qtd --

            const newList = cartList.filter((element, i) => i === index ? item : element)
    
            setCartList(newList)
        } else {
            removeProduct()
        }
    }
    const removeProduct = () => {
        const newList = cartList.filter((element, i) => i !== index)

        setCartList(newList)
    }

    return(
        <Li>
            <ContainerImg>
                <img src={product.img} alt={product.name} />
            </ContainerImg>
            <ContainerContent>
                <p>{product.name}</p>
                <span>{product.category}</span>
                <div>
                    <button onClick={() => subProduct()}>-</button>
                    <p>{product.qtd}</p>
                    <button onClick={() => addProduct()}>+</button>
                </div>
            </ContainerContent>
            <ContainerDelete>
                <button onClick={() => removeProduct()}>Remover</button>
            </ContainerDelete>
        </Li>
    )
}