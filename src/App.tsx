import ReactPixel from "react-facebook-pixel";

import { META_PIXEL_APP_ID } from "./config/env";

import Routes from "@/Routes";
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";

function App() {
  ReactPixel.init(META_PIXEL_APP_ID);
  ReactPixel.pageView();

  return (
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  );
}

export default App;
