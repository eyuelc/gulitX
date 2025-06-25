import OrderProgress from './ordProg';
import MyOrdSum from './myOrdSum';

export default function MyOrdCard({ id, orderNumber, status, items }) {
  return (
    <div className="flex p-[1rem] justify-around border-b-2 border-gray-300">
      <div className="flex flex-col w-[70%]">
        <p className="text-[1.3rem] font-bold">Items ordered & Delivery details</p>
        <p className='font-bold'>Order {orderNumber}</p>
        <p>
          <span className="text-red-500 font-bold">ORDER ID: </span>{id}
        </p>
        <OrderProgress status={status} />

        {items.map((item, index) => (
          <div key={index} className='flex h-[20vh] w-[50%] items-center gap-[1rem] mt-2'>
            <img src={item.image} alt={item.name} className='h-[80%] w-[26%] object-cover' />

            <div className="flex flex-col">
              <p className='text-[1.2rem] font-bold'>{item.name}</p>
              <p>Amount: <span className='font-bold'>{item.quantity} {item.unit}</span></p>
              <p className='font-bold'>{item.price * item.quantity} Br</p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-[30%]'>
        <MyOrdSum items={items} />
      </div>
    </div>
  );
}
