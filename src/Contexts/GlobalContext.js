import React from "react";

const GlobalContext = React.createContext({
    monthIndex:0,
    setMonthIndex:(index)=>{},
    firstName:'',
    setFirstName:(index)=>{},
    lastName:'',
    setLastName:(index)=>{},
    companyName:'',
    setcompanyName:(index)=>{},
    companyOrPrivate:false,
    setCompanyOrPrivate:()=>{},
    showCard:true,
    setShowCard:()=>{},


})
export default GlobalContext