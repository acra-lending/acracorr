import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import Muted from "components/Typography/Muted.js";
// @material-ui/core components
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";

// @material-ui/icons
import Close from "@material-ui/icons/Close";

import teamStyle from "assets/jss/nextjs-material-kit-pro/pages/aboutUsSections/teamStyle.js";
import javascriptStyles from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/javascriptStyles.js";

import FaceMarc from "assets/img/faces/marc.jpg";
import FaceChristian from "assets/img/faces/christian.jpg";
import FaceKendall from "assets/img/faces/kendall.jpg";
import FaceAvatar from "assets/img/faces/avatar.jpg";
import bg7 from "assets/img/bg7.jpg";
import city from "assets/img/examples/city.jpg";
import marc from "assets/img/faces/marc.jpg";
import christian from "assets/img/faces/christian.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import cardProfile1 from "assets/img/team/KeithLind.jpg";
import cardProfile2 from "assets/img/team/KyleGunderlock.jpg";
import cardProfile3 from "assets/img/team/JeffreyLemieux.jpeg";
import cardProfile4 from "assets/img/team/MarcFeltman.jpg";
import cardProfile5 from "assets/img/team/AndyGauder.jpg";
import cardProfile6 from "assets/img/team/ToddLautzenheiser.jpg";
import cardProfile7 from "assets/img/team/avatar1.png";
import cardProfile1Square from "assets/img/faces/card-profile1-square.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";
import cardProfile4Square from "assets/img/faces/card-profile4-square.jpg";
import cardProfile6Square from "assets/img/faces/card-profile6-square.jpg";

const useStyles = makeStyles(teamStyle, javascriptStyles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});


