import vegs from '../assets/img/vegs.png'
import fruits from '../assets/img/fruits.png'

function Vegs() {
    return (
        <div className="flex gap-[1rem] justify-center">
            <div className="group w-[30%] bg-[rgb(209,236,240)] h-[40vh] p-[1rem] rounded relative overflow-hidden">
                <p className="text-green-700">20% off</p>
                <p className="text-[1.2rem] font-bold">FRESH VEGTABLES</p>
                <button className="bg-green-500 rounded text-white text-[12px] p-[0.5rem] mt-[1rem] cursor-pointer hover:bg-green-400">Shop Now</button>
                
                <img
                    src={vegs}
                    alt=""
                    className="h-[70%] absolute bottom-0 right-0 transition-transform duration-300 group-hover:scale-130"
                />
            </div>
            <div className="group w-[45%] bg-[rgb(238,209,240)] h-[40vh] p-[1rem] rounded relative overflow-hidden">
                <p className="text-green-700">20% off</p>
                <p className="text-[1.2rem] font-bold">FRESH VEGTABLES</p>
                <button className="bg-green-500 rounded text-white text-[12px] p-[0.5rem] mt-[1rem] cursor-pointer hover:bg-green-400">Shop Now</button>
                
                <img
                    src={fruits}
                    alt=""
                    className="h-[70%] absolute bottom-0 right-0 transition-transform duration-300 group-hover:scale-130"
                />
            </div>
        </div>
    )
}

export default Vegs;