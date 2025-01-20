import React from 'react';

const AffiliateBanner = () => {
  return (
    <div style={styles.affiliateBanner}>
      <img src="/Banner.png" alt="Affiliate Registration" style={styles.bannerImage} />
      <div style={styles.bannerContent}>
        <h2>Join Our Affiliate Program</h2>
        <p>Earn commissions by promoting our products. Register now and start earning!</p>
        <a href="/agent-affiliate-registration" style={styles.registerButton}>Register Now</a>
      </div>
    </div>
  );
};

const styles = {
  affiliateBanner: {
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    // textAlign: 'center',
    padding: '40px',
  },
  bannerImage: {
    width: '100%',
    maxWidth: '1920px',
    height: 'auto',
  },
  bannerContent: {
    marginTop: '20px',
  },
  registerButton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  registerButtonHover: {
    backgroundColor: '#0056b3',
  },
  '@media (minWidth: 768px)': {
    affiliateBanner: {
      // flexDirection: 'row',
      // textAlign: 'left',
      justifyContent: 'space-between',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    bannerContent: {
      maxWidth: '50%',
    },
  },
};

export default AffiliateBanner;
