import React from "react";
import SkeletonItem from "./SkeletonItem";

const OilResultSkeleton = () => {
  return (
    <div className="result-skeleton-item">
      {/* titre */}
      <SkeletonItem
        // style={{ height: "20px", width: "400px", marginBottom: "5px" }}
        className="result-skeleton-item__title"
      />

      <div style={{ display: "flex" }}>
        {/* image */}
        <SkeletonItem
          // style={{
          //   height: "70px",
          //   width: "80px",
          //   borderRadius: "50%",
          //   marginRight: "5px",
          // }}
          className="result-skeleton-item__img"
        />

        {/* description */}
        <SkeletonItem
          // style={{ width: "400px", height: "140px" }}
          className="result-skeleton-item__desc"
        />
      </div>
    </div>
  );
};

export default OilResultSkeleton;
