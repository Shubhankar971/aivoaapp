import { useDispatch } from "react-redux";
import { setMode } from "../redux/interactionSlice";

export default function InteractionToggle(){

  const dispatch = useDispatch();

  return(

    <div className="flex gap-2 mb-4">

      <button
        onClick={()=>dispatch(setMode("form"))}
      >
        Structured Form
      </button>

      <button
        onClick={()=>dispatch(setMode("chat"))}
      >
        AI Chat
      </button>

    </div>
  )
}