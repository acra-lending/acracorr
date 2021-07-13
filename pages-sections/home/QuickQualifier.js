/*eslint-disable*/
import React from "react";
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import Group from "@material-ui/icons/Group";
import Apps from "@material-ui/icons/Apps";
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import SpeedIcon from '@material-ui/icons/Speed';
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";

import InfoArea from "components/InfoArea/InfoArea.js";


import javascriptStyles from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/javascriptStyles.js";

import SignUpContact from "pages-sections/about-us/SignUpContact.js";

const useStyles = makeStyles(javascriptStyles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function QuickQualifier() {
  const [checked, setChecked] = React.useState([]);
  const [signupModal1, setSignupModal1] = React.useState(false);
  const [signupModal2, setSignupModal2] = React.useState(false);
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const Nothing = e => {
      e.preventDefault();
  }
  const classes = useStyles();
  return (
    <div className={classes.section + " " + classes.headingButtons} id="javascriptComponents" style={{ paddingTop: 0 }}>
      <div>
        <GridContainer>
            <GridItem xs={12} sm={6} md={5} lg={5}>
            <Link href="/quickqualifier">
                <Button 
                    color="blue"
                    size="lg"
                    block 
                    >
                    Loan Scenario Eligibility (no pricing)
                </Button>
            </Link>
            </GridItem>
            <GridItem xs={12} sm={6} md={5} lg={5}>
                <Button
                        href="https://acracorrespondent.loannex.com/"
                        color="blue"
                        size="lg"
                        target="_blank"
                        block
                    >
                        Acra Pricing Engine & Detailed Eligiblity
                </Button>
            </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
