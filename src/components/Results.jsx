import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Pagination from "../components/Pagination.js";
import { useResultContext } from "../contexts/ResultsContentProvider";
import { BsLink, BsOption, BsSearch } from "react-icons/bs";
import Loading from "./Loading";

function Results() {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();
  useEffect(() => {
    if (searchTerm) {
      // Use a more standardized way to construct search queries
      const searchQuery = location.pathname === "/videos" ? `q=${searchTerm} videos` : `${location.pathname}?q=${searchTerm}&num=10`;
      getResults(searchQuery);
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
    case `/term?${searchTerm}`:  // Assuming this is the correct path
      return (
        <div className="flex-wrap justify-start ned:pr-0 ned:pl-0 pr-[100px] pl-[100px] space-y-6 mt-12 sm:px-10 lg:px-64">
          {results?.items?.map(({ link, title, snippet, pagemap }, index) => (
            <div
              key={index}
              className="tall:p-6 p-12 items-center flex justify-start my-0 mx-auto flex-wrap dark:bg-gray-800  bg-white rounded-lg shadow "
            >
              <a href={link} target="_blank" rel="noreferrer">
                <p className="tall:text-[18px] text-[25px]  inline-block items-center font-body hover:underline dark:text-blue-500 text-blue-700">
                  <BsLink className=" inline-block dark:text-blue-500  x items-start justify-start w-4 h-4 mr-4" />
                  {title}
                </p>
                <p className="tall:text-[14px] text-[16px] flex justify-start font-body mt-4 dark:text-gray-300  text-gray-800">
                  {snippet}
                </p>
              </a>
            </div>
          ))}
          <Pagination />
          <Footer />
        </div>
      );
    case "/images":
    case "/news":
    case "/videos":
      return (
        <div className="">
          <div className="flex justify-center dark:bg-gray-800 bg-gray-200 max-w-[400px] mt-[80px] shadow-lg rounded-lg font-body my-0 mx-auto h-[100px] items-center tall:text-[14px] text-[16px]">
          &#9888; Invalid Request
          </div>
          <Footer />
        </div>
      );

    default:
      return "ERROR";
  }
}

export default Results;
