import React from "react";
import { IoCreateOutline } from "react-icons/io5";
import { MdSystemUpdate } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Task_management = () => {
  return (
    <div name="name" className="flex flex-col items-center justify-center">
      <div className="text-3xl font-bold text-white m-10">
        Feature 4: Task management
      </div>
      <div className="m-5">
        <div className="flex flex-row">
          <div className="font-bold text-xl my-2">
            Enter details of new task..
          </div>
        </div>
        <div className="flex items-center justify-center">
          <textarea className="rounded-md h-9 w-80"></textarea>
          <div className="cursor-pointer ml-20">
            <IoCreateOutline size={50} color="1d4ed8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task_management;
