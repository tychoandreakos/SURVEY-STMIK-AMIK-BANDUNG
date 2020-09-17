import React, { useEffect } from "react";

import { HOME_DASHBOARD } from "../../util/route";

const Landing = (props) => {
  useEffect(() => {
    props.history.push(HOME_DASHBOARD);
  }, []);
  return <h1></h1>;
};

export default Landing;
