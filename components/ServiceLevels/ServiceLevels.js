import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/sectionCards.js";

import ServiceLevelItems from "components/ServiceLevels/ServiceLevelItems.js";

const useStyles = makeStyles(styles);

export default function SectionCards() {

  return (
    <div>
        <ServiceLevelItems />
    </div>
  );
}
