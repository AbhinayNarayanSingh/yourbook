import Navbar from '@/components/core/Navbar'
import '@/styles/globals.css'
import '@/styles/bootstrap.scss'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function App({ Component, pageProps }) {
  return ( <>
    <Navbar/>
    <Component {...pageProps} />
  </>)
  
}
