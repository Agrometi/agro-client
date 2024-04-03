import Routes from "@/Routes";
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  );
}

export default App;
