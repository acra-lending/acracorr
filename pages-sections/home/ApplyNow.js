/*eslint-disable*/
import React from "react";
// react plugin for creating date-time-picker
import Datetime from "react-datetime";
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

export default function SectionSignUp() {
  const [checked, setChecked] = React.useState([]);
  const [signupModal1, setSignupModal1] = React.useState(false);
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
    <div style={{ paddingTop: "32px" }} id="javascriptComponents">
      <div className={classes.container}>
        <GridContainer>
            <GridItem >
            {/* BUTTON SIGNUP MODAL */}
            <Button
                color="blue"
                size="lg" 
                block
                onClick={() => setSignupModal1(true)}>
                Apply Now
            </Button>
            {/* SIGNUP MODAL START */}
            <Dialog
                classes={{
                root: classes.modalRoot,
                paper: classes.modal + " " + classes.modalSignup
                }}
                open={signupModal1}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setSignupModal1(false)}
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
                    onClick={() => setSignupModal1(false)}
                    >
                    {" "}
                    <Close className={classes.modalClose} />
                    </Button>
                    <h3
                    className={classes.cardTitle + " " + classes.modalTitle}
                    >
                    Partner With Us
                    </h3>
                </DialogTitle>
                <DialogContent
                    id="signup-modal-slide-description"
                    className={classes.modalBody}
                >
                    <GridContainer>
                    <GridItem
                        xs={12}
                        sm={5}
                        md={5}
                        className={classes.mlAuto}
                    >
                        <InfoArea
                        className={classes.infoArea}
                        title="Industry Leading Non-QM Programs"
                        description={
                            <p>
                                Extensive range of products to meet lending portfolios.
                            </p>
                        }
                        icon={Apps}
                        iconColor="blue"
                        />
                        <InfoArea
                        className={classes.infoArea}
                        title="A Dedicated Correspondent Executive"
                        description={
                            <p>
                                Highly trained executives with a deep understanding of the Non-QM industry.
                            </p>
                        }
                        icon={Group}
                        iconColor="blue"
                        />
                        <InfoArea
                        className={classes.infoArea}
                        title="Marketing Collateral"
                        description={
                            <p>
                                Professionally designed marketing collateral ready to incorporate your brand identity.
                            </p>
                        }
                        icon={PhotoSizeSelectActualIcon}
                        iconColor="blue"
                        />
                    </GridItem>
                    <GridItem
                        xs={12}
                        sm={5}
                        md={5}
                        className={classes.mrAuto}
                    >
                        {/* <div className={classes.textCenter}>
                        <Button justIcon round color="twitter">
                            <i className="fab fa-twitter" />
                        </Button>
                        {` `}
                        <Button justIcon round color="dribbble">
                            <i className="fab fa-dribbble" />
                        </Button>
                        {` `}
                        <Button justIcon round color="facebook">
                            <i className="fab fa-facebook-f" />
                        </Button>
                        {` `}
                        <h4 className={classes.socialTitle}>
                            or be classical
                        </h4>
                        </div> */}
                        <SignUpContact />
                        {/* <form className={classes.form}>
                        <CustomInput
                            formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses
                            }}
                            inputProps={{
                            startAdornment: (
                                <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                                >
                                </InputAdornment>
                            ),
                            placeholder: "Name..."
                            }}
                        />
                        <CustomInput
                            formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses
                            }}
                            inputProps={{
                            startAdornment: (
                                <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                                >
                                </InputAdornment>
                            ),
                            placeholder: "Email..."
                            }}
                        />
                        <CustomInput
                            formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses
                            }}
                            inputProps={{
                            startAdornment: (
                                <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                                >
                                </InputAdornment>
                            ),
                            placeholder: "Phone..."
                            }}
                        />
                        <div className={classes.textCenter}>
                            <Button color="blue">
                            Get started
                            </Button>
                        </div>
                        </form> */}
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
