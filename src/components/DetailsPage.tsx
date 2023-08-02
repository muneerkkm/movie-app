import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { PiSortDescendingThin } from "react-icons/pi";
import { AiFillMessage } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { useEffect, useState } from "react";
import { fetchdetails, fetchvedio } from "../api/movie";
import { Link, useParams } from "react-router-dom";
import { detailsObject } from "../model/type";
import ProgressCard from "./progress/ProgresCard";
import Footer from "./Footer";

const DetailsPage = () => {
  const [details, setdetails] = useState<detailsObject[]>([]);
  const [vedio, setvedio] = useState<any[]>([]);
  const { id } = useParams();

  useEffect(() => {
    const routdetail = async () => {
      const data = await fetchdetails(id);
      const result = await fetchvedio(id);
      setdetails([data]);
      setvedio(result.videos.results)
       
    };
    routdetail();
  }, [id]);
  console.log(vedio, "dd");

  details;
  const GetImageUrl = (poster_path: string) => {
    return `https://image.tmdb.org/t/p/original/${poster_path}`;
  };

  return (
    <div className="h-[calc(100vh-10vh)] w-full bg-black ">
      <nav className=" flex   flex-wrap justify-between py-3 bg-">

        <div className=" flex bg-black ">
          <button className="flex items-center pl-2 gap-2 text-white/50">
            <Link to="/"><AiOutlineLeft size={22} className="" /></Link>
            <AiOutlineRight size={22} />
          </button>
          <div className=" flex rounded-xl border-[1px] border-white/20  ml-9 h-[3rem] items-center justify-center">
            <AiOutlineSearch size={25} className="text-white/50 " />
            <input
              type="text"
              placeholder="search everything"
              className="rounded-md h-8  ml-2 bg-transparent"
            />
            <PiSortDescendingThin size={25} className="text-white/50 " />
          </div>
        </div>

        <div className="bg-black md:flex hidden">
          <span className="flex-1"></span>
          <div className="w-[12rem] h-[3rem] mt-3 flex justify-between items-center px-5">
            <AiFillMessage size={25} className="text-white/50" />
            <IoIosNotifications size={25} className="text-white/50" />
            <div className="w-[2rem] h-[2rem]  rounded-full border border-black">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="w-[2rem] h-[2rem] rounded-full"
              />
            </div>
          </div>
        </div>

      </nav>

      <div className="bg-red-300 w-full h-full relative">
        {details?.map((mv) => (
          <div className="relative bg-red-300 w-full rounded-xl">
            <div className="bg-gradient-to-r from-black/100 via-black/70 to-black/10 w-full h-full absolute z-0"></div>
            <img
              src={GetImageUrl(mv.poster_path)}
              alt=""
              className="w-full  rounded-xl h-[calc(100vh-10vh)] object-cover"
            />
            <p className="text-white absolute top-[5rem] text-4xl left-[2rem] font-bold">
              {mv.original_title}
            </p>
            <p className="text-white text-lg absolute top-[9rem] left-[2rem]">
              vote_average :
            </p>
            <div className="absolute w-12 h-12 top-[8.2rem] left-[10.5rem] text-white text-lg">
              <ProgressCard percentage={mv.vote_average * 10} />
            </div>
            <h4 className="text-white text-lg absolute top-[12rem] left-[2rem]">
              popularity : {mv.popularity}
            </h4>

            <button className="w-[5rem] h-12 bg-red-700 rounded-xl text-lg text-white font-semibold absolute top-[16rem] left-[2rem]">
              watch
            </button>
          </div>

        ))}

<div className="w-80 h-56 md:w-[500px] md:h-[300px] bg-yellow-500  z-50 rounded-xl  absolute bottom-10 left-10">
           {vedio.length > 0 && (
             <div className="rounded-xl bg-red-600 z-40 w-full h-full">
               <iframe
                 className="w-full h-full rounded-xl"
                 src={`https://www.youtube.com/embed/${vedio[1].key}`}
                 title="movie trailer"
                 allowFullScreen
               ></iframe>
             </div>
           )}
           </div>
       
      </div>
      <Footer/>


    </div>
  );
};

export default DetailsPage;
