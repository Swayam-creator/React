import React,{useState} from 'react';
import './mobilelist.css';
import datas from './data.json';
const Data = () => {
    const [newData,setData]= useState(datas);
   const handleRemove =(itemId)=>{
         setData(newData.filter(item=>item.id!==itemId))
   }
   const  handleUpdate=(itemId)=>{
      setData(newData.map(items=>{
        if(items.id===itemId){
            return {val:"Kem Palty"}
        }
        else{
            return items;
        }
      }));
   }
  return (
    <div>
      <ul>
        {
            newData.map(items=>
                <li key={items.id}>
                  {items.val}
               <br/>
               <button onClick={()=>handleUpdate(items.id)}>Update</button>
                <button onClick={()=>handleRemove(items.id)}>Remove</button>
                </li>
            
            )
        }
      </ul>
      <button onClick={()=>setData([])}>Clear</button>
    </div>
  )
}

export default Data
