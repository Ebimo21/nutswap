export default function SlippageBadge({amount, style, fn}){
    return (
            <input onClick={()=>fn(amount)}  type="button" value={amount} className={`${style} bg-[#574C37] text-[8px] text-center text-white p-1 rounded-lg font-medium w-8"`}/>
    )
} 