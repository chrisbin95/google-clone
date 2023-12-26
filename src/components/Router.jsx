import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Results from "./Results";
import { useResultContext } from "../contexts/ResultsContentProvider";

function Router() {
  const { results, isLoading, getResults, searchTerm } = useResultContext();

  return (
    <div className="p-4">
      <Routes>
        {/* Redirect from the exact "/" path to "/search" */}
        <Route exact path="/" element={<Navigate to="/search" />} />
        {/* Render Results component for "/search", "/images", "/news", "/videos" */}
        <Route path="/search" element={<Results />} />
        <Route path="/images" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/videos" element={<Results />} />
      </Routes>
    </div>
  );
}

export default Router;
