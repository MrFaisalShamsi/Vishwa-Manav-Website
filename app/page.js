// pages/index.js
import styles from "./page.module.css";
import Navbar from '../components/Navbar';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
      <div className={styles.home_container}>
        <MainContent />
        <Sidebar />
        </div>
      </main>
      <Footer />
    </div>
  );
}
