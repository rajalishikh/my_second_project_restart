import { useEffect, useState } from "react";
import imag1 from '../../image/vector1.png';

const Result = () => {
    const [cardS,setCardS]=useState([])

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetch("/local.json"); // ২. সঠিক পাথ
                const data = await response.json();
                setCardS(data);
            } catch (error) {
                console.error("Data load করতে সমস্যা হয়েছে:", error);
            }
        };

        loadData();
    }, []);
    console.log(cardS)
    return (
        <div>
            {/* prograss  */}
            <div className="flex flex-col lg:flex-row gap-4 p-6 bg-gray-100 ">
      
      {/* In-Progress Card */}
      <div className="flex-1 h-48 rounded-lg flex flex-col items-center justify-center text-white shadow-lg 
        bg-linear-to-r from-[#6366f1] to-[#a855f7] relative overflow-hidden">

            <img src={imag1} class="absolute top-0 left-0   w-[40%]  lg:w-64 " alt="" srcset="" />
            <img src={imag1} class="absolute top-0 right-0  w-1/2  scale-x-[-1]  "  alt="" srcset="" />
            <div class=" z-10 text-center">
                <p class="text-sm lg:text-xl font-light tracking-wide opacity-90">In-Progress</p>
                <h1 class="text-sm lg:text-8xl font-bold mt-2">0</h1>
            </div>
           
            </div>

 {/* Resolved Card */}
             <div className="flex-1 h-48 rounded-lg flex flex-col items-center justify-center text-white shadow-lg 
        bg-linear-to-r from-[#22c55e] to-[#14532d] relative overflow-hidden">

            <img src={imag1} class="absolute top-0 left-0   w-[40%]  lg:w-64 " alt="" srcset="" />
            <img src={imag1} class="absolute top-0 right-0  w-1/2  scale-x-[-1]  pointer-events-none"  alt="" srcset="" />
            <div class="z-10 text-center">
                <p class="text-sm lg:text-xl font-light tracking-wide opacity-90">Resolved</p>
                <h1 class="text-sm lg:text-8xl font-bold mt-2">0</h1>
            </div>
       
      </div>
            
       
      </div>

     
     

           </div>
            
           
    );
};

export default Result;