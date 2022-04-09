import React ,{useState ,useContext} from 'react'

import GlobalContext from '../Contexts/GlobalContext';
import {AiOutlineCheck} from 'react-icons/ai'



export const Card = ({closeCard}) => {

    const {firstName,setFirstName,lastName,setLastName,companyName,setcompanyName,setCompanyOrPrivate,companyOrPrivate}=useContext(GlobalContext)
    const [showCompanyName, setShowCompanyName] = useState(false)
    
   
   
    // to do deleate showCompanyName
    const handleCompany = ()=>{
        setShowCompanyName(true)
        setCompanyOrPrivate(true)
    }

    const handlePrivate = ()=>{
        setShowCompanyName(false)
        setCompanyOrPrivate(false)
    }

    

  return (
    <div className='fixed flex items-center justify-center w-screen h-screen bg-gradient-to-r from-green-400 to-blue-400 ' style={{margin:'-1.25rem'}}>
        <div className='p-5 text-gray-500 bg-white shadow-2xl w-80 md:w-96 rounded-3xl '>
           <h1 className='my-5 text-5xl font-bold text-center font-Kaushan text-green'>Welcome</h1>
           
        
           <div className='p-2 mb-4 bg-gray-200 md:p-4 rounded-xl ' >
            <label className='mr-2 text-blue-500 md:text-xl '>First name:</label>
            <input type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} />
           </div> 
           
           <div className='p-2 mb-4 bg-gray-200 md:p-4 rounded-xl ' >
           <label className='mr-2 text-blue-500 md:text-xl '>Last name:</label>
            <input type="text"  value={lastName} onChange={(e)=>{setLastName(e.target.value)}} />
           </div>

            <small className='block mb-3'>Use this time schedule for yourself or send it to a company ?</small>
            <div className='flex items-center justify-center mb-6'>

                <button className={`px-5 py-2 m-2 bg-gray-100 rounded-3xl flex items-center ${companyOrPrivate? 'text-blue-500 text-2xl':' text-xl'} `} onClick={handleCompany} >
                    Company {companyOrPrivate ? <AiOutlineCheck className='w-5 h-5 ml-2' /> : null}  </button>
                <button className={`px-5 py-2 m-2  bg-gray-100 rounded-3xl flex items-center ${!companyOrPrivate? 'text-blue-500 text-2xl':' text-xl'} `} onClick={handlePrivate} >
                    Personal  {companyOrPrivate ? null : <AiOutlineCheck className='w-5 h-5 ml-2' />}</button>
                
            
            </div>
                {showCompanyName ?
                    <div className='p-2 mb-4 bg-gray-200 md:p-4 rounded-xl ' >
                        <label className='mr-2 text-blue-500 md:text-xl '>Company name</label>
                        <input type="text" value={companyName}  onChange={(e)=>{setcompanyName(e.target.value)}} />
                    </div>
                    :
                    null
                }
           

            <button className='w-full px-5 py-2 text-xl text-center text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400' onClick={closeCard} > Register </button>
          
        </div>
    </div>
  )
}

