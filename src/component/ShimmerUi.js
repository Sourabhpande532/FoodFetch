import React from "react";

const ShimmerUi = () => {
  return (
    <div className='flex flex-wrap'>
      {Array(18)
        .fill("")
        .map((e,index) => (
          <div key={index} className='w-[200px] h-[200px] bg-gray-200 m-[20px]'></div>
        ))}
    </div>
  );
};

export default ShimmerUi;
