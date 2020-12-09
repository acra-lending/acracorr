import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Share from "@material-ui/icons/Share";
import ChatBubble from "@material-ui/icons/ChatBubble";
import Schedule from "@material-ui/icons/Schedule";
import TrendingUp from "@material-ui/icons/TrendingUp";
import Subject from "@material-ui/icons/Subject";
import WatchLater from "@material-ui/icons/WatchLater";
import People from "@material-ui/icons/People";
import Business from "@material-ui/icons/Business";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";
import Delete from "@material-ui/icons/Delete";
import Bookmark from "@material-ui/icons/Bookmark";
import Refresh from "@material-ui/icons/Refresh";
import Receipt from "@material-ui/icons/Receipt";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardAvatar from "components/Card/CardAvatar.js";
import Info from "components/Typography/Info.js";
import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Rose from "components/Typography/Rose.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/sectionCards.js";

import cardBlog1 from "assets/img/examples/card-blog1.jpg";
import cardBlog2 from "assets/img/examples/card-blog2.jpg";
import cardBlog3 from "assets/img/examples/card-blog3.jpg";
import cardBlog5 from "assets/img/examples/card-blog5.jpg";
import cardBlog6 from "assets/img/examples/card-blog6.jpg";
import cardProfile1 from "assets/img/examples/card-profile1.jpg";
import cardProfile4 from "assets/img/examples/card-profile4.jpg";
import blog1 from "assets/img/examples/blog1.jpg";
import blog5 from "assets/img/examples/blog5.jpg";
import blog6 from "assets/img/examples/blog6.jpg";
import blog8 from "assets/img/examples/blog8.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import christian from "assets/img/faces/christian.jpg";
import marc from "assets/img/faces/marc.jpg";
import office1 from "assets/img/examples/office1.jpg";
import color1 from "assets/img/examples/color1.jpg";
import color2 from "assets/img/examples/color2.jpg";
import color3 from "assets/img/examples/color3.jpg";

const useStyles = makeStyles(styles);

