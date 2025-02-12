
import React from 'react';
import styles from '../profile/citizencard.css';

export const PersonalInfoField = ({ label, value }) => {
  return (
    <div className={styles.infoLabel}>
      <span>{label}:</span>
      <span>{value}</span>
    </div>
  );
};