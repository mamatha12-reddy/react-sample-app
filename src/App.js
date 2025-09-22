import React, { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

import ToDoApp from './todoapp/ToDoApp'
import { HooksRecall } from "./todoapp/HooksRecall";
//import Parent from "./hooks/Parent";
import Parent from "./hooks/useCallBackHook";
import User from "./hooks/useMemoHook";
import NavBar from "./hooks/useContexthook/NavBar";
import { AuthContext,AuthProvider } from "./hooks/useContexthook/AuthContext";

import UseReducerHook from "./hooks/useReducerHook";
import { UseRefHook } from "./hooks/UseRefHook";
import {ThemeProvider} from '././createcontextfunction/ThemeProvider'
import { ThemeButton } from "./createcontextfunction/ThemeButton";
import { FethingData } from "./dataDealing/FethingData";

const App = () => {


  return(
   <FethingData/>
  )
 
};

export default App;
