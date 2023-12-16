import { Provider } from "react-redux";
import store from "../../store"; // adjust the path according to your file structure
import "../styles/TollCalculator.css";

function MyApp({
  Component,
  pageProps,
}: {
  Component: React.ComponentType<any>;
  pageProps: any;
}) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
