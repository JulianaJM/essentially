/* eslint-disable react/no-array-index-key */
import React from "react";
import OilResultSkeleton from "./OilResultSkeleton";

import "./skeleton.scss";

const OilListSkeleton = () => {
  return (
    <div className="skeleton-list">
      {[...Array(6)].map((item, key) => (
        <OilResultSkeleton key={key} />
      ))}
    </div>
  );
};

export default OilListSkeleton;
