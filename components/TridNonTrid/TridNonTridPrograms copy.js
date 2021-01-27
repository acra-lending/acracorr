import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// import signupPageStyle from "assets/jss/nextjs-material-kit-pro/pages/signupPageStyle.js";
// import contactUsStyle from "assets/jss/nextjs-material-kit-pro/pages/contactUsStyle.js";
import styles from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/sectionCards.js";

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
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardAvatar from "components/Card/CardAvatar.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import blog8 from "assets/img/examples/blog8.jpg";

import Info from "components/Typography/Info.js";
import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Rose from "components/Typography/Rose.js";
import Button from "components/CustomButtons/Button.js";
import marc from "assets/img/faces/marc.jpg";

// import TridPrograms from "assets/files/acra-trid-programs.pdf";

const useStyles = makeStyles(styles);

const TridNonTridPrograms = () => {
    const classes = useStyles();

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    let onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    let changePage = (offset) => {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
      }
    
    let  previousPage = () => {
        changePage(-1);
      }
    
    let nextPage = () => {
        changePage(1);
      }

    return (
        // basic bootstrap classes. you can change with yours.
        <div>
            <GridContainer>
                <GridItem lg={12}>
                <Card blog>
                    <CardHeader image>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={blog8} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${blog8})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody>
                      <Danger>
                        <h6 className={classes.cardCategory}>
                          <TrendingUp /> TRENDING
                        </h6>
                      </Danger>
                      <h4 className={classes.cardTitle}>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          To Grow Your Business Start Focusing on Your Employees
                        </a>
                      </h4>
                    </CardBody>
                    <CardFooter>
                      <div className={classes.author}>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            src={marc}
                            alt="..."
                            className={classes.imgRaised + " " + classes.avatar}
                          />
                          <span>Mike John</span>
                        </a>
                      </div>
                      <div className={classes.stats + " " + classes.mlAuto}>
                        <Schedule />5 min read
                      </div>
                    </CardFooter>
                  </Card>
                    <Document
                        file="https://cors-anywhere.herokuapp.com/https://acralending.com/wp-content/uploads/2021/Correspondent/TrainingMaterials/acra-trid-programs.pdf"
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        <Page 
                        pageNumber={pageNumber}
                        width="600" /> 
                    </Document>
                    <div>
                        <p>
                        Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                        </p>
                        <button
                        type="button"
                        disabled={pageNumber <= 1}
                        onClick={previousPage}
                        >
                        Previous
                        </button>
                        <button
                        type="button"
                        disabled={pageNumber >= numPages}
                        onClick={nextPage}
                        >
                        Next
                        </button>
                    </div>

                </GridItem>
            </GridContainer>
        </div>
    );
};

export default TridNonTridPrograms;