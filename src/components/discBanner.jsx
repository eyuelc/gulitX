import green from '../assets/img/greenvegs.png'

function DB() {
    return (
        <div className="group w-full h-[50vh] bg-black text-white flex items-center justify-center relative overflow-hidden">
            <div className="flex flex-col items-center gap-[1rem] z-10">
                <p className="text-[1.4rem]">
                    Discount on Green veggies for <span className="text-orange-500 font-bold">THIS WEEK</span> only
                </p>
                <p className="text-[13px] text-gray-300">Discount stays only for this week on gulitX</p>
                <div className="flex gap-[1rem]">
                    {["6", "17", "21"].map((val, i) => (
                        <div
                            key={i}
                            className="flex flex-col border-t-2 border-l-2 border-b-2 border-r-2 
                                       border-t-orange-500 border-l-orange-500 border-b-white border-r-white 
                                       rounded-[0.5rem] h-[55px] w-[55px] items-center justify-center"
                        >
                            <p className="text-[1.5rem] font-bold">{val}</p>
                            <p className="text-[12px]">{["Days", "Hours", "Minutes"][i]}</p>
                        </div>
                    ))}
                </div>
            </div>
            <img
                src={green}
                alt=""
                className="h-[40vh] absolute bottom-0 right-0 transition-transform duration-300 ease-in-out group-hover:scale-120"
            />
        </div>
    );
}

export default DB;
