import React from "react";
import {YouTube} from "@material-ui/icons";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <InstagramIcon/> <TwitterIcon/> <FacebookIcon/> <LinkedInIcon/> <GithubIcon/><YouTube/>
            </div>
            <p> &copy; 2023 Created by AltunIT for a better WEB</p>
        </div>
    );
}

export default Footer;
