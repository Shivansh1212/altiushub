import React from "react";

const Form = () => {
  return (
    <div name="form" className="flex flex-col items-center justify-center">
      <div className=" text-3xl font-bold text-white m-10">
        Feature 1: User registration
      </div>
      <div className=" m-5">
        <div className="my-5" name="email">
          <div className="font-bold text-xl my-2">Enter your email..</div>
          <textarea className="rounded-md h-9 w-80 bg-slate-300 px-2 py-1"></textarea>
        </div>
        <div className="my-5" name="password">
          <div className="font-bold text-xl my-2">Enter your password..</div>
          <textarea className="rounded-md h-9 w-80 bg-slate-300 px-2 py-1"></textarea>
        </div>
        <div className="my-5" name="username">
          <div className="font-bold text-xl my-2">Enter your username..</div>
          <textarea className="rounded-md h-9 w-80 bg-slate-300 px-2 py-1"></textarea>
        </div>
      </div>
      <div className="bg-blue-500 text-white rounded-md px-4 py-2 shadow-md hover:bg-blue-700 duration-300 font-semibold border border-blue-600 mb-36">
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Form;
