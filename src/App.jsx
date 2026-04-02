import { ThemeProvider } from "./contexts/ThemeContext";
import DataVizPortfolio from "./components/portfolios/DataVizPortfolio";

function App() {
  return (
    <ThemeProvider>
      <DataVizPortfolio />
    </ThemeProvider>
  );
}

export default App;
