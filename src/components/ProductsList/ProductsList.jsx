import { Ul, Li, ContainerImg, Container} from "./style"

export default function ProductsList({foodList, cartList, setCartList,}){
    const addCart = (id) => {
        if(cartList.find(element => element.id === id)){
            const item = cartList.find(element => element.id === id)
            const index = cartList.indexOf(item)
            item.qtd ++

            const newList = cartList.filter((element, i) => i === index ? item : element)

            setCartList(newList)        
        } else {
            const newItem = foodList.find(element => element.id === id)
            newItem.qtd = 1

            setCartList([...cartList, newItem])
        } 
    }
    
    return(
       <Ul>
        {foodList.map(element => {
            return (
            <Li key={element.id}>
                <ContainerImg>
                    <img src={element.img} alt={element.name} />
                </ContainerImg>
                <Container>
                    <h3>{element.name}</h3>
                    <span>{element.category}</span>
                    <p>R$ {Number.isInteger(element.price) ? `${element.price}.00`: element.price}</p>
                    <button onClick={() => addCart(element.id)}>Adicionar</button>
                </Container>
            </Li>
            )
        })}
       </Ul> 
    )
}