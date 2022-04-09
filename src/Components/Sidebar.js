import React , {useEffect ,useRef ,useState ,useContext} from 'react'
import GlobalContext from '../Contexts/GlobalContext';
import {Card} from './Card'
import { VscFilePdf} from 'react-icons/vsc'
import {MdAccountCircle} from 'react-icons/md'
import {AiFillCompass} from 'react-icons/ai'
const Sidebar = ({handlePrint}) => {
    const {firstName,lastName,companyName,companyOrPrivate}=useContext(GlobalContext)
    let firstButton =  useRef();
    let secondButton =  useRef();
    const [maxWidth ,setMaxWidth] = useState(0);
    const [showCard , setShowCard] = useState(false)

    useEffect(() => {
        setMaxWidth(firstButton.current.offsetWidth>secondButton.current.offsetWidth ?firstButton.offsetWidth:secondButton.offsetWidth);
    },[])

    const changeCordinates =()=>{
        setShowCard(true)
    }
    function closeCard(){
        setShowCard(false)
    }
  return (
    <React.Fragment>
        {
            showCard ? <Card closeCard={closeCard} /> : null
        }
        <div className='flex flex-col items-center justify-between px-4 py-2 text-gray-400 bg-white bg-red rounded-3xl md:flex-row print:flex-row ' >
                <div className='flex items-center justify-center h-10 px-5 py-2 mx-2 text-blue-400 bg-gray-100 rounded-3xl md:h-16 '>
                    <span><AiFillCompass className='w-5 h-5 mr-2' />  </span>
                    {
                        companyOrPrivate ?< p className="text-xl "> {companyName}</p> :< p className="text-xl "> Personal </p>
                    }
                    
                </div>
        
                <h3 className='my-2 text-3xl font-bold tracking-wider font-Kaushan md:my-4'><span className='text-green ' >{firstName} </span>{lastName}</h3>
                <div className='flex flex-col items-center justify-center print:hidden md:flex-row '>
            
                    <button className='flex items-center justify-center h-10 px-5 py-2 m-2 text-white rounded-full md:h-16 bg-gradient-to-r from-green-400 to-blue-400'
                    onClick={changeCordinates} ref={firstButton} style={{maxWidth}} >  < MdAccountCircle className='w-6 h-6 mr-2 ' /> My account</button>

                    <button className= 'flex items-center justify-center h-10 px-5 py-2 m-2 text-white rounded-full md:h-16 bg-gradient-to-r from-green-400 to-blue-400' ref={secondButton} onClick={handlePrint}   style={{maxWidth}} >
                       
                     <VscFilePdf className='w-6 h-6 mr-2' />  Download PDF
                    </button>
                </div>

        </div>
    </React.Fragment>
  )
}

export default Sidebar
