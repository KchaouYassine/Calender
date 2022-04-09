import React,{useRef,useState} from "react";
import Calendar from './Components/Calender'
import Sidebar from './Components/Sidebar'
import {Card} from './Components/Card'
import ContextWrapper from "./Contexts/ContextWrapper";
import { useReactToPrint } from 'react-to-print';
import {Helmet} from "react-helmet";

function App() {
  const [showCard , setShowCard] = useState(true)

  function closeCard(){
    setShowCard(false)
}
  const printRef = useRef();
  const handlePrint = useReactToPrint({
        content: () => printRef.current,
    });
  return (
    <React.Fragment> 
      <div className ="p-5 bg-gradient-to-r from-green-400 to-blue-400">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Time Scheduale</title>

                <link rel="apple-touch-icon" href="./logo.png"/>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        
        <div ref={printRef}>
          <ContextWrapper>
            {showCard ? <Card closeCard={closeCard} /> : null}
          
          <Sidebar handlePrint={handlePrint} />
            <Calendar />
          </ContextWrapper>
        </div>
      </div>

    </React.Fragment>
  )}

export default App;