export default function SectionTeam() {
  const [classicModal1, setClassicModal1] = React.useState(false);
  const [classicModal2, setClassicModal2] = React.useState(false);
  const [classicModal3, setClassicModal3] = React.useState(false);
  const [classicModal4, setClassicModal4] = React.useState(false);
  const [classicModal5, setClassicModal5] = React.useState(false);
  const [classicModal6, setClassicModal6] = React.useState(false);
  const [classicModal7, setClassicModal7] = React.useState(false);


  const classes = useStyles();
  return (
      <div className={classes.team}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              {/* <h2 className={classes.title}>The Executive Team 2</h2>
              <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your team. Keep you user engaged by providing meaningful
                information.
              </h5> */}
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain profile>
                <CardHeader image plain>
                  <a href="#keith" onClick={() => setClassicModal1(true)}>
                    <img src={cardProfile1} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${cardProfile1})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Keith Lind</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Executive Chairman & President</h6>
                  </Muted>
                </CardBody>
                <CardFooter profile plain className={classes.justifyContent}>
                  {/* <Button justIcon round color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button justIcon round color="facebook">
                    <i className="fab fa-facebook-square" />
                  </Button>
                  <Button justIcon round color="dribbble">
                    <i className="fab fa-dribbble" />
                  </Button> */}
                  <Button color="blue" justIcon>
                    <MailOutlineIcon />
                  </Button>
                </CardFooter>
              </Card>
              <Dialog
                  classes={{
                    root: classes.modalRoot,
                    paper: classes.modal
                  }}
                  open={classicModal1}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setClassicModal1(false)}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
                  <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                  >
                    <GridItem 
                      GridItem 
                      xs={12} 
                      sm={5} 
                      md={5} 
                      className={
                        classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
                      }
                    >
                      <CardHeader image plain>
                        <img src={cardProfile1} alt="..." />
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: `url(${cardProfile1})`,
                            opacity: "1"
                          }}
                        />
                      </CardHeader>
                    </GridItem>
                    <Button
                      simple
                      className={classes.modalCloseButton}
                      key="close"
                      aria-label="Close"
                      onClick={() => setClassicModal1(false)}
                    >
                      {" "}
                      <Close className={classes.modalClose} />
                    </Button>
                    <h3 className={classes.textCenter} style={{ marginTop: "-18px", fontWeight: "900" }}>Keith Lind</h3>
                    <h4 className={classes.textCenter} style={{ fontWeight: "500" }}>Executive Chairman & President</h4>

                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                    <p style={{ fontWeight: "300"}}>
                      Mr. Lind is the Executive Chairman & President of Citadel Servicing with 19 Years of Mortgage-Backed Securities and Asset-Backed Securities trading and structuring experience.
                    </p>
                    <p style={{ fontWeight: "300"}}>
                      He was a Managing Director at HPS Investment Partners before joining Citadel Servicing.
                    </p>
                    <p style={{ fontWeight: "300"}}>
                      Mr. Lind was a Trader at Brevan Howard and prior to joining Brevan Howard, Mr. Lind was a Managing Director and Head of the US Non-Agency Mortgage-Backed Securities Trading Desk at RBS. He was a Managing Director at Bear Stearns, where he traded the Non-Agency Mortgage-Backed Credit book. Mr. Lind holds a BA in Finance/Financial Planning & Counseling from Purdue University.
                    </p>
                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>
                    <Button
                      onClick={() => setClassicModal1(false)}
                      color="blue"
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain profile>
                <CardHeader image plain>
                  <a href="#kyle" onClick={() => setClassicModal2(true)}>
                    <img src={cardProfile2} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${cardProfile2})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Kyle Gunderlock</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Chief Executive Officer</h6>
                  </Muted>
                </CardBody>
                {/* <CardFooter profile plain className={classes.justifyContent}>
                  <Button justIcon round color="linkedin">
                    <i className="fab fa-linkedin-in" />
                  </Button>
                  <Button justIcon round color="facebook">
                    <i className="fab fa-facebook-square" />
                  </Button>
                  <Button justIcon round color="dribbble">
                    <i className="fab fa-dribbble" />
                  </Button>
                </CardFooter> */}
              </Card>
              <Dialog
                  classes={{
                    root: classes.modalRoot,
                    paper: classes.modal
                  }}
                  open={classicModal2}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setClassicModal2(false)}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
                  <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                  >
                    <GridItem 
                      GridItem 
                      xs={12} 
                      sm={5} 
                      md={5} 
                      className={
                        classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
                      }
                    >
                      <CardHeader image plain>
                        <img src={cardProfile2} alt="..." />
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: `url(${cardProfile2})`,
                            opacity: "1"
                          }}
                        />
                      </CardHeader>
                    </GridItem>                    
                    <Button
                      simple
                      className={classes.modalCloseButton}
                      key="close"
                      aria-label="Close"
                      onClick={() => setClassicModal2(false)}
                    >
                      {" "}
                      <Close className={classes.modalClose} />
                    </Button>
                    <h3 className={classes.textCenter} style={{ marginTop: "-18px", fontWeight: "900" }}>Kyle Gunderlock</h3>
                    <h4 className={classes.textCenter} style={{ fontWeight: "500" }}>Chief Executive Officer</h4>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                    <p style={{ fontWeight: "300"}}>
                      Mr. Gunderlock has 13 plus years of hands-on experience in the mortgage finance business. Of note is his comprehensive knowledge of operations, financial and risk management, asset valuation, and whole loan trading, as well as the origination of mortgage loans and the management of wholesale and correspondent sales teams.
                    </p>
                    <p style={{ fontWeight: "300"}}>
                      Mr. Gunderlock was a Vice President and District Sales Manager at First Street Financial, Inc. where he led a team of Account Executives and Broker Direct Representatives.
                    </p>
                    <p style={{ fontWeight: "300"}}>
                      Mr. Gunderlock currently acts as Head Trader for CSC’s investment fund, CMMI, LLC, where on a daily basis, since 2007, he has the responsibility of pricing assets and negotiating trade documents. He is involved in the servicing and disposition of      assets as well, and is a member of the Investment Committee that determines final asset acquisition and pricing. Mr. Gunderlock currently holds a Real Estate Salesperson License through the California Department of Real Estate and is approved as a Mortgage Loan Originator via the Nationwide Mortgage Licensing System & Registry.
                    </p>
                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>
                    <Button
                      onClick={() => setClassicModal2(false)}
                      color="blue"
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain profile>
                <CardHeader image plain>
                  <a href="#jeff" onClick={() => setClassicModal3(true)}>
                    <img src={cardProfile3} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${cardProfile3})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Jeffrey Lemieux</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Managing Director, Correspondent Lending</h6>
                  </Muted>
                </CardBody>
                {/* <CardFooter profile plain className={classes.justifyContent}>
                  <Button justIcon round color="dribbble">
                    <i className="fab fa-dribbble" />
                  </Button>
                  <Button justIcon round color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                </CardFooter> */}
              </Card>
              <Dialog
                  classes={{
                    root: classes.modalRoot,
                    paper: classes.modal
                  }}
                  open={classicModal3}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setClassicModal3(false)}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
                  <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                  >
                    <GridItem 
                      GridItem 
                      xs={12} 
                      sm={5} 
                      md={5} 
                      className={
                        classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
                      }
                    >
                      <CardHeader image plain>
                        <img src={cardProfile3} alt="..." />
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: `url(${cardProfile3})`,
                            opacity: "1"
                          }}
                        />
                      </CardHeader>
                    </GridItem>                    
                    <Button
                      simple
                      className={classes.modalCloseButton}
                      key="close"
                      aria-label="Close"
                      onClick={() => setClassicModal3(false)}
                    >
                      {" "}
                      <Close className={classes.modalClose} />
                    </Button>
                    <h3 className={classes.textCenter} style={{ marginTop: "-18px", fontWeight: "900" }}>Jeffrey Lemieux</h3>
                    <h4 className={classes.textCenter} style={{ fontWeight: "500" }}>Managing Director, Correspondent Lending</h4>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                    <p style={{ fontWeight: "300"}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>
                    <Button
                      onClick={() => setClassicModal3(false)}
                      color="blue"
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain profile>
                <CardHeader image plain>
                  <a href="#pablo" onClick={() => setClassicModal4(true)}>
                    <img src={cardProfile4} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${cardProfile4})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Marc Feltman</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>VP, Correspondent Lending</h6>
                  </Muted>
                </CardBody>
                {/* <CardFooter profile plain className={classes.justifyContent}>
                  <Button justIcon round color="dribbble">
                    <i className="fab fa-dribbble" />
                  </Button>
                  <Button justIcon round color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                </CardFooter> */}
              </Card>
              <Dialog
                  classes={{
                    root: classes.modalRoot,
                    paper: classes.modal
                  }}
                  open={classicModal4}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setClassicModal4(false)}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
                  <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                  >
                    <GridItem 
                      GridItem 
                      xs={12} 
                      sm={5} 
                      md={5} 
                      className={
                        classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
                      }
                    >
                      <CardHeader image plain>
                        <img src={cardProfile4} alt="..." />
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: `url(${cardProfile4})`,
                            opacity: "1"
                          }}
                        />
                      </CardHeader>
                    </GridItem>                    
                    <Button
                      simple
                      className={classes.modalCloseButton}
                      key="close"
                      aria-label="Close"
                      onClick={() => setClassicModal4(false)}
                    >
                      {" "}
                      <Close className={classes.modalClose} />
                    </Button>
                    <h3 className={classes.textCenter} style={{ marginTop: "-18px", fontWeight: "900" }}>Marc Feltman</h3>
                    <h4 className={classes.textCenter} style={{ fontWeight: "500" }}>VP, Correspondent Lending</h4>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                    <p style={{ fontWeight: "300"}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>
                    <Button
                      onClick={() => setClassicModal4(false)}
                      color="blue"
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain profile>
                <CardHeader image plain>
                  <a href="#andrew" onClick={() => setClassicModal5(true)}>
                    <img src={cardProfile5} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${cardProfile5})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Andrew Gauder</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>VP, Correspondent Lending</h6>
                  </Muted>
                </CardBody>
                {/* <CardFooter profile plain className={classes.justifyContent}>
                  <Button justIcon round color="dribbble">
                    <i className="fab fa-dribbble" />
                  </Button>
                  <Button justIcon round color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                </CardFooter> */}
              </Card>
              <Dialog
                  classes={{
                    root: classes.modalRoot,
                    paper: classes.modal
                  }}
                  open={classicModal5}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setClassicModal5(false)}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
                  <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                  >
                    <GridItem 
                      GridItem 
                      xs={12} 
                      sm={5} 
                      md={5} 
                      className={
                        classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
                      }
                    >
                      <CardHeader image plain>
                        <img src={cardProfile5} alt="..." />
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: `url(${cardProfile5})`,
                            opacity: "1"
                          }}
                        />
                      </CardHeader>
                    </GridItem>                  
                    <Button
                      simple
                      className={classes.modalCloseButton}
                      key="close"
                      aria-label="Close"
                      onClick={() => setClassicModal5(false)}
                    >
                      {" "}
                      <Close className={classes.modalClose} />
                    </Button>
                    <h3 className={classes.textCenter} style={{ marginTop: "-18px", fontWeight: "900" }}>Andrew Gauder</h3>
                    <h4 className={classes.textCenter} style={{ fontWeight: "500" }}>VP, Correspondent Lending</h4>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                    <p style={{ fontWeight: "300"}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>
                    <Button
                      onClick={() => setClassicModal5(false)}
                      color="blue"
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain profile>
                <CardHeader image plain>
                  <a href="#todd" onClick={() => setClassicModal6(true)}>
                    <img src={cardProfile6} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${cardProfile6})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Todd Lautzenheiser</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>VP, Correspondent Lending</h6>
                  </Muted>
                </CardBody>
                {/* <CardFooter profile plain className={classes.justifyContent}>
                  <Button justIcon round color="dribbble">
                    <i className="fab fa-dribbble" />
                  </Button>
                  <Button justIcon round color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                </CardFooter> */}
              </Card>
              <Dialog
                  classes={{
                    root: classes.modalRoot,
                    paper: classes.modal
                  }}
                  open={classicModal6}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setClassicModal6(false)}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
                  <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                  >
                    <GridItem 
                      GridItem 
                      xs={12} 
                      sm={5} 
                      md={5} 
                      className={
                        classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
                      }
                    >
                      <CardHeader image plain>
                        <img src={cardProfile6} alt="..." />
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: `url(${cardProfile6})`,
                            opacity: "1"
                          }}
                        />
                      </CardHeader>
                    </GridItem>                    
                    <Button
                      simple
                      className={classes.modalCloseButton}
                      key="close"
                      aria-label="Close"
                      onClick={() => setClassicModal6(false)}
                    >
                      {" "}
                      <Close className={classes.modalClose} />
                    </Button>
                    <h3 className={classes.textCenter} style={{ marginTop: "-18px", fontWeight: "900" }}>Todd Lautzenheiser</h3>
                    <h4 className={classes.textCenter} style={{ fontWeight: "500" }}>VP, Correspondent Lending</h4>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                    <p style={{ fontWeight: "300"}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>
                    <Button
                      onClick={() => setClassicModal6(false)}
                      color="blue"
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain profile>
                <CardHeader image plain>
                  <a href="#martin" onClick={()=> setClassicModal7(true)}>
                    <img src={cardProfile7} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${cardProfile7})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Martin Yocum</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>VP, Correspondent Lending</h6>
                  </Muted>
                </CardBody>
                {/* <CardFooter profile plain className={classes.justifyContent}>
                  <Button justIcon round color="dribbble">
                    <i className="fab fa-dribbble" />
                  </Button>
                  <Button justIcon round color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                </CardFooter> */}
              </Card>
              <Dialog
                  classes={{
                    root: classes.modalRoot,
                    paper: classes.modal
                  }}
                  open={classicModal7}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setClassicModal7(false)}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
                  <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                  >
                    <GridItem 
                      GridItem 
                      xs={12} 
                      sm={5} 
                      md={5} 
                      className={
                        classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
                      }
                    >
                      <CardHeader image plain>
                        <img src={cardProfile7} alt="..." />
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: `url(${cardProfile7})`,
                            opacity: "1"
                          }}
                        />
                      </CardHeader>
                    </GridItem>                    
                    <Button
                      simple
                      className={classes.modalCloseButton}
                      key="close"
                      aria-label="Close"
                      onClick={() => setClassicModal7(false)}
                    >
                      {" "}
                      <Close className={classes.modalClose} />
                    </Button>
                    <h3 className={classes.textCenter} style={{ marginTop: "-18px", fontWeight: "900" }}>Martin Yocum</h3>
                    <h4 className={classes.textCenter} style={{ fontWeight: "500" }}>VP, Correspondent Lending</h4>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                    <p style={{ fontWeight: "300"}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>
                    <Button
                      onClick={() => setClassicModal7(false)}
                      color="blue"
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
            </GridItem>
          </GridContainer>
        </div>
      </div>
  );
}
