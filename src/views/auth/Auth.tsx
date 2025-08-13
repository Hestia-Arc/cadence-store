import proImg from "../../assets/cadence-auth-img-desktop.png";
import { ButtonPrimary } from "../../components/Elements";
import { useEffect, useState } from "react";
// import { useAppSelector } from "../../store";
// import { userSelector } from "../user/userSlice";
import { useNavigate, useSearchParams } from "react-router-dom";
import supabase from "@/services/supabase";

const inputStyle =
  "h-[40px] border-b-[1px] border-gray-300 bg-[transparent] outline-none px-1";
function Auth() {
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useSearchParams();
  const [searchParams] = params;
  const page = searchParams.get("switchAuth") || "";
  // const userData = useAppSelector(userSelector);

  const [switchAuth, setSwitchAuth] = useState("signup");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // useEffect(() => {
  //   if (userData.username !== "") {
  //     navigate("/account");
  //   }

  // }, [userData]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (page === "signin") {
      setSwitchAuth("signin");
    } else if (page === "signup") {
      setSwitchAuth("signup");
    }
  }, [page]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (formData.username === "") {
    //   return;
    // }

    // if (switchAuth === "signup") {
    //   dispatch(setUser(formData));
    //   setSwitchAuth("signin");
    // }

    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      // username: formData.username,
      options: {
        data: {
          username: formData.username,
        },
        emailRedirectTo: "http://localhost:3000/account",
      },
    });

    console.log(data, error);

    if (data?.user?.aud === "authenticated") {
      setSwitchAuth("signin");
      // navigate("/account");
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });
    console.log(data, error);

    if (data) {
      navigate("/account");
    }
  };

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
                    <button
                      onClick={() => setSwitchAuth("login")}
                      className=" text-body2Semi !text-[14px] text-green"
                    >
                      Sign In
                    </button>
                  </>
                ) : (
                  <>
                    {" "}
                    Don't have an account yet?{" "}
                    <button
                      onClick={() => setSwitchAuth("signup")}
                      className=" text-body2Semi !text-[14px] text-green"
                    >
                      Sign Up
                    </button>
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
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="Username"
                      className={inputStyle}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email address"
                      className={inputStyle}
                      required
                    />
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Password"
                      className={inputStyle}
                      required
                    />
                  </>
                ) : (
                  <>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email address"
                      className={inputStyle}
                      required
                    />
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Password"
                      className={inputStyle}
                      required
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

              {switchAuth === "signup" ? (
                <ButtonPrimary
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    handleSubmit(
                      e as unknown as React.FormEvent<HTMLFormElement>
                    )
                  }
                  text="Sign Up"
                  style="!h-[38px] !text-[14px] !mt-4"
                />
              ) : (
                <ButtonPrimary
                  onClick={handleLogin}
                  text="Sign In"
                  style="!h-[38px] !text-[14px] !mt-4"
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
