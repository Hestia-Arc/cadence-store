import proImg from "../../assets/cadence-auth-img-desktop.png";
import { ButtonPrimary } from "../../components/Elements";
import { useState } from "react";

const inputStyle =
  "h-[40px] border-b-[1px] border-gray-300 bg-[transparent] outline-none px-1";
function Auth() {
  const [switchAuth, setSwitchAuth] = useState("signup");

  return (
    <div className=" h-[100vh] w-full flex justify-center items-center">
      <div className="h-full min-w-[375px] max-w-[385px] sm:h-[580px] sm:min-w-[900px] sm:max-w-[900px] flex flex-col sm:flex-row">
        {/* ------- img */}
        <div className="flex-1 relative border bg-gray-300 h-[500px] sm:h-full">
          <div className=" absolute top-3 left-[130px] sm:left-[166px] text-[22px] font-semibold text-gray-700">
            LeCadence.
          </div>
          <img src={proImg} alt="icon" className="w-full h-full" />
        </div>

        {/* -------- form section */}
        <div className="flex-1 bg-white flex justify-center items-center">
          <div className="h-fit w-[85%] sm:w-[76%] flex flex-col gap-4 my-12">
            <div>
              <h2 className=" text-h6 text-gray-700 pb-2">
                {switchAuth === "signup" ? "Sign up" : "Sign In"}
              </h2>
              <p className=" text-body2Reg !text-[14px] text-gray-400">
                {switchAuth === "signup" ? (
                  <>
                    Already have an account?{" "}
                    <span
                      onClick={() => setSwitchAuth("login")}
                      className=" text-body2Semi !text-[14px] text-green"
                    >
                      Sign In
                    </span>
                  </>
                ) : (
                  <>
                    {" "}
                    Don't have an account yet?{" "}
                    <span
                      onClick={() => setSwitchAuth("signup")}
                      className=" text-body2Semi !text-[14px] text-green"
                    >
                      Sign Up
                    </span>
                  </>
                )}
              </p>
            </div>

            <form className=" flex flex-col gap-3 text-body2Reg !text-[14px] text-gray-400">
              <div className=" flex  flex-col gap-3 ">
                {switchAuth === "signup" ? (
                  <>
                    <input
                      type="text"
                      placeholder="Your name"
                      className={inputStyle}
                    />
                    <input
                      type="text"
                      placeholder="Username"
                      className={inputStyle}
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      className={inputStyle}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className={inputStyle}
                    />
                  </>
                ) : (
                  <>
                    <input
                      type="email"
                      placeholder="Email address"
                      className={inputStyle}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className={inputStyle}
                    />
                  </>
                )}
              </div>

              {/* -------- checkbox */}
              {switchAuth === "signup" ? (
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p>
                    I agree with{" "}
                    <a className=" text-body2Semi !text-[14px] text-gray-700">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a className=" text-body2Semi !text-[14px] text-gray-700">
                      Terms of Use
                    </a>
                  </p>
                </div>
              ) : (
                <div className="flex justify-between">
                  <div className="flex gap-1">
                    <input type="checkbox" />
                    <div>Remember me</div>
                  </div>

                  <div className=" text-body2Semi !text-[14px] text-gray-700">
                    Forgot password?
                  </div>
                </div>
              )}

              <ButtonPrimary
                text={switchAuth === "signup" ? "Sign Up" : "Sign In"}
                style="!h-[38px] !text-[14px] !mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
