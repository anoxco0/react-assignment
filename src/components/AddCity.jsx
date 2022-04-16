import axios from "axios";
import { useState } from "react"



export const AddCity = ()=>{
    const [cities, setCities] = useState({
        city:'',
        population:'',
        country:''
    })
    const handleChange = (e)=>{
         const {id, value} = e.target;
         setCities({...cities, [id]:value})
    }
    const saveCity = ()=>{
        axios.post('http://localhost:8080/cities', {
            city:cities.city,
            population:cities.population,
            country:cities.country
        }).then(res => console.log(res.data))
        .catch(error=>console.log(error));
    }
   return(
       <div>
           <input type="text" name="" id="city" onChange={(e)=>handleChange(e)} placeholder='city' />
           <input type="Number" name="" id="population" onChange={(e)=>handleChange(e)} placeholder='population' />
           <input type="text" name="" id="country" onChange={(e)=>handleChange(e)} placeholder='country'  />
           <button onClick={()=>{saveCity()}}>Save</button>
       </div>
   )
}