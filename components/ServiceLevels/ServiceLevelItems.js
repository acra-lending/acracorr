import React, { useState, useEffect } from "react";
import axios from "axios";
import parse from 'html-react-parser';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import Spinner from 'components/Spinner/Spinner';

import styles from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/sectionCards.js";

const useStyles = makeStyles(styles);

export default function SectionCards() {

  const WEBSITE_URL = 'https://acralending.com';
  const API = 'wp-json/wp/v2';

  const [corrs, setCorrs] = useState([]) 
  const [isLoading, setIsLoading] = useState(false);

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

  const getData = async () => {
    setIsLoading(true);
    try {
      const result = await
      axios.get(
        `${WEBSITE_URL}/${API}/corrservicelevels`
        )
      setCorrs(result.data); // set State
      setIsLoading(false);

    } catch (err) {
      console.error(err.message);
    }
  } 

  useEffect(() => {

    getData();
    
  }, []);

  return (
    <div className="cd-section" id="cards">
        
        {/* MORPHING CARDS START */}
        <div id="morphingCards" className="cd-section">
          <div className={classes.container}>
            <div className={classes.title} style={{ marginTop: "0" }}>
            <h3 style={{ textAlign: "center", marginTop: "0", fontWeight: "700" }}>Service Levels</h3>
            </div>
            <GridContainer>
                {corrs.map(corr => (
                    <GridItem xs={12} sm={12} md={12} lg={12} key={corr.id}>
                      <div className={classes.rotatingCardContainer}>
                        <Card color="rose" className={classes.cardRotate}>
                          <div className={classes.front + " " + classes.wrapperBlue}>
                            <CardBody color className={classes.cardBodyRotate}>
                              <h4 className={classes.cardTitleWhite} style={{ textAlign: "center" }}>
                                {parse(corr.title.rendered)}
                              </h4>
                            </CardBody>
                          </div>
                          <div className={classes.back + " " + classes.wrapperSky}>
                            <CardBody className={classes.cardBodyRotate}>
                              <h4 className={classes.cardTitleWhite}>
                                  {parse(corr.acf.body)}
                              </h4>
                            </CardBody>
                          </div>
                        </Card>
                      </div>
                    </GridItem>
                  )).reverse()
                }
            </GridContainer>
          </div>
        </div>
        {/* MORPHING CARDS END */}
    </div>
  );
}
