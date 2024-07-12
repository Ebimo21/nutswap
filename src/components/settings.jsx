import { useState } from "react";
import PercentBadge from "./percent_badge";

export default function Settings ({ stopFn}){

    
    

    return(
      <div onClick={stopFn} className="z-20 text-white fixed bg-black rounded-tl-xl rounded-tr-xl py-6 px-6 left-0  bottom-0">
        <h2 className="text-3xl text-center mb-5 font-bold">Advanced Settings</h2>
        <h3 className="font-medium text-2xl mb-3">Slippage</h3>
        <p className="text-sm text-[#ffffff7b]">Your transaction will revert if the price changes unfavourably by more than this percentage</p>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-x-2 gap-y-4">
            <PercentBadge style="w-20 text-sm py-2 bg-transparent border border-solid border-[#ffff6c]" amount="1%" />
            <PercentBadge style="w-20 text-sm py-2 bg-transparent border border-solid border-[#ffff6c]" amount="5%" />
            <PercentBadge style="w-20 text-sm py-2 bg-transparent border border-solid border-[#ffff6c]" amount="10%" />
            <PercentBadge style="w-full bg-transparent border border-solid border-[#ffff6c] text-[#ffff6c] text-xl py-4" amount="49%" />
        </div>

        <div className="mt-10 mb-9 border-t-[0.01px] border-t-solid border-[rgba(255,255,108,0.4)]"></div>
        <div>
          <button className='bg-[rgba(255,255,108,0.5)] block w-full text-center font-bold px-3 py-4 mb-8 rounded-xl uppercase'>Save</button>
      </div>
      </div>
    )
}