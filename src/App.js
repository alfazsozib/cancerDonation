import Donate from "./component/Donate/Donate";
import WhatWeDo from "./component/WhatWeDo/WhatWeDo";
import WhoAreWe from "./component/WhoAreWe/WhoAreWe";
import Home from "./component/home/Home";


function App() {
  return (
    <div className="App">
     <Home/>
     <WhoAreWe/>
     <WhatWeDo/>
     <Donate/>
    </div>
  );
}

export default App;
