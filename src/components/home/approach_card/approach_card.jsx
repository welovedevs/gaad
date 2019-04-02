import React, { useState } from "react";

import injectSheet from "react-jss";

import TextField from "@material-ui/core/TextField";

import { Link } from "react-router-dom";
import GenericCard from "../../small_views/generic_card/generic_card";
import Button from "../../small_views/button/button";
import GeneratingDialog from "../../small_views/generating_dialog/generating_dialog";

import styles from "./approach_card_styles";

const ApproachCard = ({ classes }) => {
  const [firstName, setFirstName] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [openGeneratingDialog, setGeneratingDialogOpenState] = useState(false);
  return (
    <>
      <GeneratingDialog
        open={openGeneratingDialog}
        onClose={() => setGeneratingDialogOpenState(false)}
      />
      <GenericCard className={classes.container}>
        <TextField
          fullWidth
          className={classes.textField}
          label="Prénom"
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
        />
        <TextField
          fullWidth
          className={classes.textField}
          label="Technologies"
          value={technologies}
          onChange={event => setTechnologies(event.target.value)}
        />
        <Button
          className={classes.button}
          onClick={() => setGeneratingDialogOpenState(true)}
        >
          {"Générer mon approche"}
        </Button>
      </GenericCard>
    </>
  );
};

export default injectSheet(styles)(ApproachCard);
