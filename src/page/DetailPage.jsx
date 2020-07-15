import React, { lazy, Suspense } from "react";

import Loader from "../components/common/loader/Loader";

import "./detail-page.scss";

const OilDetails = lazy(() => import("../components/oil-details/OilDetails"));

const DetailPage = props => (
  <Suspense fallback={<Loader />}>
    <OilDetails {...props} />
    {/* <button className="recette-btn" type="button">
      Recette
    </button> */}
  </Suspense>
);

export default DetailPage;
