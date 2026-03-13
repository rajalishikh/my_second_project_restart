import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';

const Main_Section = ({cards,progress,SetProgress,SetResolved,resolved}) => {
  const notify = () => toast("Your card has been added successfully");
    
    const [singleCard,SetSingleCard]=useState([])
    const notify2 = () => toast("Resolved task Successfully");
    

    const handleCard=(id)=>{
      
      const find_Value=document.getElementById("First_result")
      find_Value.classList.add("hidden")

      const find_Complete_Card=document.getElementById("complete_card")
      find_Complete_Card.classList.remove("hidden")
      const FindCards=cards.filter(item=>item.id ===id )
      SetSingleCard((prevCards=>[...prevCards,...FindCards]))
      SetProgress(progress+1)
      notify()
 
    }
    const handleComplete=()=>{
      
      notify2()
      SetResolved(resolved+1)
      SetProgress(progress-1)
     
      
      
    }
    console.log("my single card",singleCard)
    return (
        <div className='flex  flex-col lg:flex-row lg:justify-between gap-5 pb-4'>
            {/* Customer cards  */}
            <div>
                <h2 className="text-3xl font-bold text-[#34485A]">Customer Tickets</h2>

            
            <div className=" grid grid-cols-1  lg:grid-cols-2 gap-2">
                {
                    cards.map((item,index)=>
                    
                    <div 
  key={index} 
  onClick={() => handleCard(item.id)} 
  className="w-full max-w-xl bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm font-sans cursor-pointer"
>
  {/* Top Section: Title and Status */}
  <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-4">
    <h2 className="text-lg md:text-[22px] font-semibold text-[#001931] leading-tight order-2 sm:order-1">
      {item.title}
    </h2>
    <div className={`flex items-center self-start ${item.status === "open" ? "bg-[#dcfce7]" : "bg-[#F8F3B9]"} px-3 py-1 md:px-4 md:py-1.5 rounded-full order-1 sm:order-2`}>
      <div className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full mr-2 ${item.status === "open" ? "bg-[#16a34a]" : "bg-[#FEBB0C]"}`} ></div>
      <span className={`${item.status === "open" ? "text-[#166534]" : "text-[#9C7700]"} text-xs md:text-sm font-medium capitalize`}>
        {item.status}
      </span>
    </div>
  </div>

  {/* Description Section */}
  <div className="mb-6 md:mb-8">
    <p className="text-[#64748b] text-sm md:text-lg leading-relaxed line-clamp-3 sm:line-clamp-none">
      {item.description}
    </p>
  </div>

  {/* Footer Section: Metadata */}
  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-[#64748b] border-t border-gray-50 pt-4">
    <div className="flex items-center gap-4 md:gap-6">
      <span className="text-xs md:text-sm font-normal">#{item.id}</span>
      <span className={`${item.priority === "highpriority" ? "text-red-600" : item.priority === "MEDIUM PRIORITY" ? "text-yellow-500" : "text-green-500"} text-[10px] md:text-xs font-bold tracking-widest uppercase`}>
        {item.priority}
      </span>
    </div>

    <div className="flex items-center justify-between sm:justify-end gap-4 md:gap-6">
      <span className="text-xs md:text-sm font-medium">{item.customer}</span>
      <div className="flex items-center gap-1.5">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-[18px] md:h-[18px]">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        <span className="text-xs md:text-sm">{item.createdAt}</span>
      </div>
    </div>
  </div>
</div>)
                }
<ToastContainer />
            </div>
            </div>

            {/* customer chose cards */}
            <div className="gap-3">
              <h2 className="text-3xl font-bold text-[#34485A]">Task Status</h2>
              <div id="complete_card" className="hidden">
                {singleCard.map(item=>
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 max-w-sm w-full mb-2">
        
        {/* Title Text */}
        <h2 className="text-[#0a1d37] text-[22px] font-medium mb-8 text-left">
         {item.title}
        </h2>

        {/* Action Button */}
        <button 
          onClick={()=>handleComplete(item.id)}
          className="w-full bg-[#00a843] hover:bg-[#008f39] text-white text-lg font-medium py-3 rounded-md transition-colors duration-200"
          
        >
          Complete
        </button>
        
                </div>)}
                

              </div>
                <div id="First_result" className="mb-2">
                    
                    <p className="text-sm text-[#627382]">Select a ticket to add to Task Status</p>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-[#34485A]">Resolved Task</h2>
                    <p>No resolved tasks yet.</p>

                </div>
                <div>

                </div>

            </div>
            
        </div>
    );
};

export default Main_Section;