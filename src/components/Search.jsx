import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useResultContext } from "../contexts/ResultsContentProvider";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";  // Import useNavigate

function Search() {
  const [text, setText] = useState("");
  const { setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);
  const navigate = useNavigate();  // Use useNavigate instead of useHistory

  useEffect(() => {
    if (debouncedValue) {
      setSearchTerm(debouncedValue);
      navigate(`/search?search=${debouncedValue}`);
    }
  }, [debouncedValue, setSearchTerm, navigate]);

  return (
    <div className="flex justify-center tall:mt-6 relative items-center w-5/12 tall:w-10/12">
      <input
        className="w-full tall:w-full dark:placeholder-gray-200 dark:bg-gray-800 tall:mr10 tall:mr-0 mr-12 outline-0	p-4 pl-6 flex justify-center 	drop-shadow-2xl rounded-full h-15"
        type="text"
        value={text}
        placeholder="Google"
        onChange={(e) => setText(e.target.value)}
        // onClick={onClick}
      />

      <GoSearch className="absolute cursor-pointer hover:text-gray-600 dark:text-gray-200 text-blue-600 dark:hover:text-blue-600 tall:right-12 right-20 h-24 w-6 " title="Search" />
    </div>
  );
}

export default Search;
