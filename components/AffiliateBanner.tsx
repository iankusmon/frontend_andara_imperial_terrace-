import React from "react";

const AffiliateBanner = () => {
  return (
    <div style={styles.affiliateBanner} className="mb-20 mt-20">
      <a href="/sign-up/agent-affiliate">
        <img src="/slide3.png" alt="Affiliate Registration" style={styles.bannerImage} />
      </a>
    </div>
  );
};

const styles = {
  affiliateBanner: {
    width: "100vw",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
  },
  bannerImage: {
    width: "100%",
    maxWidth: "1920px",
    height: "auto",
  },
};

export default AffiliateBanner;
