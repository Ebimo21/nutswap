export default function SlippageBadge({amount, style, fn}){
    return (
            <input 
              onClick={()=>fn(amount)}  
              type="button" 
              value={amount + "%"} 
              className={`${style} bg-[#574C37] text-[16px] text-center p-1 rounded-3xl font-bold w-8"`}/>
    )
} 