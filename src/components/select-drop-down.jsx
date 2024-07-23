import { useState } from "react"
import DropDownArrow from "./icons/drop-down";

export default function CustomSelect({selectedToken, setSelectedToken, tokens, tokenBal, setTokenBal}){
    
    const [ dropDownOpen, setDropDownOpen ] = useState(false);
    const handleOptionClick = (token) => {
        setSelectedToken(token);
        setTokenBal(token.bal)
        console.log(token.bal)
        setDropDownOpen(false);
    }

    return(
        <div className="relative inline-block w-full text-white font-bold">
          <div className="custom-select inline-block w-full">
            <div className="flex justify-between items-center select-selected p-2 " >
            <div className="select-selected p-2 rounded cursor-pointer" onClick = {()=> setDropDownOpen(!dropDownOpen)}>
              { selectedToken && ( 
                <div className="flex items-center text-2xl">
                  <img src={selectedToken.icon} alt={selectedToken.name} className="w-6 h-6 mr-2" />
                  <span className="mr-2">{selectedToken.name}</span>
                  <span className={`${dropDownOpen ? "rotate-180": "rotate-0"} t transition-all duration-500`}><DropDownArrow /></span>
                </div>)

                
                
                }

<div>
                </div>
                </div>
                  <div className="text-xs text-gray-500">Bal: {tokenBal}</div>
            </div>

            { dropDownOpen && (
                <div className="px-2 select-items absolute border border-gray-300 rounded-lg mt-1 w-full bg-[#1a1919f5] z-20">
                    <input type="text" className="w-full bg-[#4a49499e] my-2 p-2 outline-none rounded-2xl" placeholder="Paste token contract address" />
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