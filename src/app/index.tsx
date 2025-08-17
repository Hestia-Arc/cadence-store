import classes from "./App.module.css";
import { AppRouter } from "./router";

function App() {
  return (
    <div
      className={`mx-auto xs:min-w-[374px] xs:max-w-[375px] lg:min-w-[1300px] lg:max-w-[1440px] overflow-x-hidden relative ${classes.root}`}
    >
      <AppRouter />
    </div>
  );
}

export default App;
