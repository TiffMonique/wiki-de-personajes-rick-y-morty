import React from "react";
import styles from "./Cards.module.scss";

const cards = ({ results }) => {
  let display;
  if (results) {
    display = results.map((x) => {
      let { id, name, image, status, location } = x;
      return (
        <div key={id} className="col-4 mb-4 position-relative">
          <div
            className={`${styles.card} d-flex flex-column justify-content-center`}
          >
            <img src={image} alt="" className={`${styles.img} img-fluid`} />
            <div className={`${styles.content}`}>
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6 fw-normal">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.badge} position-absolute badge bg-secondary`}
          >
            {status}
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </div>
      );
    });
  } else {
    display = "No Characters found  :/";
  }
  return <>{display}</>;
};

export default cards;
