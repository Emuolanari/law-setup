import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import Footer from '../src/components/Footer'
import NavBar from '../src/components/NavBar';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import "nprogress/nprogress.css";
import Router from "next/router";
import NProgress from "nprogress"
import {useEffect} from 'react'
import {SessionProvider} from 'next-auth/react'

config.autoAddCss = false


function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  NProgress.configure({showSpinner: false})
  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);
  return (
  <>

    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <SessionProvider session={session}>
      <div className='d-flex flex-column justify-content-between vh-100'>
        <NavBar />
        <Component {...pageProps} />
        <Footer />

      </div>
    </SessionProvider>
  </>
  )
}

export default MyApp
