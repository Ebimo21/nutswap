import ArrowUp from "./icons/arrow-up";

export default function Chart(){
    return(
        <div className=" text-white items-center justify-between bg-[#574c374b] p-4 mt-2 rounded-3xl border-[3px] border-[#FFFF6C] border-solid ">
            <div className="flex justify-between mb-4">
                <div className="flex gap-2 items-center">
                    <img src="/logo.png" />
                    <span>TON</span>
                </div>
                <div>
                    <img src="/Vector 10.png" />
                </div>
            </div>
            <div className="flex justify-between">
                <div className="">
                    <span className="text-[#9D9463] flex items-center gap-2">Price <span className="text-base text-white font-semibold">$6.5</span></span>
                </div>
                <div>
                    <span className="text-[8px] font-bold text-[#9D9463] flex items-center gap-2 ">ATH <span><ArrowUp /></span> <span className="text-sm text-[#53D258] font-bold"> +35,74%</span></span>
                </div>
            </div>
        </div>
    )
}