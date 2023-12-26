import React from "react";
import { Link } from "react-router-dom";
import { BsFillMoonFill } from "react-icons/bs";
import { TiAdjustBrightness } from "react-icons/ti";
import { CiCircleInfo } from "react-icons/ci";
import { MdVerified } from "react-icons/md";
import Search from "./Search";
import img from "../components/assets/g-logo.jpg";
import Tabs from "./Tabs";
import { useResultContext } from "../contexts/ResultsContentProvider";
function Nav({ dartTheme, setDarkTheme }) {
  const { results, isLoading, getResults, searchTerm } = useResultContext();

  return (
    <div className="py-6 font-body dark:bg-gray-900 bg-blue-600 flex flex-wrap tall:pt-20  items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between   tall:justify-evenly items-center  w-screen">
        <Link
          className="flex items-center tall:absolute  tall:top-5 tall:left-0  justify-center "
          to="/"
        >
          <p className="text-2xl sm:text-red-400  w-44 h-16 rounded-r-[2000px]  flex justify-end pr-14 items-center  rounded-[50px]  bg-gradient-to-l from-blue-600 via-blue-700 to-blue-900 font-bold text-white dark:text-gray-100">
            Google
          </p>
          <span className="bg-white w-12  h-12 tall:absolute absolute left-36 rounded-full inline-block dark:bg-gray-800 ">
          <img
            className="rounded-full p-0.5	w-12 h-12 object-cover"
            src={img}
            alt="Image"
          />
          </span>
          
        </Link>
        <Search />
        <button
          type="button"
          onClick={() => setDarkTheme(!dartTheme)}
          className="
          tall:absolute
          tall:top-7
          tall:right-7
          text-[28px]
          dark:bg-white
          dark:text-blue-900
          h-14
          w-14
          flex justify-center
          items-center          
          shadow-full
          rounded-full
          bg-blue-900
          tall:mr-0
          mr-10
          px-[0.5px]
          py-[0.5px] hover:shadow-md hover:scale-105"
        >
          {dartTheme ? (
            <TiAdjustBrightness className="text-[35px] transition ease-in-out delay-1500 " title="Dark Mode" />
          ) : (
            <BsFillMoonFill className="text-[25px] transition ease-in-out delay-1500 text-white" title="Light Mode" />
          )}
        </button>
      </div>

      <div className="text-white mt-2 tall:mt-2 w-full flex justify-between ned:text-center flex-col-reverse items-start">
        <div className="pl-12 ned:px-6 tall:text-[14px] text-[14px] w-1/3 ned:w-full flex justify-start gap-x-4 items-center ned:mt-2">
          <div>
            <CiCircleInfo className="w-5 h-5 text-gray-200" />
          </div>
          <div className="text-gray-300">
            About {results.searchInformation?.formattedTotalResults} results
            (<i>{results.searchInformation?.formattedSearchTime} seconds</i>)
          </div>
        </div>
        <br />
        <div className="w-1/3 text-center flex justify-center items-center m-auto">
          <Tabs />
        </div>
        <div className="w-1/3 bg-white"></div>
      </div>
    </div>
  );
}

export default Nav;
