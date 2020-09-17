import React, { useMemo } from "react";
import { Helmet } from "react-helmet";

const CollectSurvey = () => {
  const header = useMemo(() => {
    return (
      <Helmet title={process.env.REACT_APP_NAME + " - Collect Responses"}>
        <meta charSet='utf-8' />
        <link rel='canonical' />
      </Helmet>
    );
  }, []);
  return (
    <>
      <h1>Its Work Collect Survey</h1>
      {header}
    </>
  );
};

export default CollectSurvey;
