import axios from "axios";
import { useEffect, useState } from "react"



export const Home = ()=>{
   const [cities, setCities] = useState([]);
   useEffect(()=>{
       axios.get('http://localhost:8080/cities').then(res => setCities(res.data)).catch(error=>console.error())
   },[])
   const removeElement=(id)=>{
       axios.delete(`http://localhost:8080/cities/${id}`).then((res)=>console.log(res.data))
       axios.get('http://localhost:8080/cities').then(res => setCities(res.data)).catch(error=>console.error())
   }
    return (
        <div>
            <div>
                <select name="" id="">
                    <option value=""></option>
                </select>
                <button onClick={()=>{axios.get('htttp://localhost:8080/cities').then(res=>setCities(res.data.sort((a,b)=>(b.population-a.population))))}}>sort by ascending</button>
                <button onClick={()=>{axios.get('htttp://localhost:8080/cities').then(res=>setCities(res.data.sort((a,b)=>(a.population-b.population))))}}>sort by descending</button>
            </div>
            <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Population</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                  {
                      cities.map((el, i)=>
                     <tr key={el.id}>
                         <td>{el.id}</td>
                         <td>{el.country}</td>
                         <td>{el.city}</td>
                         <td>{el.population}</td>
                         <td>Edit</td>
                         <td onClick={()=>{removeElement(el.id)}}>Delete </td>
                     </tr>    
                    )
                  }
                </tbody>
            </table>
            </div>
        </div>
    )
}