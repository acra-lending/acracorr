import React, { useState, useEffect } from "react";
import axios from 'axios';
import parse from 'html-react-parser';
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
import Spinner from 'components/Spinner/Spinner';
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


export default function SectionTeamItem(corrs) {
  const classes = useStyles();
  console.log(corrs)

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
                    <div>
                      <img src={cardProfile1} alt="..." />
                    </div>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${cardProfile1})`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>{parse(corrs.acf.name)}</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>{parse(corrs.acf.title)}</h6>
                    </Muted>
                  </CardBody>
                  <CardFooter profile plain className={classes.justifyContent}>
                    <Button color="blue" justIcon>
                      <a href={"mailto:" + corrs.acf.email} style={{ color: "inherit" }}>
                      <MailOutlineIcon />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </GridItem>
          </GridContainer>
        </div>
      </div>
  );
}
