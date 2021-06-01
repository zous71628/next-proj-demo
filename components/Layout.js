import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';
export default function Layout({ title, description, keyword, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name={keyword} content={description} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}
Layout.defaultProps = {
  title: 'DJ Events || Find the hottiest parties',
  description: 'Find the latest DJ and other musical events',
  keyword: 'music, dj, edm, events',
};