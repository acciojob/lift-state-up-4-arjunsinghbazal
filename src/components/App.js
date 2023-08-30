
import React, { useState } from "react";
import './../styles/App.css';
const Child = ({list, removeItem})=>{

    return(
        <div className="child">
                <h3>Child Component</h3>
                <ul>
                   { 
                        list.map((ele, ind)=>(
                                <li>
                                    {ele.name} - ${ele.price}<button onClick={()=>{removeItem(ind)}}>Remove</button>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
    )
}
let obj1 = {
    name: 'Item1',
    price: 10,
}
let obj2 = {
    name: 'Item2',
    price: 20,
}
let obj3 = {
    name: 'Item3',
    price: 30,
}
let arr = [obj1, obj2, obj3]
const Parent = () => {
    let [list, setList] = useState(arr);
    let [itemName, setItemName] = useState('');
    let [itemPrice, setItemPrice] = useState(0);

   
    function addToList() {
        if (itemName && itemPrice) {
            let obj = {
                name: itemName,
                price: itemPrice,
            }
            setList([...list, obj]);
            setItemPrice('');
            setItemName('');
        }
        document.getElementById('itemName').value=''
        document.getElementById('itemPrice').value=''
    }

    function remove(index) {
        let update = [...list];
        update.splice(index, 1);
        setList(update);
    }

    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <label>Item Name:</label>
            <input type="text" id="itemName" onChange={(e)=>{setItemName(e.target.value)}}/>
            <label>Item Price:</label>
            <input type="number" id="itemPrice" onChange={(e)=>{ setItemPrice(e.target.value);}}/>
            <button onClick={addToList}>Add Item</button>

            <Child list={list} removeItem={(index)=>{remove(index)}}  ></Child>
        </div>
    )
}
const App = () => {
  return (
    <div>
      <Parent/>
    </div>
  )
}

export default App
