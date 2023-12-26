import React, { useEffect } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";

import { useResultContext } from "../contexts/ResultsContentProvider";

function Pagination() {
  const { count, setcount } = useResultContext();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/search?page=${count}`);
  }, [count, navigate]);

  return (
    <div className="flex justify-center p-10 ned:pr-0 ned:pl-0 pl-[100px] ">
      {count > 0 && (
        <Link to="/">
          <button
            onClick={() => setcount(count - 10)}
            className="flex justify-center items-center px-10 cursor-pointer hover:text-blue-600"
          >
            <AiOutlineDoubleRight className="rotate-180 text-[30px] text-blue-600 " />
            <p className="px-6 ">Previous</p>
          </button>
        </Link>
      )}
      {count < 90 && (
        <Link to="/">
          <button
            onClick={() => setcount(count + 10)}
            className="flex justify-center items-center px-10 cursor-pointer hover:text-blue-600"
          >
            <p className="px-6">Next</p>
            <AiOutlineDoubleRight className="text-[30px] text-blue-600" />
          </button>
        </Link>
      )}
    </div>
  );
}

export default Pagination;
