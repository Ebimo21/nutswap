export default function SlippageInputBadge({slippage, style, setSlippage}){
    
    return (
        <div className={`${style} bg-[#574C37] text-center p-1 rounded-lg font-bold w-8 flex items-center`}>
            <input 
                onClick={()=>fn(amount)}  
                type="number" 
                value={slippage} 
                onChange={(e)=>setSlippage(e.target.value)} 
                className={`bg-transparent outline-none text-center p-1 font-bold w-full py-3 `}
                />
            <span>%</span>
        </div>
    )
} 