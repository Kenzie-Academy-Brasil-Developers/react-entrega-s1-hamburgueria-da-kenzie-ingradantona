import { HeaderStyle } from "./style";
import logo from '../../img/logo.svg'
import InputSearch from "../InputSearch/InputSearch";

export default function Header ({foodList, setFoodList, originFoodList}){
    return (
        <HeaderStyle>
            <img src={logo} alt="logo burguer kenzie"/>
            <InputSearch foodList={foodList} originFoodList={originFoodList} setFoodList={setFoodList}/>
        </HeaderStyle>
    )
}