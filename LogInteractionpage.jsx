import InteractionForm from "../components/InteractionForm";
import ChatInteraction from "../components/ChatInteraction";
import InteractionToggle from "../components/InteractionToggle";
import AIInsightsPanel from "../components/AIInsightsPanel";

import { useSelector } from "react-redux";

export default function LogInteractionPage(){

  const mode = useSelector(state => state.interaction.mode);

  return(

    <div className="grid grid-cols-2 gap-4 p-8">

        <div>

          <InteractionToggle />

          {mode === "form"
            ? <InteractionForm />
            : <ChatInteraction />
          }

        </div>

        <AIInsightsPanel />

    </div>
  )
}