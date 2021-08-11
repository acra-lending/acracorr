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

export default function Popup() {
  const [checked, setChecked] = React.useState([]);
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
    <div className={classes.section + " " + classes.headingButtons} id="javascriptComponents">
      <div>
        <GridContainer>
            <GridItem xs={12} sm={10} md={4} lg={3}>
            {/* BUTTON SIGNUP MODAL */}
                <Button 
                    color="blue"
                    size="lg"
                    block
                    onWheel={() => setSignupModal2(true)}>  
                    Modal
                </Button>
            {/* SIGNUP MODAL START */}
            <Dialog
                classes={{
                root: classes.modalRoot,
                paper: classes.modal + " " + classes.modalSignup
                }}
                open={signupModal2}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setSignupModal2(false)}
                aria-labelledby="signup-modal-slide-title"
                aria-describedby="signup-modal-slide-description"
            >
                <Card plain className={classes.modalSignupCard}>
                <DialogTitle
                    id="signup-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                >
                    <Button
                    simple
                    className={classes.modalCloseButton}
                    key="close"
                    aria-label="Close"
                    onClick={() => setSignupModal2(false)}
                    >
                    {" "}
                    <Close className={classes.modalClose} />
                    </Button>
                    <h3
                    className={classes.cardTitle + " " + classes.modalTitle}
                    >
                    
                    </h3>
                </DialogTitle>
                <DialogContent
                    id="signup-modal-slide-description"
                    className={classes.modalBody}
                >
                    <GridContainer>
                    <GridItem
                        xs={12}
                        sm={12}
                        md={12}
                        className={classes.mlAuto}
                    >
                        We’ve updated our <a href="https://acralending.com/privacy-policy/" target="_blank">Privacy Policy</a> to allow our products and services to be more available to you. Please read this information carefully to learn more about your legal rights. By continuing to use our products and services, you agree to these updates.

                    </GridItem>
                    </GridContainer>
                </DialogContent>
                </Card>
            </Dialog>
            {/* SIGNUP MODAL END */}

            </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
