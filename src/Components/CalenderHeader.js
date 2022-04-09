import React ,{useContext} from 'react'
import GlobalContext from '../Contexts/GlobalContext';
import dayjs from 'dayjs';
import {HiOutlineChevronDoubleRight} from 'react-icons/hi'
import {HiOutlineChevronDoubleLeft} from 'react-icons/hi'

export default function CalenderHeader(){

    const {monthIndex,setMonthIndex} = useContext(GlobalContext)
    function handlePrevMonth(){
        setMonthIndex(monthIndex - 1)
    }
    function handleNextMonth(){
        setMonthIndex(monthIndex + 1)
    }
    function handleResettMonth(){
        setMonthIndex(dayjs().month())
    }
    return (
        <header className="flex items-center justify-between px-4 py-2 my-4 md:justify-center print:justify-center ">
          
          <button onClick={handlePrevMonth} className=" print:hidden">
          <HiOutlineChevronDoubleLeft className='w-10 h-10 p-3 text-white rounded-3xl bg-gradient-to-r from-green-400 to-blue-400 ' />
          </button>
          <button
            onClick={handleResettMonth}
            className="px-4 py-2 m-3 text-2xl font-bold text-white border md:w-1/4 rounded-3xl bg-gradient-to-r from-green-400 to-blue-400"
          >
           {dayjs(new Date(dayjs().year(), monthIndex)).format(
              "MMMM YYYY"
            )}
          </button>

          <button onClick={handleNextMonth} className=" print:hidden" >
            <HiOutlineChevronDoubleRight className='w-10 h-10 p-3 text-white rounded-3xl bg-gradient-to-r from-green-400 to-blue-400 ' />
          </button>

          
        </header>
      );
    }