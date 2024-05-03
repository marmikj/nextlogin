"use client";
import React, { useState } from "react";
import authServiceCls from "../../services/authServices";
import { useRouter } from "next/navigation";

const page = (props) => {
  const [otp,setOtp]=useState("")
    const id = props.params.id
    const router = useRouter()
   const verifyotp =()=>{
    authServiceCls.verifyotp(Number(otp),Number(id))
    .then((res)=>{
      console.log(res.token ,"asdd")
      localStorage.setItem('token',res.token)
      alert("Login success!")
      return router.push('/dashboard')
    })
   }
  return (
    <>
      <div className="relative items-center">
        <div className="items-center z-10">
          <div className="min-h-screen h-full flex justify-center items-center w-full">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <img
                  src={"HeaderLogoUrl_2.png"}
                  alt="header logo"
                  className="w-60 items-center mx-auto"
                />
                <div >
                  <div className="space-y-6">
                    <div className="text-center">Two-Factor Authentication</div>
                    <div className="flex items-center justify-center">
                      <input
                        value={otp}
                        onChange={((e)=>setOtp(e.target.value))}
                        type="number"
                      />
                    </div>

                    <div className="text-center">
                      A message with a verification code has been sent to your
                      devices. Enter the code to continue.
                    </div>
                    <div>
                      <div className="text-center text-green-500 text-sm mb-1">
                        Verification code has been sent to your devices. Enter
                        the code to continue.
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={verifyotp}
                        className="w-full flex justify-center align-middle"
                      >
                        <div
                          className={`w-full cursor-pointer shadow sm:rounded-lg bg-[#295b4c] flex justify-center align-middle py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 }`}
                        >
                          <span className="spinner-border spinner-border-sm mr-2"></span>
                          Continue
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
