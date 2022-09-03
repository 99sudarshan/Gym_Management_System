import React from "react";
import Pagination from "antd/lib/pagination/Pagination";

const Paginate = ({
  page,
  currentPost,
  total,
  setPageSize,
  postPerPage,
  setPage,
}) => {
  const itemRender = (current, type, originalElement) => {
    if (type === "prev") {
      return <a>Previous</a>;
    } else if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };

  return (
    <>
      <p className="text-sm text-gray-800">
        showing {page} to {currentPost.length} of {total} entries
      </p>
      <Pagination
        responsive={true}
        total={total}
        onChange={(value) => {
          setPage(value);
          setPageSize(value);
        }}
        itemRender={itemRender}
        pageSize={postPerPage}
        current={page}
      />
    </>
  );
};

export default Paginate;
