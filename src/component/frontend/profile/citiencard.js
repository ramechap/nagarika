import React from 'react';
import styles from '../profile/citizencard.css';
import { PersonalInfoField } from './citizencardlayout.js';

const personalInfo = [
  { label: 'नाम थार', value: 'बिशेष श्रेष्ठ' },
  { label: 'जन्म स्थान', value: 'मध्यपुर थिमि' },
  { label: 'स्थायी ठेगाना', value: 'भक्तपुर' },
  { label: 'जन्म मिति', value: '2081/04/04' },
  { label: 'बाबुको नाम थार', value: 'बिशेष श्रेष्ठ' },
  { label: 'आमाको नाम थार', value: 'बिशेष श्रेष्ठ' },
  { label: 'पति/पत्नीको नाम थार', value: 'बिशेष श्रेष्ठ' }
];

export const CitizenshipCard = (props) => {
    const {toogle} = props;
  return (
    <div style={{ width:toogle?(100 % - "60px") :(100 % - "280px") }}  className={styles.cardContainer}>
      <div className={styles.mainContent}>
        <header className={styles.headerSection}>
          <div className={styles.logoWrapper}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/74c468be9389085519d459d13eb0598a73ca80b2a6f8c63267064cf25573a867?placeholderIfAbsent=true&apiKey=ec408fe81b3e45a58fae1c0aea32de85"
              className={styles.logo}
              alt="Citizenship Card Logo"
            />
          </div>
          <div className={styles.titleWrapper}>
            <div className={styles.titleContent}>
              <div className={styles.mainTitle}>
                <span className={styles.redText}>नेपाल सरकार</span>
                <br />
                <span className={styles.redText}>गृह मन्त्रालय</span>
                <br />
                <span className={styles.redText}>जिल्ला प्रशासन कार्यालय,</span>
                <span className={styles.underlineText}>काठमाडौं</span>
              </div>
              <div className={styles.subtitle}>
                नेपाली नागरिकताको प्रमाणपत्र
              </div>
            </div>
          </div>
          <div className={styles.photoWrapper}>
            <div className={styles.photoPlaceholder} role="img" aria-label="Citizenship Photo" />
          </div>
        </header>

        <section className={styles.detailsSection}>
          <div className={styles.detailsContainer}>
            <div className={styles.leftColumn}>
              <div className={styles.registrationNumber}>ना.प्र.नं</div>
              <div className={styles.personalInfo}>
                {personalInfo.map((info, index) => (
                  <PersonalInfoField
                    key={index}
                    label={info.label}
                    value={info.value}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};