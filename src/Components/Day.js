import React,{useState,useEffect} from 'react'

export default function Day({day,hoursArray,minutesArray}){

    const [showButton ,setShowButton] = useState(false);
    const [resultTime,setResultTime] = useState('0');
    const [startTime,setStartTime]  = useState();
    const [endTime,setEndTime]  = useState();
    const [breakTime,setBreakTime]  = useState();

    useEffect(()=>{
        if(typeof(startTime) === "string" && typeof(endTime) === "string" ){setShowButton(true)}
    },[startTime,endTime])

    const setTimDay =()=>{
        if(typeof(startTime) === "string" && typeof(endTime) === "string" ){
        let startHeure=Number(startTime.split(":")[0])
        let startMin=Number(startTime.split(":")[1])
        let endHeure=Number(endTime.split(":")[0])
        let endMin=Number(endTime.split(":")[1])
        //Calcul The Time

        let t1 = startHeure*60 + startMin
        let t2 = endHeure*60   + endMin

       
        if(t1 >t2){return}

        if(typeof(breakTime) === "string"){
            let breakHeure=Number(breakTime.split(":")[0])
            let breackMin=Number(breakTime.split(":")[1])
            let t3=breakHeure*60-breackMin
            t1-=t3
        }

       
        let diff = t2-t1
        let heures= Number(Math.floor(diff / 60) %24)
        let minutes= diff % 60

        let index = day.format('DD') - 1
        hoursArray[index]=heures
        minutesArray[index]=minutes
       

        if((String(minutes).length === 1) && String(heures).length === 1 ){setResultTime(`0${heures} : 0${minutes}`)}
        else if(String(heures).length === 1 ) {setResultTime(`0${heures} : ${minutes}`)}
        else if(String(minutes).length === 1 ) {setResultTime(`${heures} : 0${minutes}`)}
        else {setResultTime(String(heures) + ":" + String(minutes))}
       
      
         
    }}
    // setTimDay()

    return(    
        <tr className='p-16 text-center border-b-2 border-gray-500 md:text-bold md:text-xl'> 
            <td className="p-2 print:text-sm " style={{width:'25%'}}>{day.format("dddd, D MMMM YYYY")}</td>
            <td style={{width:'18.5%'}}><input className='p-2 bg-transparent'  type="time"   onChange={(e)=>{setStartTime(e.target.value)}}  /></td>
            <td style={{width:'18.5%'}}><input className='p-2 bg-transparent'   type="time"   onChange={(e)=>{setEndTime(e.target.value)}} /></td>
            <td style={{width:'18.5%'}}><input className='p-2 bg-transparent'   type="time"   onChange={(e)=>{setBreakTime(e.target.value)}} /></td>
            <td style={{width:'20%'}}>
                {
                    showButton ? <button onClick={setTimDay} className="px-4 mr-2 text-xs text-white md:py-3 print:hidden bg-gradient-to-r from-green-400 to-blue-400 rounded-3xl ">Click me</button> : null

                }
                
                {resultTime}</td>
        </tr>
        
    )
}