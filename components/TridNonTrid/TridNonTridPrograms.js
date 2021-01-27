import React, { useState } from 'react';
import Link from 'next/link';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

// import signupPageStyle from "assets/jss/nextjs-material-kit-pro/pages/signupPageStyle.js";
// import contactUsStyle from "assets/jss/nextjs-material-kit-pro/pages/contactUsStyle.js";
import styles from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/sectionCards.js";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";


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
                <GridItem xs={12} sm={12} md={12} lg={6}>
                    <div className={classes.imgRaised}>
                        <Document
                            file="https://cors-anywhere.herokuapp.com/https://acralending.com/wp-content/uploads/2021/Correspondent/TrainingMaterials/acra-trid-programs.pdf"
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <Page 
                            pageNumber={pageNumber}
                            renderMode="svg"
                            width="450" /> 
                        </Document>
                    </div>
                    <br />
                    <GridContainer justify="center">
                        <GridItem  xs={12} sm={6} md={6}>
                            <Button 
                                color="blue"
                                size="lg"
                                block
                                href="https://acralending.com/wp-content/uploads/2021/Correspondent/TrainingMaterials/acra-trid-programs.pdf"
                                >
                                Download
                                <PictureAsPdfIcon style={{ marginLeft: "10px" }}/> 
                            </Button>
                        </GridItem>
                    </GridContainer>
                </GridItem>
                <GridItem xs={12} sm={12} md={12} lg={6}>
                    <div className={classes.imgRaised}>
                        <Document
                            file="https://cors-anywhere.herokuapp.com/https://acralending.com/wp-content/uploads/2021/Correspondent/TrainingMaterials/acra-non-trid-programs.pdf"
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <Page 
                            pageNumber={pageNumber}
                            renderMode="svg"
                            width="450" /> 
                        </Document>
                    </div>
                    <br />
                    <GridContainer justify="center">
                        <GridItem  xs={12} sm={6} md={6}>
                            <Button 
                                color="blue"
                                size="lg"
                                block
                                href="https://acralending.com/wp-content/uploads/2021/Correspondent/TrainingMaterials/acra-non-trid-programs.pdf" 
                                >
                                Download
                                <PictureAsPdfIcon style={{ marginLeft: "10px" }}/>
                            </Button>
                        </GridItem>
                    </GridContainer>
                </GridItem>
            </GridContainer>
        </div>
    );
};

export default TridNonTridPrograms;