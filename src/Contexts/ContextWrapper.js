import React , {useState} from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

export default function ContextWrapper(props){
    const[monthIndex,setMonthIndex] = useState(dayjs().month());
    const [firstName ,setFirstName]  = useState('') ;
    const [lastName ,setLastName]  = useState('') ;
    const[companyOrPrivate ,setCompanyOrPrivate] =useState(false) //true for company
    const [companyName , setcompanyName ] =useState('');
    const [showCard , setShowCard] = useState(false)

   
    return(
        <GlobalContext.Provider value={{
            monthIndex,setMonthIndex,
            firstName,setFirstName,
            lastName,setLastName,
            companyName,setcompanyName,
            companyOrPrivate,setCompanyOrPrivate,
            showCard,setShowCard
        }}>
            {props.children}
        </GlobalContext.Provider>
        )
}