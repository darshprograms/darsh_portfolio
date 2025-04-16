// app/resume/page.js
import React from 'react';
import styles from './Resume.module.css'; // optional if you want CSS modules

export default function ResumePage() {
  return (
    <main className={styles.resumeContainer}>
      <header className={styles.header}>
        <h1>Darshana Akadkar</h1>
      </header>
      <section className={styles.summary}>
        <h2 className={styles.heading}>About Me</h2>
        <p>Sample summary text</p>
      </section>
    </main>
  );
}

