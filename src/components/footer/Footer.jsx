import React from "react";
import footerStyles from "..//footer/footer.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <div id={footerStyles.copyright}>
            <p>
                © All rights reserved. | Design by Guillermo Fernandez.
            </p>
            <ul className={footerStyles.contact}>
                <li>
                    <a href="https://www.linkedin.com/in/guillermo-fern%C3%A1ndez-703b50267/">
                        <FaLinkedin size="1.5em" color="cyan" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/GEdgardoFernandez?tab=repositories">
                        <FaGithub size="1.5em" color="lime" />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Footer;