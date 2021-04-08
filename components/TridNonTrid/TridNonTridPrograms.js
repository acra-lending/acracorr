import React, { useState, useEffect } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
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
import Spinner from 'components/Spinner/Spinner';


// import TridPrograms from "assets/files/acra-trid-programs.pdf";

const useStyles = makeStyles(styles);

const TridNonTridPrograms = () => {
    const classes = useStyles();

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [corrs, setCorrs] = useState([]) 
    const [isLoading, setIsLoading] = useState(false);

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
    
    const WEBSITE_URL = 'https://acralending.com';
    const API = 'wp-json/wp/v2';
    const CORS = 'https://cors-anywhere.herokuapp.com';

    const getData = async () => {
        setIsLoading(true);
        try {
        const result = await
        axios.get(
            `${WEBSITE_URL}/${API}/corrtrid`
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
        // basic bootstrap classes. you can change with yours.
        <div>
            <GridContainer>
            {isLoading ? (
                <Spinner />
            ) : (
                corrs.map((corr) =>(
                    <GridItem xs={12} sm={12} md={12} lg={6}>
                        <div className={classes.imgRaised}>
                            <Document
                                file={`${CORS}/` + parse(corr.acf.trid_non_trid)}
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
                                    href={parse(corr.acf.trid_non_trid)}
                                    target="_blank"
                                    >
                                    Download
                                    <PictureAsPdfIcon style={{ marginLeft: "10px" }}/> 
                                </Button>
                            </GridItem>
                        </GridContainer>
                    </GridItem>
                )).reverse()
            )}
            </GridContainer>
        </div>
    );
};

export default TridNonTridPrograms;