import React ,{useState,useContext,useEffect} from 'react'
import GetMonth from '../util'
import CalenderHeader from './CalenderHeader'
import Month from './Month'
import GlobalContext from '../Contexts/GlobalContext'

export default function Calender(){
    
    const [currentMonth , setCurrentMonth] = useState(GetMonth())
    const {monthIndex} = useContext(GlobalContext);
    useEffect(() =>{
        setCurrentMonth(GetMonth(monthIndex))
    },[monthIndex] )
    
    return(
        <React.Fragment>
            <div className='flex flex-col my-4 bg-white my-y-4 rounded-3xl '>
                
                <CalenderHeader />
                <Month month={currentMonth} />
   
            </div>
        </React.Fragment>
        )
}
