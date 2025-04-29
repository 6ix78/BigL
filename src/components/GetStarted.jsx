import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Get</span>
        </p>
        <a href="https://daring-turtle-33.accounts.dev/sign-up?redirect_url=https%3A%2F%2Fclerk-authentication-starter-ivory.vercel.app%2F%3F__dev_session%3Ddvb_2wO9F3Q1OXw0GvpnDN9JScZ5asb%26__clerk_db_jwt%3Ddvb_2wO9F3Q1OXw0GvpnDN9JScZ5asb%23__clerk_db_jwt%5Bdvb_2wO9F3Q1OXw0GvpnDN9JScZ5asb%5D">
        <span>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
          </span></a>
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
