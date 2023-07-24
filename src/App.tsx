// import Component from "./components/AppCard";
import { AppCard } from "./components/AppCard1";
import { SchoolBranchCard } from "./components/SchoolBranchCard";

import { BigButtons } from "./components/BigButtons";
import { EmptyBox } from "./components/EmptyBox";
import "./App.css";
import { UnderConstruction } from "./components/UnderConstruction";
import { SetupschoolLogo } from "./components/SchoolSetup/SetupschoolLogo";



function App() {


  return (
    <div className="main">
      <SetupschoolLogo/>
    <UnderConstruction/>
      <EmptyBox/>
<SchoolBranchCard/>
<SchoolBranchCard/>
<BigButtons/>
<AppCard/>
<AppCard/>
<AppCard/>

    
    </div>
  );
}

export default App;
