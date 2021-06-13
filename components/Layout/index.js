import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../Nav/Navbar';
import SearchField from './searchbox.js';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>UMetra</title>
        <meta name="description" content="Umění u metra" />
        <link rel="icon" href="/favicon.ico" />
        <div className="Searchbox">
          <SearchField />
        </div>
      </Head>
      <header>
        <div className="App">
          <Navbar />
        </div>
        {/* <button>
          <Link href="/">x</Link>
        </button> */}
      </header>
      <main>{children}</main>
    </>
  );
};

export const AppNav = () => {
  return (
    <div className="App">
      <Navbar />
      App
    </div>
  );
};

export default Layout;
