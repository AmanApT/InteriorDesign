import React, {useEffect} from "react";
import HomePage from "./HomePage";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(()=>{
    AOS.init({duration: 1500})
  }, []);
  return (
    <div>
     <HomePage />
    </div>
  );
}

export default App;