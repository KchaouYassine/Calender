import React from 'react'
import dayjs from 'dayjs'

export default function GetMonth(month = dayjs().month()){
    // month = dayjs().month()
    const year = dayjs().year();
    // const firstDayOfTheMounth = dayjs(new Date(year,month,1)).day(); // Freitag 5

    const numberOfDays = dayjs(new Date(year,month+1,0)).format('DD');
    const dayArray = new Array(Number(numberOfDays))
    for(let i =0 ;i<Number(numberOfDays);i++){
        dayArray[i]=dayjs(new Date(year,month,(i+1)))
    }
    return dayArray
    
    
}
