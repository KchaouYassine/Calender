import React,{useState,useEffect} from 'react'
import Day from './Day'
import {AiOutlineFieldTime} from 'react-icons/ai'

export default function Month({month}){
  
    // const [totalHours,setTotalHours] = useState(0);
    // const [totalMinutes,setTotalMinutes] = useState(0);
    const [resultTime,setResultTime] = useState('');
    const [timeOrReset ,setTimeOrReset] = useState(true);

    
    const [hoursArray,setHoursArray] = useState(new Array(month.length).fill(0));
    const [minutesArray, setMinutesArray] = useState(new Array(month.length).fill(0))


    function calculArray (ar){
        let total =0;
        for (let i=0;i<ar.length;i++){
            total+=ar[i]
        }
        return total;
    }
    const calculFinalTime = () =>{

        let hours = calculArray(hoursArray);
        let minutes = calculArray(minutesArray);

        if(minutes>=60){
            hours += Math.floor(minutes / 60)
            minutes = (minutes%60)
        }

        setHoursArray(hoursArray)
        setMinutesArray(minutesArray)
        
        // setTotalHours(hours)
        // setTotalMinutes(minutes)

        setTimeOrReset(false)
       
        //represent Time
        if((String(minutes).length === 1) && String(hours).length === 1 ){setResultTime(`0${hours} : 0${minutes}`)}
        else if(String(hours).length === 1 ) {setResultTime(`0${hours} : ${minutes}`)}
        else if(String(minutes).length === 1 ) {setResultTime(`${hours} : 0${minutes}`)}
        else {setResultTime(String(hours) + ":" + String(minutes))}
    }

    useEffect(()=>{
        calculFinalTime()
        console.log(hoursArray)
    },[hoursArray,minutesArray])

    const calculResetTime = ()=>{
        // setTotalHours(0)
        // setTotalMinutes(0)
        setResultTime("0:0")
        setTimeOrReset(true)

    }
    return(
        <React.Fragment >
            <div className='overflow-x-auto'>
                <table className='w-screen bg-gray-100 '>
                    <thead className='h-16 p-4 text-xl text-blue-400 font-Kaushan lg:text-2xl '>
                        <tr  >
                            <th>Date</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Break</th>
                            <th>Working hours</th>
                        </tr>
                    </thead>
                    
                <tbody>
                    {
                            month.map((day,index)=>(
                                
                                <Day day={day} key={index} hoursArray={hoursArray} minutesArray={minutesArray}  />
                                
                            ))
                        }
                        
                </tbody>
            </table>
            </div>

        <div className='flex items-center justify-end p-4 mr-10'>       
            <button className='flex items-center justify-center px-5 py-1 mx-2 mr-3 font-bold text-white md:py-3 lg:text-xl print:hidden rounded-3xl bg-gradient-to-r from-green to-blue-500'
            onClick={timeOrReset ?calculFinalTime:calculResetTime} > 
            <AiOutlineFieldTime className='w-8 h-8 mr-3'/>
            {timeOrReset ?" Get total working hours":"Reset total working hours"} </button>
            <p className='text-3xl font-bold text-blue-500 font-Kaushan' >{resultTime}</p>
        </div>

        </React.Fragment>    
    )
}