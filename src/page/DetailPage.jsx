import React, { lazy, Suspense } from "react";

import Loader from "../components/common/loader/Loader";

const OilDetails = lazy(() => import("../components/oil-details/OilDetails"));

const DetailPage = props => (
  <Suspense fallback={<Loader />}>
    <OilDetails {...props} />
  </Suspense>
);

export default DetailPage;
