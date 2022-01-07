/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
import Hidden from "@material-ui/core/Hidden";
import GroupIcon from '@material-ui/icons/Group';

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import MeetingRoom from "@material-ui/icons/MeetingRoom";
import PlaceIcon from '@material-ui/icons/Place';
import Group from "@material-ui/icons/Group";
import HomeIcon from '@material-ui/icons/Home';
import Event from '@material-ui/icons/Event';

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit-pro/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  var onClickSections = {};

  const { dropdownHoverColor } = props;
  const classes = useStyles();
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      {/* <ListItem className={classes.listItem}>
        <Link href="/home">
          
          <Button 
            className={classes.contactButton}
            color={"transparent"}
          >
            <HomeIcon className={classes.icon} /><a> Home </a>
          </Button>
          
        </Link>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Link href="/programs">
          <Button 
            className={classes.contactButton}
            color={"transparent"}
          >
            <Apps className={classes.icon} /><a> Our Programs </a>
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/events">
          <Button 
            className={classes.contactButton}
            color={"transparent"}
          >
            <Event className={classes.icon} /><a> Events </a>
          </Button>
        </Link>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Our Programs"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="#">
              <a className={classes.dropdownLink}>
                <LineStyle className={classes.dropdownIcons} /> 3-Month Bank Statement
              </a>
            </Link>,
            <Link href="#">
              <a className={classes.dropdownLink}>
                <Layers className={classes.dropdownIcons} />
                12-Month Bank Statement
              </a>
            </Link>,
            <a
              href="#"
              className={classes.dropdownLink}
            >
              <Icon className={classes.dropdownIcons}>content_paste</Icon>
              ATR-In-Full
            </a>,
            <Link href="#">
              <a className={classes.dropdownLink}>
                <Layers className={classes.dropdownIcons} />
                Jumbo Non-QM
              </a>
            </Link>
          ]}
        />
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Link href="/team">
          <Button 
            className={classes.contactButton}
            color={"transparent"}
          >
            <Group className={classes.icon} /><a> Our Team </a>
          </Button>
        </Link>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Our Team"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Group}
          dropdownList={[
            <Link href="/sections#headers">
              <a
                className={classes.dropdownLink}
                onClick={e => smoothScroll(e, "headers")}
              >
                <Dns className={classes.dropdownIcons} /> Headers
              </a>
            </Link>,
            <Link href="/sections#features">
              <a
                className={classes.dropdownLink}
                onClick={e => smoothScroll(e, "features")}
              >
                <Build className={classes.dropdownIcons} /> Features
              </a>
            </Link>,
            <Link href="/sections#access">
              <a
                className={classes.dropdownLink}
                onClick={e => smoothScroll(e, "access")}
              >
                <Build className={classes.dropdownIcons} /> Access
              </a>
            </Link>,
            <Link href="/sections#blogs">
              <a
                className={classes.dropdownLink}
                onClick={e => smoothScroll(e, "blogs")}
              >
                <ListIcon className={classes.dropdownIcons} /> Blogs
              </a>
            </Link>,
            <Link href="/sections#teams">
              <a
                className={classes.dropdownLink}
                onClick={e => smoothScroll(e, "teams")}
              >
                <People className={classes.dropdownIcons} /> Teams
              </a>
            </Link>,
            <Link href="/sections#projects">
              <a
                className={classes.dropdownLink}
                onClick={e => smoothScroll(e, "projects")}
              >
                <Assignment className={classes.dropdownIcons} /> Projects
              </a>
            </Link>,
            <Link href="/sections#pricing">
              <a
                className={classes.dropdownLink}
                onClick={e => smoothScroll(e, "pricing")}
              >
                <MonetizationOn className={classes.dropdownIcons} /> Pricing
              </a>
            </Link>,
            <Link href="/sections#testimonials">
              <a
                className={classes.dropdownLink}
                onClick={e => smoothScroll(e, "testimonials")}
              >
                <Chat className={classes.dropdownIcons} /> Testimonials
              </a>
            </Link>,
            <Link href="/sections#contacts">
              <a
                className={classes.dropdownLink}
                onClick={e => smoothScroll(e, "contacts")}
              >
                <Call className={classes.dropdownIcons} /> Contacts
              </a>
            </Link>
          ]}
        />
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Link href="/contact-us">
          <Button 
            className={classes.contactButton}
            color={"transparent"}
          >
            <PlaceIcon className={classes.icon} /><a> Contact Us </a>
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Hidden mdDown>
            <Button
              color={"transparent"}
              className={classes.navButton}
              round
              href="/corr-portal"
            >
              <MeetingRoom className={classes.icons} /> portal
            </Button>
        </Hidden>
        <Hidden mdUp>
          <Button
            color={"blue"}
            className={classes.navButton}
            round
            href="/corr-portal"
          >
            <MeetingRoom className={classes.icons} /> portal
          </Button>
        </Hidden>
      </ListItem>
    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "blue",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};
