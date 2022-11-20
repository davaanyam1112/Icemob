import '../styles/globals.css'
import '../src/scenes/homePage/styles/styles.scss'
import '../src/scenes/Information/styles/styles.scss'
import '../src/scenes/Product/styles/styles.scss'
import Layout from '../src/components/layout'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  
  )
}

export default MyApp
