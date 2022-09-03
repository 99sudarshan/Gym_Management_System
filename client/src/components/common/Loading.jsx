import React from "react";
import LoadingGif from "../../assets/images/loading.gif";

const Loading = () => {
  return (
    <div className="grid place-content-center place-items-center">
      <img src={LoadingGif} alt="" className="w-3/5 mt-14" />
    </div>
  );
};

export default Loading;
