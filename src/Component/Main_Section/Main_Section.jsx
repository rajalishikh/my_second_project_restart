
const Main_Section = ({cards}) => {
    console.log("Total cards",cards)
    return (
        <div className='flex  flex-col lg:flex-row lg:justify-between gap-5 pb-4'>
            {/* Customer cards  */}
            <div>
                <h2>Customer Tickets</h2>

            
            <div className=" grid grid-cols-1  lg:grid-cols-2 gap-2">
                {
                    cards.map((item)=><div className="max-w-xl bg-white p-6 rounded-xl border border-gray-100 shadow-sm font-sans">
      {/* Top Section: Title and Status */}
      <div className="flex justify-between items-start mb-3">
        <h2 className="text-[22px] font-semibold text-[#1e293b] leading-tight">
          {item.title}
        </h2>
        <div className={`flex items-center ${item.status==="open"?"bg-[#dcfce7]":"bg-[#F8F3B9]"}  px-4 py-1.5 rounded-full`}>
          <div className={`w-2.5 h-2.5 rounded-full mr-2 ${item.status==="open"? "bg-[#16a34a]" : "bg-[#FEBB0C]"}`} ></div>
          <span className={`${item.status === "open" ? "text-[#166534]" : "text-[#9C7700]"} text-sm font-medium`}>{item.status}</span>
        </div>
      </div>

      {/* Description Section */}
      <div className="mb-8">
        <p className="text-[#64748b] text-lg leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Footer Section: Metadata */}
      <div className="flex items-center justify-between text-[#64748b]">
        <div className="flex items-center gap-6">
          <span className="text-sm font-normal">#{item.id}</span>
          <span className={`${item.priority==="highpriority"?"text-red-600":item.priority==="MEDIUM PRIORITY"?"text-yellow-500":"text-green-500"} text-xs font-bold tracking-widest uppercase`}>
           {item.priority}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-sm font-medium">{item.customer}</span>
          <div className="flex items-center gap-2">
            {/* Simple Calendar SVG Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span className="text-sm">{item.createdAt}</span>
          </div>
        </div>
      </div>
    </div>)
                }

            </div>
            </div>

            {/* customer chose cards */}
            <div>
                <div>
                    <h2>Task Status</h2>
                    <p>Select a ticket to add to Task Status</p>
                </div>
                <div>
                    <h2>Resolved Task</h2>
                    <p>No resolved tasks yet.</p>
                </div>

            </div>
            
        </div>
    );
};

export default Main_Section;