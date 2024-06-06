import React from "react";
import { Checkbox } from 'antd';

function Form() {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className="font-poppins">
      <h1 className="text-5xl font-bold">Login</h1>
      <p className="text-lg text-gray-500 mt-4">Welcome! Please enter your account</p>
      <div className="mt-8">
        <div>
          <label className="text-lg font-medium">Username</label>
          <input 
            className="w-full border-2 border-gray-200 rounded-xl p-3 mt-1" 
            placeholder="Enter your username" 
          />
        </div>
        <div className="mt-3">
          <label className="text-lg font-medium">Password</label>
          <input
            className="w-full border-2 border-gray-200 rounded-xl p-3 mt-1"
            placeholder="Enter your password"
            type="password"
          />
        </div>
        <div className="mt-5">
          <Checkbox style={{fontFamily: 'Poppins' }} onChange={onChange}>Remember me</Checkbox> {/* Perbaikan tag Checkbox */}
        </div>
        <div className="mt-5 flex flex-col gap-y-4">
          <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-red-600 text-white text-lg">Log in</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
