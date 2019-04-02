import React from "react";
import { withRouter } from "react-router-dom";

import injectSheet from "react-jss";

import Banner from "../home/banner/banner";
import GenericCard from "../small_views/generic_card/generic_card";

import styles from "./results_styles";

const getParamsFromHash = hash => {
  try {
    return JSON.parse(btoa(hash || "e30="));
  } catch (e) {
    return {};
  }
};
const ResultsComponent = ({ classes, match }) => {
  const { scenario, name } = getParamsFromHash(match);
  return (
    <div className={classes.container}>
      <Banner />
      <div className={classes.resultCardContainer}>
        <GenericCard className={classes.resultCard} />
      </div>
    </div>
  );
};

export const Results = withRouter(injectSheet(styles)(ResultsComponent));
