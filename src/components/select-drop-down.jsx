import { useState } from "react"
import DropDownArrow from "./icons/drop-down";

export default function CustomSelect({preset, src}){
    const options = [
        {
            id: 1,
            label: "TON",
            imgSrc: '/logo.png'
        },

        {
            id: 2,
            label: 'NUT',
            imgSrc: '/nuts.png'
        }
    ]

    const [ selectedOption, setSelectedOption ] = useState(null);
    const [ dropDownOpen, setDropDownOpen ] = useState(false);
    const handleOptionClick = (option) =>{
        setSelectedOption(option);
        setDropDownOpen(false);
    }
    return(
        <div className="relative inline-block w-64 text-white font-bold">
          <div className="custom-select inline-block pr-4">
            <div className="select-selected p-2 rounded cursor-pointer" onClick = {()=> setDropDownOpen(!dropDownOpen)}>
              { selectedOption ? ( 
                <div className="flex items-center text-2xl">
                  <img src={selectedOption.imgSrc} alt={selectedOption.label} className="w-6 h-6 mr-2" />
                  <span className="mr-2">{selectedOption.label}</span>
                  <DropDownArrow />

                </div>): (
                    <div className="flex items-center text-xl">
                      <img src={src} alt='Ton' className="w-6 h-6 mr-2" />
                      <span className="mr-2">{preset}</span>
                      <DropDownArrow />
                  </div>
                )
                }
            </div>

            { dropDownOpen && (
                <div className="select-items absolute vorder border-gray-300 rounded mt-1 w-full z-10">
                    {options.map( (option) => ( 
                        <div key={option.id} className="option flex items-center p-2 cursor-pointer hover:bg-gray-100" onClick={()=>handleOptionClick(option)}>
                            <img src={option.imgSrc} alt={option.label} className="w-6 h-6 mr-2" />
                            <span>{option.label}</span>
                        </div>
                    ) )}
                </div>
            )}
          </div>
        </div>
    )
}