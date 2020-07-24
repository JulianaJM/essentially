import React from "react";
import SkeletonItem from "./SkeletonItem";

const OilResultSkeleton = () => {
  return (
    <div className="result-skeleton-item">
      <div style={{ display: "flex" }}>
        {/* image */}
        <SkeletonItem className="result-skeleton-item__img" />

        <div style={{ width: "100%" }}>
          {/* titre */}
          <SkeletonItem
            // style={{ height: "20px", width: "400px", marginBottom: "5px" }}
            className="result-skeleton-item__title"
          />
          {/* description */}
          <SkeletonItem className="result-skeleton-item__desc" />
        </div>
      </div>
    </div>
  );
};

export default OilResultSkeleton;
