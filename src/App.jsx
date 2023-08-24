import "./App.css";

import View from "./assets/icon-view.svg";
import Avatar from "./assets/image-avatar.png";
import Clock from "./assets/icon-clock.svg";
import Ethereum from "./assets/icon-ethereum.svg";
function App() {
  return (
    <main>
      <div className="imgs-container">
        <img src={View} alt="view" className="view" />
      </div>
      <div className="txt-container">
        <h1 className="title">Equilibrium #3429</h1>
        <p className="para">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="status">
          <div className="val-box">
            <img src={Ethereum} alt="" />
            <strong>0.041eth</strong>
          </div>
          <div className="time-box">
            <img src={Clock} alt="" />
            <p>3 days left</p>
          </div>
        </div>
        <div className="line"></div>
        <div className="user-box">
          <div className="img-box">
            <img src={Avatar} alt="jules wyvern" className="user-img" />
          </div>
          <p className="user-name">
            Creation of
            <span> Jules Wyvern</span>
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
