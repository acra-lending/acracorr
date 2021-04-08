import React, { useEffect, useState } from "react";
import axios from 'axios';
import parse from 'html-react-parser';
// plugin that creates slider
import Slider from "nouislider";
// react component plugin for creating beatiful tags on an input
import TagsInput from "react-tagsinput";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Share from "@material-ui/icons/Share";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardAvatar from "components/Card/CardAvatar.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import Paginations from "components/Pagination/Pagination.js";
import Badge from "components/Badge/Badge.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

import basicsStyle from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/basicsStyle.js";


const useStyles = makeStyles(basicsStyle);


export default function SectionBasics() {

  const WEBSITE_URL = 'https://acralending.com';
  const API = 'wp-json/wp/v2';

  const [corrs, setCorrs] = useState([]) 
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const result = await
      axios.get(
        `${WEBSITE_URL}/${API}/corrprescreen`
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

  const classes = useStyles();
  
  return(
      <>
        {/* <div className={classes.title}>
            <h3 style={{ textAlign: "center", marginTop: "0", fontWeight: "400" }}>Instructions</h3>
        </div> */}
          <GridItem xs={12} sm={12} md={12} lg={12} className={classes.mlAuto}>
              {corrs.map(corr => (
                  <Card color="blue" key={corr.id}>
                      <CardBody color>
                          <h3 className={classes.cardTitleWhite} style={{ textAlign: "center" }}>
                              {parse(corr.title.rendered)}
                          </h3>
                          <p style={{ textAlign: "center" }}>
                              {parse(corr.acf.description)}
                          </p>
                      </CardBody>
                  </Card>
              )).reverse()
              }
          </GridItem>
      </>
  )
}
