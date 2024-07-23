import { useState } from "react";
import SlippageBadge from "./slippage_badge";
import SlippageInputBadge from "./slippage_input_badge";

export default function Settings ({ stopFn, closeSettings, cardOpen }){
  const [ slippage, setSlippage ] = useState();
  const handleSetSlippage = (val) => { setSlippage(val) };

    return(
      <div onClick={stopFn} className={` ${cardOpen ? "animate-refine-slide-in": "" } an ani z-20 text-white fixed bg-black rounded-tl-xl rounded-tr-xl py-6 px-6 left-0  bottom-0 `}>
        <h2 className="text-3xl text-center mb-5 font-bold">Advanced Settings</h2>
        <h3 className="font-medium text-2xl mb-3">Slippage</h3>
        <p className="text-sm text-[#ffffff7b]">Your transaction will revert if the price changes unfavourably by more than this percentage</p>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-x-2 gap-y-4">
            <SlippageBadge fn={handleSetSlippage} style={` ${slippage == 1 ? "border-[rgba(255,255,108,0.5)] border text-[rgba(255,255,108,0.5)] ": ""} w-24 text-sm py-2 bg-transparent `} amount={1} />
            <SlippageBadge fn={handleSetSlippage} id="five" style={` ${slippage == 5 ? "border-[rgba(255,255,108,0.5)] border text-[rgba(255,255,108,0.5)]": ""} w-24 text-sm py-2 bg-transparent`} amount={5} />
            <SlippageBadge fn={handleSetSlippage} style={` ${slippage == 10 ? "border-[rgba(255,255,108,0.5)] border text-[rgba(255,255,108,0.5)]": ""} w-24 text-sm py-2 bg-transparent`} amount={10} />
            <SlippageInputBadge 
              setSlippage={handleSetSlippage} 
              style={` ${slippage == "Custom %" ? "": ""} w-full bg-transparent text-[#ffff6c] text-xl `} 
              slippage={slippage} />
        </div>

        <div className="mt-10 mb-9 border-t-[0.01px] border-t-solid border-[rgba(255,255,108,0.4)]"></div>
        <div>
          <button onClick={()=>closeSettings(prev =>!prev)} className='bg-[rgba(255,255,108,0.5)] block w-full text-center font-bold px-3 py-4 mb-8 rounded-xl uppercase'>Save</button>
        </div>
      </div>
    )
}