import React from "react";

const Button = ({ styles }) => (
 <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
   <span>
     <a href="https://daring-turtle-33.accounts.dev/sign-up?redirect_url=https%3A%2F%2Fclerk-authentication-starter-ivory.vercel.app%2F%3F__dev_session%3Ddvb_2wO9F3Q1OXw0GvpnDN9JScZ5asb%26__clerk_db_jwt%3Ddvb_2wO9F3Q1OXw0GvpnDN9JScZ5asb%23__clerk_db_jwt%5Bdvb_2wO9F3Q1OXw0GvpnDN9JScZ5asb%5D">
       Get Started
 </span></a> </button>
);

export default Button;
