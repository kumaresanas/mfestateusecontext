    import React from "react"
import { useCount } from "host/store";

export default () =>{
    const[count,setCount]=useCount()
    return(
    <header>
        <div>Headerdddddddddddd</div>
        <div>{count}
        <button onClick={()=>setCount(0)}>Clear cart</button></div>

    </header>
    );
};