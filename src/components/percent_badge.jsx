export default function PercentBadge({amount, display, style, inputPercent }){
    // const amt = Number(amount)
    return (
            <input onClick={()=>inputPercent(amount)} type="button" value={display} className={`${style} bg-[#574C37] text-[16px] text-center text-white p-1 rounded-xl font-medium w-8"`}/>
    )
} 