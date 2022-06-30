import React from "react";
import { useState } from "react";

const TestFunc = ()=>{

const myArray = [
    {username: "lukas", key: 1},
    {username: "Jess", key: 2},
    {username: "Markus", key: 3},
]    

const myObj = {username: "ric", key: 4}

let newArray = [...myArray,...[myObj]];

const displObj = (newArray)=>{
    console.log(newArray);

}


return (
    <div>
        {console.log(myArray)}
        <button onClick={()=>displObj(newArray)}>click me</button>
    </div>
)
};


export default TestFunc;