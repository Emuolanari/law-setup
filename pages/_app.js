import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import Footer from '../src/components/Footer'
import NavBar from '../src/components/NavBar';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


function MyApp({ Component, pageProps }) {
  return (<><Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className='d-flex flex-column justify-content-between vh-100'>
      <NavBar/>
      <Component {...pageProps} />
      <Footer/>

      </div>
  </>)
}

export default MyApp
