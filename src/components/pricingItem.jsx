export default function PricingItem({ title, value, unit, valueClx }){
    return(
        <span className="text-[10px] flex items-center justify-between">
            <span className="text-[#9D9463]">{title}</span>
            <span className={`flex items-center gap-2 text-white ${valueClx}`}> {value} {unit}</span>
        </span>
    )
}