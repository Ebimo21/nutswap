export default function PercentBadge({amount, display, style, inputPercent }){
    // const amt = Number(amount)
    return (
            <input onClick={()=>inputPercent(amount)} type="button" value={display} className={`${style} bg-[#574C37] text-[8px] text-center text-white p-1 rounded-lg font-medium w-8"`}/>
    )
} 