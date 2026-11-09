import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, BookOpen, Cable, CircleDot, Cpu, Download, HardDrive, Menu, Play, RotateCw, Search, X, Zap } from 'lucide-react';
import {Route,Routes} from "react-router-dom";
import Inicio from './components/Inicio';
import HddZoomQuiz from './components/hddGames/HddZoomQuiz';

function App() {
return(
  <>
  <Routes>
  <Route path='/' element={<Inicio/>}></Route>  
  <Route path="/juego" element={<HddZoomQuiz></HddZoomQuiz>}></Route>
  </Routes>
  </>
)
}
export default App;