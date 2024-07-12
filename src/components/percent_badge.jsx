export default function PercentBadge({amount, style}){
    return (
            <button className={`${style} bg-[#574C37] text-[8px] text-center text-white p-1 rounded-lg font-medium w-8"`}> {amount} </button>
    )
}