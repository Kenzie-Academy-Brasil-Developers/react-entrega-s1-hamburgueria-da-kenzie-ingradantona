import { Form } from "./style"

export default function InputSearch ({foodList, setFoodList, originFoodList}){

    const search = (event) => {
        event.preventDefault()

        const userInput = event.target.parentElement[0].value

        const newList = originFoodList.filter(element => {
            return element.name.toLowerCase().includes(userInput.toLowerCase())
        })

        setFoodList(newList)
        
    }
    return (
        <Form>
            <input type="text" placeholder="Digitar Pesquisa"/>
            <button onClick={(event) => search(event)}>Pesquisar</button>
        </Form>
    )
}