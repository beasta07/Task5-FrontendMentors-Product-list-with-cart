import React, { useContext, useEffect, useRef } from 'react';
import { CartContext } from '../context/CartContext';

const ConfirmModel = ({ toggleModel, openModel }) => {
    const { cartItems } = useContext(CartContext)
    console.log(cartItems)
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)



    const modalRef = useRef(null);

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            toggleModel();
        }
    };

    useEffect(() => {
        if (openModel) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openModel]);

    if (!openModel) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div
                ref={modalRef}
                className="bg-white rounded-xl p-8 max-w-md w-full  shadow-lg"
            >
                <img
                    src="/assets/images/icon-order-confirmed.svg"
                    alt="Order Confirmed"
                    className=" mb-4"
                />
                <h1 className="text-3xl font-extrabold  mb-2">Order Confirmed</h1>
                <p className="text-gray-600 mb-6">We hope you enjoy your food!</p>
                <div className='m-4 bg-[#FDF9F5] rounded-xl p-4'>
                    {
                        cartItems.map((item, index) => (
                            <>
                                <li key={index} className="mb-2 flex items-center justify-between">
                                    <div className='flex gap-3 items-center'>
                                        <img src={item.image.desktop} className='size-10 rounded-lg' alt="" />
                                        <div className=''>
                                            <h1 className='font-semibold text-sm'>{item.name}</h1>
                                            <div className='flex mt-2 gap-5 text-sm'>
                                                <span className='text-red-700 font-semibold'>{item.quantity} x</span>
                                                <span className='text-gray-500 '>@ Rs {item.price}</span>
                                            </div>
                                        </div>

                                    </div>
                                    <span className='font-semibold'>Rs {item.price * item.quantity}</span>


                                </li><hr className='my-4 text-gray-200' /></>

                        ))}
                    <div className='flex justify-between'>
                        <h2 className='text-sm text-gray-800 font-medium'>Order Total</h2>
                        <h2 className='text-lg  font-semibold'>Rs {total}</h2>
                    </div>
                    <div>

                    </div>
                </div>
                <button
                    onClick={toggleModel}
                    className="mt-4 bg-red-700 text-white px-6 w-full py-2 rounded-full hover:bg-red-800"
                >
                    Start New Order
                </button>
            </div>
        </div>
    );
};

export default ConfirmModel;
