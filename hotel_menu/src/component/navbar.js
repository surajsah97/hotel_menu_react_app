import React,{useState} from 'react'
import Menu from './menu';
const Navbar = ({Filteritem,newlist}) => {
    return (<>
    <nav className="navbar">
        <div className="btn-group">
            {newlist.map((currentele)=>{
            return<>
            <button className="btn" onClick={()=>Filteritem(currentele)}>{currentele}</button></>})}
        </div>

    </nav>
    </>)
    
}
export default Navbar;