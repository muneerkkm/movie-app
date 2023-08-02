import { TiTick } from "react-icons/ti";
import { AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full  gap-8 p-5 bg-black ">
      <div className="flex flex-wrap  justify-between py-5 px-4">
        <div className=" h-[10rem] bg-black text-white flex flex-col items-center justify-center pt-5">
          <h3 className="font-semibold text-md">company</h3>
          <ul className="pt-5">
            <li>About us</li>
            <li>career</li>
          </ul>
        </div>
        <div className=" h-[10rem] bg-black text-white flex flex-col items-center justify-center pt-5">
          <h3 className="font-semibold text-md">view website in</h3>
          <ul className="pt-5 flex ">
            <TiTick size={20} className="" />
            <li className="inline"> English</li>
          </ul>
        </div>
        <div className=" h-[10rem] bg-black text-white flex flex-col items-center justify-center pt-5">
          <h3 className="font-semibold text-md">Need help</h3>
          <ul className="pt-5">
            <li>visit Help center</li>
            <li>share feedback</li>
          </ul>
        </div>
        <div className=" h-[10rem] bg-black text-white flex flex-col items-center justify-center pt-5">
          <h3 className="font-semibold text-md">connect with us</h3>
          <div className="flex gap-2 pt-5">
            <AiFillFacebook size={20} />
            <AiFillTwitterCircle size={20} />
          </div>
        </div>
      </div>
       <div className=" ml-[1rem] text-md font-thin">
      <p className="text-white">© 2023 STAR. All Rights Reserved.</p>
      <p className="text-white">Terms Of Use  <span className="px-6">Privacy Policy </span>FAQ</p>
      </div>
    </div>
  );
};

export default Footer;
