import SSRProvider from "react-bootstrap/SSRProvider";
import NavBar from "../components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "/styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

export default function App({ Component, pageProps }) {
  // App wrapped in SSRProvider for Bootstrap ID consistency
  return (
    <SSRProvider>
      <NavBar />
      <Component {...pageProps} />
    </SSRProvider>
  );
}
