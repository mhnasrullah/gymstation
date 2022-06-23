import Header from "./section/header/Header";
import "./var.scss"
import "./app.scss"
import About from "./section/about/About";
import Trainer from "./section/trainer/Trainer";

function App() {
  return (
    <div className="App">
      <Header/>
      <section id="body">
        <About/>
        <Trainer/>
      </section>
    </div>
  );
}

export default App;
