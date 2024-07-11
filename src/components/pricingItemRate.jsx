import Conversion from "./icons/conversion";

export default function PricingItemRate({ title, value, basePair, subPair}){
    return(
        <span className="text-[10px]  flex items-center justify-between">
            <span className="text-[#9D9463]">{title}</span>
            <span className="flex items-center gap-2 text-white">1 {basePair} = {value} {subPair} <Conversion /></span>
        </span>
    )
}