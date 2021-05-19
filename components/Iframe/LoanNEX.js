import React from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import signupPageStyle from "assets/jss/nextjs-material-kit-pro/pages/signupPageStyle.js";

const useStyles = makeStyles(signupPageStyle);

const Iframe = () => {
    const classes = useStyles();

    return (
        // basic bootstrap classes. you can change with yours.
        <div>
            <p style={{ textAlign: "center", color: "black" }}>The Quick Qualifier is down for maintenance. Sorry for the inconvenience.</p>
            {/* <iframe src="https://acralending.com/LoanNEX/corr/" frameBorder="0" scrolling="yes" width="100%" height="1400px" ></iframe> */}
        </div>
    );
};

export default Iframe;
