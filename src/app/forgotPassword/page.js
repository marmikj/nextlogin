'use client'
import { Formik, Form as FormikForm, Field, validateYupSchema  } from "formik";
import Link from 'next/link'
import React from 'react'
import authServiceCls from "../services/authServices";
import * as Yup from "yup";

const forgotPassword = () => {  
const validationSchema = Yup.object({
  email:Yup.string().trim().required("Email is required").email('please enter your email')
})
  const onSubmit = (values) => {
    authServiceCls.sendResetPasswordLink(values.email).then((res)=>{
      console.log(res,"sadsd")
    })
  }
  return (
    <>
    <div className="relative items-center ">
      <div className="items-center z-10">
        <div className="min-h-screen h-full flex justify-center items-center w-full">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div className="sm:mx-auto sm:w-full sm:max-w-md -6 text-center justify-center mb-10">
                <h1 className="text-3xl text-gray-800 font-bold mb-6 items-center text-center">
                  <img
                     src={"HeaderLogoUrl_2.png"}
                    alt="Redefine Commerce"
                    className="w-60 items-center mx-auto"
                  />
                </h1>
              </div>
              <Formik
                initialValues={{ email: "" }}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                <FormikForm className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        name="email"
                        id="email"
                        className={
                          "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }
                      />
                      {/* <ErrorMessage
                        name={"email"}
                        component={FormErrorMessage}
                      /> */}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <button
                      type="submit"
                      className="w-full flex  justify-center align-middle"
                      // disabled={loading}
                    >
                      <div
                        className={`w-full flex justify-center align-middle py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 `}
                      >
                          <span className="spinner-border spinner-border-sm mr-2"></span>
                        Send Reset Link
                      </div>
                    </button>
                  </div>
                  <div className="text-center">
                    <Link
                      href={"/"}
                      className="w-full text-sm font-medium text-indigo-500 hover:text-indigo-600"
                    >
                      Back to Login
                    </Link>
                  </div>
                </FormikForm>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default forgotPassword