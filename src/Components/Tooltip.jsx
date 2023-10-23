import React, { useState } from "react";

const Tooltip = () => {
  // state for set tooltip tex
  const [tooltipText, setTooltipText] = useState("");

  // state for set tooltip direction
  const [direction, setDirection] = useState("");

  // state for display tooltip
  const [display, setDisplay] = useState(false);

  return (
    <div>

      {/* heading  */}
      <h1 className="text-center py-10 text-[2rem] font-semibold">
        React Tooltip
      </h1>

         {/* tooltip container  */}
      <div
        className="flex flex-col gap-y-8 w-11/12 max-w-[1000px]
       mx-auto border border-blue-200 p-20"
      >

        {/* input container to set tooltipText  */}
        <div className="text-center w-11/12 max-w-[500px] mx-auto">
          <form action="" className="w-full">
            <input
              value={tooltipText}
              onChange={(e) => {
                setTooltipText(e.target.value);
              }}
              type="text"
              placeholder="Enter Tooltip text"
              className="border border-blue-300 rounded-md px-4 py-1 focus:outline-blue-400 w-full text-center"
            />
          </form>
        </div>
            
         {/* div for horizontal line      */}
        <div className="w-full h-[1px] border border-blue-100"></div>
          

          {/* contaianer for tooltip btn and directon  */}
        <div className="flex flex-row gap-x-5">

          {/* contaioner for tooltip and tooltip btn  */}
          <div className="w-[75%] border border-blue-300 h-[300px] flex justify-center items-center gap-x-3 gap-y-3">
            <div
              className="bg-blue-400 text-white text-sm px-5
             py-1 rounded-md cursor-pointer relative"
              onClick={() => setDisplay(!display)}
            >
              click here one time
              <span
                className={`absolute ${
                  direction === "top" ? "top-[-100%] left-[30%]" : ""
                } ${direction === "right" ? "right-[-135%]" : ""}  ${
                  direction === "bottom" ? "bottom-[-100%] left-[30%]" : ""
                } ${direction === "left" ? "left-[-50%]" : ""} ${
                  display ? "inline" : "hidden"
                } ${
                  direction === "none" ? "hidden" : ""
                } text-black inline-block w-[200px] `}
              >
                {tooltipText ? tooltipText : "ram kumar"}
              </span>
            </div>
          </div>

            
            {/* contaianaer to choose tooltip direction  */}
          <div
            className="w-[25%] border border-blue-300 text-center
           p-4"
          >
            <p className="py-5 font-semibold">Select direction </p>
            <select
              name=""
              id=""
              className="w-full text-center outline-blue-300"
              onChange={(e) => {
                setDirection(e.target.value);
              }}
            >
              <option value="none">no direction</option>
              <option value="top">Top</option>
              <option value="right">Right</option>
              <option value="bottom">Bottom</option>
              <option value="left">Left</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
