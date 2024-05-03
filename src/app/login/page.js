"use client";
import * as Yup from "yup";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import Link from "next/link";
import authServiceCls from "../services/authServices";
import { useRouter } from "next/navigation";
const LoginForm = () => {
  const router = useRouter();
  const handleSubmit = (values) => {
    authServiceCls
      .login({
        ...values,
      })
      .then((res) => {
        if (res?.userid) {
          console.log(res?.userid, "dafasf");
          authServiceCls.getUserById(res?.userid).then((res) => {
            console.log(res?.id, "user");
            authServiceCls.getOtpTimeout(res?.id).then((res) => {
              console.log(res,"dasdasdasds");
            });
            return router.push(`/twofector/${res?.id}`);
          });
        } else if (res.isAuthenticated) {
        }
      });
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .trim()
      .required("Email is required.")
      .email("Please enter a valid email address."),
    password: Yup.string().trim().required("Password is required."),
    // captcha: Yup.string().trim().required("Captcha is required."),
  });
  return (
    <>
      <div className="relative items-center ">
        <div className="items-center z-10">
          <div className="min-h-screen h-full flex justify-center items-center w-full">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <div className="sm:mx-auto sm:w-full sm:max-w-md -6 text-center justify-center mb-10">
                  <h1 className="text-3xl text-gray-800 font-bold mb-6 items-center text-center flex justify-center">
                    <img
                      src={"HeaderLogoUrl_2.png"}
                      alt="header logo"
                      className="w-60 items-center mx-auto"
                    />
                  </h1>
                </div>

                {/* <!-- Form --> */}
                <Formik
                  enableReinitialize={true}
                  validationSchema={validationSchema}
                  initialValues={{
                    email: "",
                    password: "",
                    rememberMe: false,
                    browser: "string",
                    location: "string",
                    ipAddress: "192.168.1.1",
                    macAddress: "00-00-00-00-00-00",
                  }}
                  onSubmit={handleSubmit}
                >
                  {({ errors, setFieldValue, values }) => {
                    return (
                      <FormikForm>
                        <div className="space-y-6">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-700"
                              htmlFor="email"
                            >
                              Email Address
                            </label>
                            <Field
                              type="text"
                              name="email"
                              id="email"
                              className={
                                "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              }
                            />
                            <ErrorMessage name={"email"} />
                          </div>
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-700"
                              htmlFor="password"
                            >
                              Password
                            </label>
                            <Field
                              type="password"
                              name="password"
                              id="password"
                              className={
                                "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              }
                            />
                            <ErrorMessage name={"password"} />
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-6">
                          <div className="flex items-center justify-between align-middle">
                            <input
                              id="remember-me"
                              name="remember-me"
                              type="checkbox"
                              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                              onChange={(e) => {
                                setFieldValue("rememberMe", e.target.checked);
                              }}
                              checked={values.rememberMe}
                            />
                            <label
                              htmlFor="remember-me"
                              className="ml-2 block text-sm text-gray-900"
                            >
                              Remember me
                            </label>
                          </div>
                          <div className="text-sm">
                            <Link
                              href="/forgotPassword"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Forgot your password?
                            </Link>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-6">
                          <button
                            type="submit"
                            // onClick={() => router.push(`/twofector`)}
                            id={"signIn"}
                            className={`w-full flex justify-center align-middle py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 }`}
                            // disabled={loading || values.captcha === ""}
                          >
                            <span className="spinner-border spinner-border-sm mr-2"></span>
                            Sign In
                          </button>
                          {/* </button> */}
                        </div>
                      </FormikForm>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
