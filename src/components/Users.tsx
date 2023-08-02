import { useEffect, useState } from "react";
import { AiFillCompass } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { fetchuser } from "../api/movie";
import { userObject } from "../model/type";
import {BsDot} from "react-icons/bs"

const users = () => {
  const [user, setuser] = useState<userObject[]>([]);

  useEffect(() => {
    const userNow = async () => {
      const dummy = await fetchuser();
      setuser(dummy.users);
    };
    userNow();
  }, []);
  console.log("api", user);

  return (
    <>
      <div className="h-[60dvh] w-7/12 md:w-2/12 bg-yellow-500 flex-row hidden md:block ">
        <div className="h-[40dvh] w-full bg-black">
          <h3 className="text-xl font-serif font-semibold px-6 py-6 text-white">
            MOVIE<span className="text-red-700"> APP</span>
          </h3>
          <div className="pt-5">
            <ul className="text-white/60  px-5  align-middle pt-5 flex flex-col gap-5">
              <li>
                <h2>News Feed</h2>
              </li>
              <li className="flex gap-6 text-lg py-3">
                <AiFillCompass className="text-red-800 text-2xl" />
                <span>Browse</span>
              </li>
              <li className="flex gap-5 text-lg py-2 ">
                <AiOutlineHeart className=" text-2xl" />
                <span>Watchlist</span>
              </li>
              <li className="flex gap-5 text-lg py-2">
                <FaRegCalendarAlt className=" text-2xl" />
                <span>coming soon</span>
              </li>
            </ul>
            <ul className="bg-white w-"></ul>
          </div>
        </div>
        <div className="relative">
          <div className="h-0.5 bg-white/40 absolute bottom-0 left-5 right-0 w-[15rem]"></div>
        </div>
        <div className="w-full h-full bg-black">
          <h3 className="text-sm font-semibold text-white/50 p-5 pl-3">
            following
          </h3>
          <div className="flex flex-col h-[33rem] overflow-y-auto bg-black">
            {user?.map((uu) => (
              <div className="flex flex-row m-1 items-center ml-5" key={uu.id}>
                <img
                  src={uu.image}
                  alt=""
                  className="w-8 h-8 object-cover rounded-full bg-white"
                />
                <p className="text-white p-3 ml-5">{uu.firstName}</p>
                 <BsDot size={25} className="text-green-600 pl-1"/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default users;
