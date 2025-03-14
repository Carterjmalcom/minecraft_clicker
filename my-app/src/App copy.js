import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // import React, { useState, useEffect } from "react";
  const [userName, setUserName] = useState('Username');
  const [money, setMoney] = useState(0);
  const [level, setLevel] = useState(1);
  const [xp, setXp] = useState(0);
  const [itemURLs, setItemURLs] = useState([]);
  const [upgradeLVL, setUpgradeLVL] = useState(0);
  const [cost, setCost] = useState(5);
  const [mult, setMult] = useState(1.0);
  const [dmg, setDmg] = useState(1);
  const [upgradeCost, setUpgradeCost] = useState(5);
  const [multiplier, setMultiplier] = useState(1);

  useEffect(() => {
    if (xp >= 50) setLevel(2);
    if (xp >= 100) setLevel(3);
    if (xp >= 150) setLevel(4);
    if (xp >= 200) setLevel(5);
    if (xp >= 250) setLevel(6);
    if (xp >= 300) setLevel(7);
  }, [xp]);

  // Display upgrade information
  useEffect(() => {
    const cost = upgradeLVL * 5;
    setUpgradeCost(cost);
    setMultiplier(Math.round((1 + upgradeLVL * 0.1) * 10) / 10);
    setDmg(multiplier);
  }, [upgradeLVL, multiplier]);

  // Open case function
  const openCase = () => {
    if (money >= 20) {
      let random = Math.random();
      let result = "";
      let item = "";
      if (random < 0.56) {
        result = "Common";
        item = "common-item.png"; // Replace with actual item URL
      } else if (random < 0.76) {
        result = "Uncommon";
        item = "uncommon-item.png"; // Replace with actual item URL
      } else if (random < 0.87) {
        result = "Rare";
        item = "rare-item.png"; // Replace with actual item URL
      } else if (random < 0.96) {
        result = "Epic";
        item = "epic-item.png"; // Replace with actual item URL
      } else {
        result = "Legendary";
        item = "legendary-item.png"; // Replace with actual item URL
      }

      // Add the item to the inventory
      setItemURLs((prevURLs) => [...prevURLs, item]);
      setMoney((prevMoney) => prevMoney - 20); // Deduct money
      setXp((prevXp) => prevXp + 1); // Increase XP
    }
  };

  // Claim the opened case
  const claim = () => {
    setMoney((prevMoney) => prevMoney - 20); // Deduct money
    setItemURLs([]); // Clear the inventory
  };

  // Upgrade the damage multiplier
  const upgradeDamage = () => {
    if (money >= upgradeCost) {
      setMoney((prevMoney) => prevMoney - upgradeCost);
      setUpgradeLVL((prevLvl) => prevLvl + 1);
    }
  };

  useEffect(() => {
    const savedMoney = localStorage.getItem('money');
    const savedXp = localStorage.getItem('xp');
    const savedItemURLs = localStorage.getItem('inventory');
    const savedUpgradeLVL = localStorage.getItem('upgradeLVL');
    if (savedMoney) setMoney(parseInt(savedMoney));
    if (savedXp) setXp(parseInt(savedXp));
    if (savedItemURLs) setItemURLs(JSON.parse(savedItemURLs));
    if (savedUpgradeLVL) setUpgradeLVL(parseInt(savedUpgradeLVL));
  }, []);

  // Function to save state to localStorage
  const save = () => {
    localStorage.setItem('money', money);
    localStorage.setItem('xp', xp);
    localStorage.setItem('inventory', JSON.stringify(itemURLs));
    localStorage.setItem('upgradeLVL', upgradeLVL);
    console.log("Data saved");
  };

  // Upgrade function
  const upgradeDMGfunction = () => {
    if (money >= cost) {
      setUpgradeLVL(upgradeLVL + 1);
      setCost((upgradeLVL + 1) * 5);
      setMoney(money - cost);
      setMult(Math.round((1 + (upgradeLVL + 1) * 0.1) * 10) / 10);
      setDmg(mult);
      console.log(`Upgrade Level: ${upgradeLVL}, Damage Multiplier: ${mult}`);
      save();
    }
  }

  const minePage = () => {
    console.log("Navigating to mine page");
  };

  const shopPage = () => {
    console.log("Navigating to shop page");
  };

  const inventoryPage = () => {
    console.log("Navigating to inventory page");
  };

  const bettingPage = () => {
    console.log("Navigating to betting page");
  };

  const upgradePage = () => {
    console.log("Navigating to upgrade page");
  };

  const signUp = () => {
    console.log("Sign-up clicked");
  };

  const loginSwitch = () => {
    console.log("Switch to login page");
  };

  // const loginPress = () => {
  //   console.log("Login clicked");
  // };

  const signSwitch = () => {
    console.log("Switch to sign-up page");
  };
  return (
    <div>
      <div id="left-bar">
        <p className="text1" id="userName-Text">{userName}</p>
        <p className="text1" id="money">Money: ${money.toFixed(2)}</p>
        <p className="text1" id="level">Level: {level}</p>
        <div id="mine" onClick={minePage}><p id="page-select">Mine</p></div>
        <div id="shop" onClick={shopPage}><p id="page-select">Shop</p></div>
        <div id="inventory" onClick={inventoryPage}><p id="page-select">Inventory</p></div>
        <div id="bet" onClick={bettingPage}><p id="page-select">Betting</p></div>
        <div id="upgrade" onClick={upgradePage}><p id="page-select">Upgrade</p></div>
      </div>

      {/* Sign-Up */}
      <div id="background-sign">
        <div id="login-title-center">
          <p id="login-title">Sign-Up</p>
        </div>
        <div id="log-box">
          <div id="username-text-container">
            <h1 id="username-text">Username:</h1>
          </div>
          <div contentEditable="true" id="username-input-signup"></div>

          <div id="password-text-container">
            <h1 id="password-text">Password:</h1>
          </div>
          <div contentEditable="true" id="password-input-signup"></div>
          <div onClick={signUp} id="login-finish-background"><p id="sign-finish">Sign-Up</p></div>
          <div onClick={loginSwitch} id="switch-to-login-background"><p id="no-account">Already Have An Account? Log In Here</p></div>
        </div>
      </div>

      {/* Login */}
      <div id="background-log">
        <div id="login-title-center">
          <p id="login-title">Login</p>
        </div>
        <div id="log-box">
          <div id="username-text-container">
            <h1 id="username-text">Username:</h1>
          </div>
          <div contentEditable="true" id="username-input-login"></div>

          <div id="password-text-container">
            <h1 id="password-text">Password:</h1>
          </div>
          <div contentEditable="true" id="password-input-login"></div>
          {/* <div onClick={loginPress} id="login-finish-background"><p id="login-finish">Login</p></div> */}
          <div onClick={signSwitch} id="no-account-background"><p id="no-account">No Account? Create Account Here</p></div>
        </div>
        <div id="need-to-create">
          <p id="invalid">Username or Password Invalid</p>
        </div>
      </div>

      {/* Mine Page */}
      <div className="main-bar" id="mine-page">
        <div id="health-bar">
          <p id="block-health-text">Block Health: 10/10</p>
        </div>
        <img onClick={() => console.log("Block Clicked")} id="block-click" width="300px" src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYSv1HotHXG6ek8yWdDNl2yzhSlBrN60rmdwCyxxiLTqAArDffNQiwXiYm4ZlAI2bUllqaZ4lXlcKgat5XInIUE7BsukXA=s1600" alt="block" />
      </div>

      {/* Other pages, such as Shop, Inventory, etc., would follow similarly with onClick handlers */}

    </div>
  );
}

export default App;
