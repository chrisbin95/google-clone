import React from "react";
import { TailSpin } from "react-loader-spinner";

function Loading() {
  return (
    <div className="flex justify-center items-center mt-10">
      <TailSpin type="TailSpin" radius="1" ariaLabel="tail-spin-loading" color="#2562E8" height={50} width={50} />
    </div>
  );
}

export default Loading;