export default function SectionCards() {
  const [activeRotate1, setActiveRotate1] = React.useState("");
  const [activeRotate2, setActiveRotate2] = React.useState("");
  const [activeRotate3, setActiveRotate3] = React.useState("");
  const classes = useStyles();
  React.useEffect(() => {
    if (window) {
      window.addEventListener("resize", addStylesForRotatingCards);
    }
    addStylesForRotatingCards();
    return function cleanup() {
      if (window) {
        window.removeEventListener("resize", addStylesForRotatingCards);
      }
    };
  });
  const addStylesForRotatingCards = () => {
    var rotatingCards = document.getElementsByClassName(classes.cardRotate);
    for (let i = 0; i < rotatingCards.length; i++) {
      var rotatingCard = rotatingCards[i];
      var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
      var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      var rotatingWrapper = rotatingCard.parentElement;
      var cardWidth = rotatingCard.parentElement.offsetWidth;
      var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
      rotatingWrapper.style.height = cardHeight + "px";
      rotatingWrapper.style["margin-bottom"] = 30 + "px";
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      cardFront.style.height = cardHeight + 35 + "px";
      cardFront.style.width = cardWidth + "px";
      cardBack.style.height = cardHeight + 35 + "px";
      cardBack.style.width = cardWidth + "px";
    }
  };
  return (
    <div className="cd-section" id="cards">
        
        {/* MORPHING CARDS START */}
        <div id="morphingCards" className="cd-section">
          <div className={classes.container}>
            <div className={classes.title} style={{ marginTop: "0" }}>
              <h3 style={{ textAlign: "center", marginTop: "0" }}>Service Levels</h3>
            </div>
            <GridContainer>

              <GridItem xs={12} sm={12} md={12} lg={12}>
                <div className={classes.rotatingCardContainer}>
                  <Card color="rose" className={classes.cardRotate}>
                    <div className={classes.front + " " + classes.wrapperBlue}>
                      <CardBody color className={classes.cardBodyRotate}>
                        <h4 className={classes.cardTitleWhite} style={{ textAlign: "center" }}>
                          Initial Submission
                        </h4>
                      </CardBody>
                    </div>
                    <div className={classes.back + " " + classes.wrapperSky}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h4 className={classes.cardTitleWhite}>
                            24 Hours
                        </h4>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <div className={classes.rotatingCardContainer}>
                  <Card color="rose" className={classes.cardRotate}>
                    <div className={classes.front + " " + classes.wrapperBlue}>
                      <CardBody color className={classes.cardBodyRotate}>
                        <h4 className={classes.cardTitleWhite} style={{ textAlign: "center" }}>
                          Underwriting
                        </h4>
                      </CardBody>
                    </div>
                    <div className={classes.back + " " + classes.wrapperSky}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h4 className={classes.cardTitleWhite}>
                            5 Days
                        </h4>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <div className={classes.rotatingCardContainer}>
                  <Card color="rose" className={classes.cardRotate}>
                    <div className={classes.front + " " + classes.wrapperBlue}>
                      <CardBody color className={classes.cardBodyRotate}>
                        <h4 className={classes.cardTitleWhite} style={{ textAlign: "center" }}>
                          RM Conditions Review
                        </h4>
                      </CardBody>
                    </div>
                    <div className={classes.back + " " + classes.wrapperSky}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h4 className={classes.cardTitleWhite}>
                            48 Hours
                        </h4>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <div className={classes.rotatingCardContainer}>
                  <Card color="rose" className={classes.cardRotate}>
                    <div className={classes.front + " " + classes.wrapperBlue}>
                      <CardBody color className={classes.cardBodyRotate}>
                        <h4 className={classes.cardTitleWhite} style={{ textAlign: "center" }}>
                          Conditions Review
                        </h4>
                      </CardBody>
                    </div>
                    <div className={classes.back + " " + classes.wrapperSky}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h4 className={classes.cardTitleWhite}>
                            5 Days
                        </h4>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <div className={classes.rotatingCardContainer}>
                  <Card color="rose" className={classes.cardRotate}>
                    <div className={classes.front + " " + classes.wrapperBlue}>
                      <CardBody color className={classes.cardBodyRotate}>
                        <h4 className={classes.cardTitleWhite} style={{ textAlign: "center" }}>
                          Closed Loan Submission
                        </h4>
                      </CardBody>
                    </div>
                    <div className={classes.back + " " + classes.wrapperSky}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h4 className={classes.cardTitleWhite}>
                            24 Hours
                        </h4>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <div className={classes.rotatingCardContainer}>
                  <Card color="rose" className={classes.cardRotate}>
                    <div className={classes.front + " " + classes.wrapperBlue}>
                      <CardBody color className={classes.cardBodyRotate}>
                        <h4 className={classes.cardTitleWhite} style={{ textAlign: "center" }}>
                          Closed Loan Purchase Review
                        </h4>
                      </CardBody>
                    </div>
                    <div className={classes.back + " " + classes.wrapperSky}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h4 className={classes.cardTitleWhite}>
                            24 Hours
                        </h4>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <div className={classes.rotatingCardContainer}>
                  <Card color="rose" className={classes.cardRotate}>
                    <div className={classes.front + " " + classes.wrapperBlue}>
                      <CardBody color className={classes.cardBodyRotate}>
                        <h4 className={classes.cardTitleWhite} style={{ textAlign: "center" }}>
                          Closed Loan Condition Review
                        </h4>
                      </CardBody>
                    </div>
                    <div className={classes.back + " " + classes.wrapperSky}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h4 className={classes.cardTitleWhite}>
                            24 Hours
                        </h4>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
            
            </GridContainer>
          </div>
        </div>
        {/* MORPHING CARDS END */}
    </div>
  );
}
