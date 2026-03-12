import { configureStore } from "@reduxjs/toolkit";

import interactionReducer from "./interactionSlice";
import hcpReducer from "./hcpSlice";

export default configureStore({

  reducer:{
    interaction:interactionReducer,
    hcp:hcpReducer
  }

});