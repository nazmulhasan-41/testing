import React, { useState } from 'react';
import './Products.css';

const Products = () => {

    const [food,setFood]=useState({
        fname:'',
        price:''
    });

    const changeHandler=(e)=>{
        // console.log(e.target.name,e.target.value);
        if(e.target.name==='fname')
        {
            var newFood={'fname' : e.target.value}
        }
        else {
            var newFood={'price' : e.target.value}
        }
        
        var final={...food, ...newFood};
        // console.log(final)
        setFood(final);
    }
    const submitHandler=()=>{
        // console.log(food);

       fetch('http://localhost:5000/add',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(food)

       })
       .then(res=>res.json())
       .then(data=>console.log(data))
    }
    return (
        <div className='productsArea' >
            
                <label for="fname">Food name:</label><br />
                <input type="text" id="fname" name="fname" onChange={changeHandler} /><br />
                <label for="lname">Price:</label><br />
                <input type="text" id="price" name="price" onChange={changeHandler}  /><br /><br />
                <input type="submit" value="Add Food" onClick={submitHandler} />
            
        </div>
    );
};

export default Products;