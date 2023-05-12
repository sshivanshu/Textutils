import Alert from "./component/Alert";
import { Navbar } from "./component/Navbar";
import Textarea from "./component/Textarea";
import { useState } from "react";
// import About from "./component/About";
// import { BrowserRouter as Router, Route, Link,Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState("Alert");
  const showAlert = (message, type) => {
    if (mode === "light")
      setalert({
        msg: message,
        type: type,
      });
    else
      setalert({
        msg: message,
        type: type,
      });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light" || mode === "green") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode Is On", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Is On", "success");
    }
  };

  return (
    <div className="App">
    <Navbar title="TextUtilties" mode={mode} toggleMode={toggleMode} />
      <Alert alertmsg={alert} />
      <Textarea mode={mode} showAlert={showAlert} />
    {/* <Router>
      
      
      
        <Routes>
        <Route path="/" element={<} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
