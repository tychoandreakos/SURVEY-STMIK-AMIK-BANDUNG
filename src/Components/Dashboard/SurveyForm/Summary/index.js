import React, { useMemo } from "react";
import { Helmet } from "react-helmet";

const Summary = () => {
  const header = useMemo(() => {
    return (
      <Helmet title={process.env.REACT_APP_NAME + " - Summary & Roundup"}>
        <meta charSet='utf-8' />
        <link rel='canonical' />
      </Helmet>
    );
  }, []);
  return (
    <>
      <h1>Its Work Summary</h1>
      {header}
    </>
  );
};

export default Summary;
