import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import EventItems from "components/Events/EventItems";
import pillsStyle from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/pillsStyle.js";
import Spinner from 'components/Spinner/Spinner';

const useStyles = makeStyles(pillsStyle);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div>
        <div className={classes.title}>
            <h2 style={{ textAlign: "center" }}>Acra Lending Correspondent Events</h2>
        </div>
        <div className={classes.section}>
        <div className={classes.container}>
            
            <div id="navigation-pills">
                <EventItems />
            </div>
        </div>
        </div>
    </div>
  );
}
