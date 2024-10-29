import React from "react";

const Imageupload = () => {
  return (
    <div
      name="imageupload"
      className="flex flex-col items-center justify-center"
    >
      <div className=" text-3xl font-bold text-white m-5">
        Feature 2: Image Upload
      </div>
      <div className=" my-5 mx-10">
        <div className="my-5" name="email">
          <div className="font-bold text-xl my-2">
            Enter URL of image to be uploaded here..
          </div>
          <textarea className="rounded-md h-9 w-full bg-slate-300 px-2 py-1"></textarea>
        </div>
      </div>
      <div className="bg-blue-500 text-white rounded-md px-4 py-2 shadow-md hover:bg-blue-700 duration-300 font-semibold border border-blue-600 mb-36">
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Imageupload;
