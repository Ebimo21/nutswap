import { useState } from "react"
import DropDownArrow from "./icons/drop-down";

export default function CustomSelect({selectedToken, setSelectedToken, tokens}){
    // const options = [
    //     {
    //         id: 1,
    //         label: "TON",
    //         imgSrc: '/logo.png'
    //     },

    //     {
    //         id: 2,
    //         label: 'NUT',
    //         imgSrc: '/nuts.png'
    //     }
    // ]

    
    const [ dropDownOpen, setDropDownOpen ] = useState(false);
    const handleOptionClick = (token) =>{
       
        setSelectedToken(token);
        
        setDropDownOpen(false);
    }
    return(
        <div className="relative inline-block w-full text-white font-bold">
          <div className="custom-select inline-block pr-4">
            <div className="select-selected p-2 rounded cursor-pointer" onClick = {()=> setDropDownOpen(!dropDownOpen)}>
              { selectedToken && ( 
                <div className="flex items-center text-2xl">
                  <img src={selectedToken.icon} alt={selectedToken.name} className="w-6 h-6 mr-2" />
                  <span className="mr-2">{selectedToken.name}</span>
                  <span className={`${dropDownOpen ? "rotate-180": "rotate-0"} t transition-all duration-500`}><DropDownArrow /></span>

                </div>)
                // : (
                //     <div className="flex items-center text-xl">
                //       <img src={token.icon} alt={token.icon} className="w-6 h-6 mr-2" />
                //       <span className="mr-2">{token.name}</span>
                //       <DropDownArrow />
                //   </div>
                // )
                }
            </div>

            { dropDownOpen && (
                <div className="select-items absolute border border-gray-300 rounded-lg mt-1 w-full bg-[#1a1919f5] z-20">
                    
                    {tokens.map( (token, index) => ( 
                        <div key={index} className="option flex items-center p-2 cursor-pointer hover:bg-gray-500" onClick={()=>handleOptionClick(token)}>
                            <img src={token.icon} alt={token.name} className="w-6 h-6 mr-2" />
                            <span>{token.name}</span>
                        </div>
                    ) )}
                </div>
            )}
          </div>
        </div>
    )
}