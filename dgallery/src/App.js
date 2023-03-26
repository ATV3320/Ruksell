import "./style/App.css";
import Gallery from "./Gallery";
import { connectWallet } from "./connectWallet";
// var Web3 = require("web3");

// const { ethereum } = window;



function App() {
  return (
    <>
      <button onClick={connectWallet}>Click me</button>
      <h1 style={{ textAlign: "center" }}>dGallery</h1>
      <p style={{ textAlign: "center" }}>
        Hover over the images to unblur them :p
      </p>
      <Gallery />
    </>
  );
}

export default App;
