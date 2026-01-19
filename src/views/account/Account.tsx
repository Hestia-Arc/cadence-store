import { useState } from "react";
import { ButtonPrimary } from "../../components/Elements";
import { setUser, userSelector } from "../user/userSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { inputStyle, labelStyle } from "../cart/CartCheckout";

function AccountContent() {
  const userData = useAppSelector(userSelector);
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    username: userData?.username,
    email: userData?.email,
    firstName: userData?.checkOutDetail.firstName,
    lastName: userData?.checkOutDetail.lastName,
    
  });

  const handleSubmit = () => {
    dispatch(setUser(formData));
  };
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // }
  
  return (
    <form className="h-full w-full flex flex-col gap-10 ">
      {/* top */}
      <div className="h-[416px] w-full flex flex-col gap-6">
        <h3 className="text-[20px] font-semibold ">Account Details</h3>

        {/* 1 */}
        <div className="h-[64px] flex flex-col">
          <label className={labelStyle} htmlFor="">
            first name *
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            placeholder="First name"
            className={`${inputStyle} w-full`}
          />
        </div>

        {/* 2 */}
        <div className="h-[64px] flex flex-col">
          <label className={labelStyle} htmlFor="">
            last name *
          </label>
          <input
            type="text"
            placeholder="Last name"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            className={`${inputStyle} w-full`}
          />
        </div>

        {/* 3 */}
        <div className="min-sh-[64px] flex flex-col">
          <label className={labelStyle} htmlFor="">
            display name *
          </label>
          <input
            type="text"
            placeholder="Display name"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            className={`${inputStyle} w-full`}
          />

          <p className="text-[12px] mt-3">
            This will be how your name will be displayed in the account section
            and in reviews
          </p>
        </div>

        {/* 4 */}
        <div className="h-[64px] flex flex-col">
          <label className={labelStyle} htmlFor="">
            email *
          </label>
          <input
            type="text"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={`${inputStyle} w-full`}
          />
        </div>
      </div>

      {/* bottom */}
      <div className="h-[372px] w-full flex flex-col gap-6 ">
        <h3 className="text-[20px] font-semibold ">Password</h3>

        {/* 1 */}
        <div className="h-[64px] flex flex-col">
          <label className={labelStyle} htmlFor="">
            old password
          </label>
          <input
            type="password"
            placeholder=" Old password"
            className={`${inputStyle} w-full`}
          />
        </div>

        {/* 2 */}
        <div className="h-[64px] flex flex-col">
          <label className={labelStyle} htmlFor="">
           new password
          </label>
          <input
            type="password"
            placeholder="New password"
            className={`${inputStyle} w-full`}
          />
        </div>

        {/* 3 */}
        <div className="h-[64px] flex flex-col">
          <label className={labelStyle} htmlFor="">
            repeat new password
          </label>
          <input
            type="password"
            placeholder="Repeat new password"
            className={`${inputStyle} w-full`}
          />
        </div>

        <ButtonPrimary text="Save changes" style="w-[183px]!" onClick={handleSubmit} />
      </div>
    </form>
  );
}

export default AccountContent;
