import React, {useState} from 'react'
import './style.css'
export const Cards = ({ menudata }) => {
    console.log(menudata);
    return (
        <>
        {menudata.map((ele)=>{
            const {id,image,name,category,price,description}=ele
            return(
                <>
            <div className="card-container">
            <div className="card">
                <div className="card-body">
                    <span className="card-number_card-circle_subtle">{id}</span>
                    <img src={ele.image} className="image" alt="image"/>
                    {/* <span className="image"><img src={ele.image}></img></span> */}
                    <span className="card-author subtle">{category}</span>
                    <h2 className="card-description subtle">{name}</h2>
                    
                    <span className="card-description subtle">
                    </span>
                    
                </div>
            </div>
        </div> 
        </>)

        })}
            
        </>
    )
}
export default Cards;