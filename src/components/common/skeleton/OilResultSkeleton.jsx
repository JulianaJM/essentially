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

      <div style={{ display: "flex", marginTop: "13px" }}>
        {/* image */}
        <SkeletonItem className="result-skeleton-item__img" />

        {/* description */}
        <SkeletonItem className="result-skeleton-item__desc" />
      </div>
    </div>
  );
};

export default OilResultSkeleton;
