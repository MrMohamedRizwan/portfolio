export default function Degree2(){
    return(
        <div
        className="flex flex-col rounded-sm bg-white dark:bg-mid p-3.5 gap-y-3.5 group border-2 dark:border-mid  hover:border-brand border-transparent cursor-pointer transition-all duration-150 ease-in-out relative"
      // onClick={redirectToHashnode}
    >
      
      <div className="flex flex-col px-2 gap-y-1.5">
        <h2 className="mb-0 ">Higher secondary</h2>
        <h3 style={{ color: '#8386D0' }}>2019-2021</h3>
        <h6 className="mb-0 text-sm font-semibold font-body">
          {/* {formattedDate} */}
        </h6>
        <p className="mb-0">Nirmala Matha Convent Matric Hr. Sec. School Coimbatore</p>
        <p className="btn-xs btn-brand self-start mt-3">85.9 Percentage</p>
      </div>
      <div >
        <div >
          <div >
            {/* <p className="mb-0 dark:text-white text-white">Open</p> */}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 0 0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    
      {/*  */}
      
      </div>
    )
};