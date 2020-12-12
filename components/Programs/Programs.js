import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import ProgramItems from "components/Programs/ProgramItems.js";
import NavPills from "components/NavPills/NavPills.js";
import pillsStyle from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/pillsStyle.js";
import Spinner from 'components/Spinner/Spinner';

import ServiceLevels from "components/ServiceLevels/ServiceLevels";

const useStyles = makeStyles(pillsStyle);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div>
        <div className={classes.title}>
            <h2 style={{ textAlign: "center" }}>Acra Lending Correspondent Programs</h2>
        </div>
        <div className={classes.section}>
        <div className={classes.container}>
            
            <div id="navigation-pills">

            
            {/* <div className={classes.title}>
                <h3>
                <small>Overview</small>
                </h3>
            </div> */}
                <ProgramItems />
            </div>
        </div>
        </div>
    </div>
  );
}
