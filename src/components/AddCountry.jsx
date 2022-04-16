import axios from "axios";
import { useState } from "react";


export const AddCountry = ()=>{
 const [country, setCountry] = useState('');
   const handleCountry = ()=>{
       axios.post('http://localhost:8080/countries', country).then(res=>console.log(res.data)).catch(error=>console.error(error))
   }
    return (
        <div>
            <input type="text" name="" id="country" onChange={e=>setCountry(e.target.value)} />
            <button onClick={()=>handleCountry()}>save</button>
        </div>
    )
}