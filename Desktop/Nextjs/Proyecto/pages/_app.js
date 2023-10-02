import Layout from "../components/Layout";
import "../Styles.css"
export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>    );
  }