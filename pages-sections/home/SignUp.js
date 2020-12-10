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
import DialogActions from "@material-ui/core/DialogActions";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";
import Checkbox from "@material-ui/core/Checkbox";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";
import Notifications from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Assignment from "@material-ui/icons/Assignment";
import Mail from "@material-ui/icons/Mail";
import Face from "@material-ui/icons/Face";
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
import Apps from "@material-ui/icons/Apps";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import AttachFile from "@material-ui/icons/AttachFile";
import Layers from "@material-ui/icons/Layers";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Instruction from "components/Instruction/Instruction.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomFileInput from "components/CustomFileInput/CustomFileInput.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Accordion from "components/Accordion/Accordion.js";
import ImageUpload from "components/CustomUpload/ImageUpload.js";

import javascriptStyles from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/javascriptStyles.js";

import SignUpContact from "pages-sections/about-us/SignUpContact.js";

import dg1 from "assets/img/dg1.jpg";
import dg2 from "assets/img/dg2.jpg";

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
    <div className={classes.section} id="javascriptComponents">
      <div>
        <GridContainer>
            <GridItem xs={12} sm={6} md={4} lg={3}>
            {/* BUTTON SIGNUP MODAL */}
            <Button
                color="blue"
                size="lg" 
                block
                onClick={() => setSignupModal1(true)}>
                Get Approved
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
            <GridItem xs={12} sm={6} md={4} lg={3}>
            {/* BUTTON SIGNUP MODAL */}
            <Button 
                color="blue"
                size="lg"
                block 
                onClick={() => setSignupModal1(true)}>
                Sellers Guide
            </Button>
            {/* SIGNUP MODAL START */}
            {/* <Dialog
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
                    Register
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
                        title="Marketing"
                        description={
                            <p>
                            We{"'"}ve created the marketing campaign of the
                            website. It was a very interesting
                            collaboration.
                            </p>
                        }
                        icon={Timeline}
                        iconColor="rose"
                        />
                        <InfoArea
                        className={classes.infoArea}
                        title="Fully Coded in HTML5"
                        description={
                            <p>
                            We{"'"}ve developed the website with HTML5 and
                            CSS3. The client has access to the code using
                            GitHub.
                            </p>
                        }
                        icon={Code}
                        iconColor="primary"
                        />
                        <InfoArea
                        className={classes.infoArea}
                        title="Built Audience"
                        description={
                            <p>
                            There is also a Fully Customizable CMS Admin
                            Dashboard for this product.
                            </p>
                        }
                        icon={Group}
                        iconColor="info"
                        />
                    </GridItem>
                    <GridItem
                        xs={12}
                        sm={5}
                        md={5}
                        className={classes.mrAuto}
                    >
                        <div className={classes.textCenter}>
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
                        </div>
                        <form className={classes.form}>
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
                                <Face
                                    className={classes.inputAdornmentIcon}
                                />
                                </InputAdornment>
                            ),
                            placeholder: "First Name..."
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
                                <Email
                                    className={classes.inputAdornmentIcon}
                                />
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
                                <Icon
                                    className={classes.inputAdornmentIcon}
                                >
                                    lock_outline
                                </Icon>
                                </InputAdornment>
                            ),
                            placeholder: "Password..."
                            }}
                        />
                        <FormControlLabel
                            classes={{
                            label: classes.label
                            }}
                            control={
                            <Checkbox
                                tabIndex={-1}
                                onClick={() => handleToggle(1)}
                                checkedIcon={
                                <Check className={classes.checkedIcon} />
                                }
                                icon={
                                <Check className={classes.uncheckedIcon} />
                                }
                                classes={{
                                checked: classes.checked,
                                root: classes.checkRoot
                                }}
                            />
                            }
                            label={
                            <span>
                                I agree to the{" "}
                                <a href="#pablo">terms and conditions</a>.
                            </span>
                            }
                        />
                        <div className={classes.textCenter}>
                            <Button round color="primary">
                            Get started
                            </Button>
                        </div>
                        </form>
                    </GridItem>
                    </GridContainer>
                </DialogContent>
                </Card>
            </Dialog> */}
            {/* SIGNUP MODAL END */}
            </GridItem>
            <GridItem xs={12} sm={10} md={4} lg={3}>
            {/* BUTTON SIGNUP MODAL */}
            <Button 
                color="blue"
                size="lg"
                block  
                onClick={Nothing}>
                Loan Engine
            </Button>
            {/* SIGNUP MODAL START */}
            {/* <Dialog
                classes={{
                root: classes.modalRoot,
                paper: classes.modal + " " + classes.modalSignup
                }}
                open={signupModal3}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setSignupModal3(false)}
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
                    onClick={() => setSignupModal3(false)}
                    >
                    {" "}
                    <Close className={classes.modalClose} />
                    </Button>
                    <h3
                    className={classes.cardTitle + " " + classes.modalTitle}
                    >
                    Register
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
                        title="Marketing"
                        description={
                            <p>
                            We{"'"}ve created the marketing campaign of the
                            website. It was a very interesting
                            collaboration.
                            </p>
                        }
                        icon={Apps}
                        iconColor="blue"
                        />
                        <InfoArea
                        className={classes.infoArea}
                        title="Fully Coded in HTML5"
                        description={
                            <p>
                            We{"'"}ve developed the website with HTML5 and
                            CSS3. The client has access to the code using
                            GitHub.
                            </p>
                        }
                        icon={Code}
                        iconColor="primary"
                        />
                        <InfoArea
                        className={classes.infoArea}
                        title="Built Audience"
                        description={
                            <p>
                            There is also a Fully Customizable CMS Admin
                            Dashboard for this product.
                            </p>
                        }
                        icon={Group}
                        iconColor="info"
                        />
                    </GridItem>
                    <GridItem
                        xs={12}
                        sm={5}
                        md={5}
                        className={classes.mrAuto}
                    >
                        <div className={classes.textCenter}>
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
                        </div>
                        <form className={classes.form}>
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
                                <Face
                                    className={classes.inputAdornmentIcon}
                                />
                                </InputAdornment>
                            ),
                            placeholder: "First Name..."
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
                                <Email
                                    className={classes.inputAdornmentIcon}
                                />
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
                                <Icon
                                    className={classes.inputAdornmentIcon}
                                >
                                    lock_outline
                                </Icon>
                                </InputAdornment>
                            ),
                            placeholder: "Password..."
                            }}
                        />
                        <FormControlLabel
                            classes={{
                            label: classes.label
                            }}
                            control={
                            <Checkbox
                                tabIndex={-1}
                                onClick={() => handleToggle(1)}
                                checkedIcon={
                                <Check className={classes.checkedIcon} />
                                }
                                icon={
                                <Check className={classes.uncheckedIcon} />
                                }
                                classes={{
                                checked: classes.checked,
                                root: classes.checkRoot
                                }}
                            />
                            }
                            label={
                            <span>
                                I agree to the{" "}
                                <a href="#pablo">terms and conditions</a>.
                            </span>
                            }
                        />
                        <div className={classes.textCenter}>
                            <Button round color="primary">
                            Get started
                            </Button>
                        </div>
                        </form>
                    </GridItem>
                    </GridContainer>
                </DialogContent>
                </Card>
            </Dialog> */}
            {/* SIGNUP MODAL END */}
            </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
