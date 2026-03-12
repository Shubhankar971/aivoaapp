import { useState } from "react";
import api from "../services/api";

export default function ChatInteraction(){

  const [text,setText] = useState("");
  const [ai,setAi] = useState(null);

  const analyze = async ()=>{

    const res = await api.post("/ai/extract",{
        conversation_text:text
    });

    setAi(res.data)
  }

  return(

    <div>

      <textarea
        placeholder="Describe your interaction"
        onChange={e=>setText(e.target.value)}
      />

      <button onClick={analyze}>
        Analyze with AI
      </button>

      {ai && <pre>{JSON.stringify(ai,null,2)}</pre>}

    </div>
  )
}