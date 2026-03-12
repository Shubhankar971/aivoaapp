import { useState } from "react";
import api from "../services/api";

export default function InteractionForm(){

  const [data,setData] = useState({
      interaction_type:"",
      product:"",
      notes:""
  })

  const handleSubmit = async ()=>{

    await api.post("/interactions",data);

    alert("Interaction Saved")
  }

  return(

    <div className="bg-white p-4 rounded">

      <input
        placeholder="Interaction Type"
        onChange={e=>setData({...data,interaction_type:e.target.value})}
      />

      <input
        placeholder="Product"
        onChange={e=>setData({...data,product:e.target.value})}
      />

      <textarea
        placeholder="Notes"
        onChange={e=>setData({...data,notes:e.target.value})}
      />

      <button onClick={handleSubmit}>
        Save
      </button>

    </div>
  )
}