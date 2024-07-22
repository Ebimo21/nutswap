export default function SlippageInputBadge({slippage, style, setSlippage}){
    
    return (
        <div className={`${style} bg-[#574C37] text-center p-1 rounded-lg font-bold flex items-center justify-center`}>
            <input 
                onClick={()=>fn(amount)}  
                type="text" 
                inputMode="decimal"
                maxLength={3}
                value={slippage} 
                onChange={(e)=>setSlippage(e.target.value)} 
                placeholder="Custom"
                className={` bg-transparent placeholder-gray-500 outline-none ${ slippage > 0 ? "text-right w-12": "text-left w-20" }  p-1 font-bold  py-3 `}
                />
            <span className={`${ slippage > 0 ? "": "text-gray-500"}`}>%</span>
        </div>
    )
} 