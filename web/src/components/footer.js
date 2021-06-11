import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faFacebookMessenger,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { RiMessengerLine } from "@react-icons/all-files/ri/RiMessengerLine";

import styles from "./footer.module.css";

const Footer = () => (
  <div className={styles.root}>
    <Link to="/plandusite" className={styles.plan}>
      {" "}
      Plan du site{" "}
    </Link>
    <div className={styles.space}> </div>
    <p className={styles.google}>
      {" "}
      Google avis 5,0 ⭐⭐⭐⭐⭐ <Link to="/contact/#devis">Demande de Devis</Link>
    </p>
    <Link to="/mentionslegales" className={styles.link}>
      Mentions Légales
    </Link>
    <div className={styles.icon}>
      <FontAwesomeIcon icon={faInstagram} className={styles.insta} />
      <FontAwesomeIcon icon={faFacebookF} className={styles.fb} />
      <RiMessengerLine className={styles.messenger} />
      <FontAwesomeIcon icon={faWhatsapp} className={styles.whatsapp} />
    </div>
  </div>
);

export default Footer;
