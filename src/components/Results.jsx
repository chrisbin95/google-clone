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
          <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong class="font-bold">&#9888; Error 503: </strong>
  <span class="block inline sm:inline">Something went wrong.</span>
  <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span>
</div>
          <Footer />
        </div>
      );

    default:
      return "ERROR";
  }
}

export default Results;
