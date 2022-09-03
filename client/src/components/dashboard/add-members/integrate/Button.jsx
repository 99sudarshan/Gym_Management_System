import React from "react";
import LoadingRing from "../../../Common/LoadingRing";

const Button = ({ resetValue, slug, loading }) => {
  return (
    <div className="pt-4 lg:pt-10">
      <button
        className="button_style hover:bg-green-600 active:bg-green-600 mr-2"
        type="submit"
        disabled={loading}
      >
        {loading ? <LoadingRing /> : <>{slug ? "Update" : "Save"}</>}
      </button>
      <button
        className="button_style hover:bg-red-500 active:bg-red-500"
        type="reset"
        onClick={resetValue}
      >
        Reset
      </button>
    </div>
  );
};

export default Button;
