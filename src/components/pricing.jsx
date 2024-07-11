import PricingItem from "./pricingItem";
import PricingItemRate from "./pricingItemRate";

export default function Pricing({basePair = "TON", subPair = "DOGE"}){
    return(
        <div className="flex flex-col gap-2 p-3 rounded-md border border-solid border-[#FFFF6C]">
            <PricingItemRate 
                basePair={basePair} 
                subPair={subPair}
                title="Rate"
                value="15,678.62" />

            <PricingItem
                title="Minimum Recieved"
                value="15,010.12"
                unit={subPair}
            />

            <PricingItem
                title="Price Impact"
                value="< 0.05%"
            />

            <PricingItem
                title="Tx Fee"
                value="0.2 -- 0.05"
                valueClx="bg-[#9D9463] px-[2px] py-[1px]"
                />
        </div>
    )
}