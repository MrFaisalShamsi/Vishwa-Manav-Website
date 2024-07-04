// components/MainContent.js
import React from 'react';
import styles from "./MainContent.module.css";
import Image from 'next/image';

const MainContent = () => {
  return (
    <div className={styles.main_content}>
      <div className="news-card">
        <img src="/images/about.jpg" alt="News" width={400} height={250} />
        <div className={styles.news_details}>
          <p className={styles.news_title}>
            आबादी भूमि अभी ना खरीदें, अधिकार अभिलेख के समय से ट्रुटि है। पटवारी अगर अभी भी नजरीया नक्शा बना रहे है तो गलत है। नामांतरण भी नहीं होगा : तहसीलदार
          </p>
          <p className={styles.news_source}>AAJKAKHULASA.IN - Jun 28, 2024</p>
        </div>
      </div>
      <div className={styles.news_card}>
        <img src="/images/about.jpg" alt="News" width={400} height={250} />
        <div className={styles.news_details}>
          <p className={styles.news_title}>
            घोडाडोंगरी में अघोषित बिजली कटौती और लो वोल्टेज के खिलाफ फूटा आक्रोश...
          </p>
        </div>
      </div>
      <div className={styles.news_card}>
        <img src="/images/about.jpg" alt="News" width={400} height={250} />
        <div className={styles.news_details}>
          <p className={styles.news_title}>
            Transfer : इन अधिकारियों के हुए ट्रांसफर
          </p>
        </div>
      </div>
      <div className={styles.news_card}>
        <img src="/images/about.jpg" alt="News" width={400} height={250} />
        <div className={styles.news_details}>
          <p className={styles.news_title}>
            मैट्रेस्स वर्ग हेतु औपचारिक रूप से बंद रहेगा रेलवे गेट
          </p>
        </div>
      </div>
      <div className={styles.news_card}>
        <img src="/images/about.jpg" alt="News" width={400} height={250} />
        <div className={styles.news_details}>
          <p className={styles.news_title}>
            आखिर बोड्र पर सिर्फ उसका नाम रह गया .........
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
