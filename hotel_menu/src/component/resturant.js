import React,{useState} from 'react'
import Menu from './menu';
import Cards from './cards';
import Navbar from './navbar';
const cat=[...new Set(Menu.map((ele)=>{
    return ele.category})),"All"]
const Resturant = () => {
    const [newlist, setnewlist] = useState(cat)
    const [menuData, setMenuDta] = useState(Menu)
    const Filteritem=(category)=>{
        if("All"===category){
            setMenuDta(Menu)
            return;
        }
        const newdata= Menu.filter((curr_ele)=>{
            return (curr_ele.category==category);
        });
        setMenuDta(newdata);   
    };
    return (<>
    <Navbar Filteritem={Filteritem} newlist={newlist}/>
    <Cards menudata={menuData}/></>
    )    
};
export default Resturant;
