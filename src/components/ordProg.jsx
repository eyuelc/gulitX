import { FaCheck } from "react-icons/fa";

export default function OrderProgress() {
  return (
    <div className="w-full flex flex-col items-center mt-10">
      <div className="flex items-center justify-center w-[80%] relative">
        {/* Step 1 */}
        <div className="flex flex-col items-center w-1/3">
          <div className="bg-green-500 text-white rounded-full h-10 w-10 flex items-center justify-center z-10">
            <FaCheck size={16} />
          </div>
          <p className="mt-2 text-sm text-center">Ordered</p>
        </div>

        {/* Line between Step 1 and Step 2 */}
        <div className="absolute top-[1.25rem] left-[calc(16.66%+20px)] w-[calc(33.33%-40px)] h-1 bg-green-500 z-0"></div>

        {/* Step 2 */}
        <div className="flex flex-col items-center w-1/3">
          <div className="bg-green-500 text-white rounded-full h-10 w-10 flex items-center justify-center z-10">
            <FaCheck size={16} />
          </div>
          <p className="mt-2 text-sm text-center">Start Delivering</p>
        </div>

        {/* Dashed Line between Step 2 and Step 3 */}
        <div className="absolute top-[1.25rem] left-[calc(49.99%+20px)] w-[calc(33.33%-40px)] h-1 border-t-2 border-dashed border-gray-400 z-0"></div>

        {/* Step 3 */}
        <div className="flex flex-col items-center w-1/3">
          <div className="border-2 border-gray-400 rounded-full h-10 w-10 flex items-center justify-center z-10 text-gray-500 bg-white">
            {/* Empty circle */}
          </div>
          <p className="mt-2 text-sm text-center">Delivered</p>
        </div>
      </div>
    </div>
  );
}
