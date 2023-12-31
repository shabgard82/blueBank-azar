import React from "react";
import redslider from "../../images/redslider.jpg";
import blueslider from "../../images/blueslider.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "./styles.module.css";
import { Stack } from "@mui/material";
import card from "../../images/card.jpg";
import bcard from "../../images/bcard.jpg";

function CardSlider() {
  const options = {
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
    },
  };
  return (
    <Stack className={styles.card}>
      <OwlCarousel
        className={`owl-theme ${styles.owl}`}
        dots={false}
        {...options}
      >
        <div className={styles.all}>
          <h6 style={{ width: "170px" }}>
            <img src={card} />
          </h6>
        </div>
        <div className={styles.all1}>
          <h6 style={{ width: "170px" }}>
            <img src={bcard} />
          </h6>
        </div>
        <div className={styles.all2}>
          <h6 style={{ width: "170px" }}>
            <img src={card} />
          </h6>
        </div>
        <div className={styles.all3}>
          <h6 style={{ width: "170px" }}>
            <img src={bcard} />
          </h6>
        </div>
        <div className={styles.all4}>
          <h6 style={{ width: "170px" }}>
            <img src={card} />
          </h6>
        </div>
        <div className={styles.all5}>
          <h6 style={{ width: "170px" }}>
            <img src={bcard} />
          </h6>
        </div>
      </OwlCarousel>
    </Stack>
  );
}
export default CardSlider;
