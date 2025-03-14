import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Mine from './pages/Mine';
import Shop from './pages/Shop';
import Upgrade from './pages/Upgrade';
import Inventory from './pages/Inventory';
import Betting from './pages/Betting';
import CoinFlip from './pages/CoinFlip';

function App() {
    // Image URLs
    const inkSac =
    "https://static.wixstatic.com/media/34c645_4e40fedfa46545f395540b0fa425cf65.png/v1/fill/w_1053,h_592,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/34c645_4e40fedfa46545f395540b0fa425cf65.png";
  const egg =
    "https://static.wixstatic.com/media/34c645_7b78b320216b42c4abdb951923ed3f09.png/v1/fill/w_1053,h_592,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/34c645_7b78b320216b42c4abdb951923ed3f09.png";
  const coal =
    "https://static.wixstatic.com/media/34c645_2d3a49e19b71460b8dccf92d0a1a3909.png/v1/fill/w_1053,h_592,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/34c645_2d3a49e19b71460b8dccf92d0a1a3909.png";
  const string =
    "https://static.wixstatic.com/media/34c645_4530ee20083249b7895163cddf5db9a6.png/v1/fill/w_1053,h_592,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/34c645_4530ee20083249b7895163cddf5db9a6.png";
  const stick =
    "https://static.wixstatic.com/media/34c645_07c8164d34f9498a9da7f1480ec74388.png/v1/fill/w_1053,h_592,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/34c645_07c8164d34f9498a9da7f1480ec74388.png";
  const seeds =
    "https://static.wixstatic.com/media/34c645_9e64dca8f189408a9f817eb4a39c7586.png/v1/fill/w_1053,h_592,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/34c645_9e64dca8f189408a9f817eb4a39c7586.png";
  const rottenFlesh =
    "https://static.wixstatic.com/media/34c645_7a0ca5fbe8c8498b979581d6cfa8843a.png/v1/fill/w_1053,h_592,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/34c645_7a0ca5fbe8c8498b979581d6cfa8843a.png";
  const rawPorkchop =
    "https://static.wixstatic.com/media/34c645_0a3ee643ed5d46af8344b7730b14590e.png/v1/fill/w_1053,h_592,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/34c645_0a3ee643ed5d46af8344b7730b14590e.png";

  // Array of items (image URLs)
  const commonItems = [
    inkSac,
    egg,
    coal,
    string,
    stick,
    seeds,
    rottenFlesh,
    rawPorkchop,
  ];

  // Uncommon
let leather =
"https://static.wixstatic.com/media/34c645_dea077efe19843b6a81d117dbd504f59.png/v1/fill/w_540,h_280,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/34c645_dea077efe19843b6a81d117dbd504f59.png";
let carrot =
"https://static.wixstatic.com/media/34c645_3483c33d9c1040d0a955abd6f96551dd.png/v1/fill/w_963,h_542,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/34c645_3483c33d9c1040d0a955abd6f96551dd.png";
let chainHelmet =
"https://static.wixstatic.com/media/34c645_85e59abd212046708e2b520a9d252228.png/v1/fill/w_705,h_428,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/34c645_85e59abd212046708e2b520a9d252228.png";
let boneMeal =
"https://static.wixstatic.com/media/34c645_5e3825974ef94abfa2911b8e5250d469.png/v1/fill/w_1053,h_592,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/34c645_5e3825974ef94abfa2911b8e5250d469.png";
let netherWart =
"https://static.wixstatic.com/media/34c645_c57198f24418422fb1712f8896e8ca60.png/v1/fill/w_1053,h_592,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/34c645_c57198f24418422fb1712f8896e8ca60.png";
let steak =
"https://static.wixstatic.com/media/34c645_d899adcb68274af7a2a1457fa0b3920c.png/v1/fill/w_1053,h_592,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/34c645_d899adcb68274af7a2a1457fa0b3920c.png";

const uncommonItems = [
steak,
netherWart,
boneMeal,
chainHelmet,
carrot,
leather,
];

// Rare
let slimeBall =
"https://static.wixstatic.com/media/34c645_76c61ebe1c994480b663325af243551c.png/v1/fill/w_705,h_435,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/34c645_76c61ebe1c994480b663325af243551c.png";
let mineCart =
"https://static.wixstatic.com/media/34c645_bed31849fb7346a98b48e731adecbb30.png/v1/fill/w_705,h_435,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/34c645_bed31849fb7346a98b48e731adecbb30.png";
let glisteringMelon =
"https://static.wixstatic.com/media/34c645_f49e99f77bae4e9e98b7c989f3b88522.png/v1/fill/w_705,h_435,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/34c645_f49e99f77bae4e9e98b7c989f3b88522.png";
let shears =
"https://static.wixstatic.com/media/34c645_ba0dc070b0714626a9d9bf1bb375d0d4.png/v1/fill/w_705,h_435,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/34c645_ba0dc070b0714626a9d9bf1bb375d0d4.png";
let blazeRod =
"https://static.wixstatic.com/media/34c645_db6c08963eb147af82764d7158d15a32.png/v1/fill/w_1053,h_592,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/34c645_db6c08963eb147af82764d7158d15a32.png";
let fishingRod =
"https://static.wixstatic.com/media/34c645_75e6f6cbb5c44ec591fe17ddeeeed1b0.png/v1/fill/w_705,h_435,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/34c645_75e6f6cbb5c44ec591fe17ddeeeed1b0.png";

const rareItems = [
fishingRod,
blazeRod,
shears,
glisteringMelon,
mineCart,
slimeBall,
];

// Epic
let ironSword =
"https://static.wixstatic.com/media/34c645_337670d8fd814968b8261cefd2d77d29.png/v1/fill/w_705,h_435,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/34c645_337670d8fd814968b8261cefd2d77d29.png";
let lapis =
"https://static.wixstatic.com/media/34c645_2a58a9bf86464325b20a8dd4989e0c0b.png/v1/fill/w_1053,h_592,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/34c645_2a58a9bf86464325b20a8dd4989e0c0b.png";
let emerald =
"https://static.wixstatic.com/media/34c645_4df7971b7a834d50a90000151c520019.png/v1/fill/w_1053,h_592,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/34c645_4df7971b7a834d50a90000151c520019.png";
let goldenApple =
"https://static.wixstatic.com/media/34c645_20b0634cffcc4d6cb3cddd97a4f16237.png/v1/fill/w_705,h_428,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/34c645_20b0634cffcc4d6cb3cddd97a4f16237.png";
let cake =
"https://static.wixstatic.com/media/34c645_e0308028ef0043f2a9b04ab5abf154a8.png/v1/fill/w_705,h_428,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/34c645_e0308028ef0043f2a9b04ab5abf154a8.png";
let witherSkull =
"https://static.wixstatic.com/media/34c645_290614d50659444eb97f5b8530688a3b.png/v1/fill/w_705,h_435,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/34c645_290614d50659444eb97f5b8530688a3b.png";

const epicItems = [ironSword, lapis, emerald, goldenApple, cake, witherSkull];

// Legendary
let diamond =
"https://static.wixstatic.com/media/34c645_48c02661c56b43d8882334125cf9b0a9.png/v1/fill/w_1053,h_592,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/34c645_48c02661c56b43d8882334125cf9b0a9.png";
let diamondSword =
"https://static.wixstatic.com/media/34c645_9f133bc04f55446ea3bcd8cf451aa82b.png/v1/fill/w_1053,h_592,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/34c645_9f133bc04f55446ea3bcd8cf451aa82b.png";
let diamondPickaxe =
"https://static.wixstatic.com/media/34c645_d0cb53818e8b4bc7b3907cb5495af71c.png/v1/fill/w_705,h_435,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/34c645_d0cb53818e8b4bc7b3907cb5495af71c.png";
let diamondBoots =
"https://static.wixstatic.com/media/34c645_d8e567b9ae8645fa98e0775d45493df3.png/v1/fill/w_705,h_428,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/34c645_d8e567b9ae8645fa98e0775d45493df3.png";
let diamondChestplate =
"https://static.wixstatic.com/media/34c645_7297d3d7aa3b4dd9a0c38486c4ad6f1b.png/v1/fill/w_705,h_428,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/34c645_7297d3d7aa3b4dd9a0c38486c4ad6f1b.png";
let diamondHelmet =
"https://static.wixstatic.com/media/34c645_be9909c974644bafb366f14bdedcd138.png/v1/fill/w_705,h_428,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/34c645_be9909c974644bafb366f14bdedcd138.png";
let diamondLeggings =
"https://static.wixstatic.com/media/34c645_bbb0e616cd71452ebeb372f237843886.png/v1/fill/w_705,h_428,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/34c645_bbb0e616cd71452ebeb372f237843886.png";
let netherStar =
"https://static.wixstatic.com/media/34c645_a0eb55685c644dd1a899070d7d0c9396.png/v1/fill/w_705,h_435,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/34c645_a0eb55685c644dd1a899070d7d0c9396.png";

const legendaryItems = [
diamond,
diamondSword,
diamondPickaxe,
diamondBoots,
diamondLeggings,
diamondChestplate,
diamondHelmet,
netherStar,
];

  let [itemsArr,setItemsArr] = useState([])
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  let [money, setMoney] = useState(0);
  let [level, setLevel] = useState(1);
  let [health, setHealth] = useState(10)
  let [blocksBroken, setBlocksBroken] = useState(0)
  let [isVisible, setIsVisible] = useState(true);
  let [redirect, setRedirect] = useState(false);
  let [ingame, setIngame] = useState(false)
  let [result, setResult] = useState(null)
  let [random, setRandom] = useState(Math.random())
  let [newItem, setNewItem] = useState(null)

  const toggleVisibility = (ingame) => {
    setIsVisible(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    console.log('Username:', username);
    console.log('Password:', password);
    console.log("Signed Up");
    setIngame(true)
    console.log(ingame)
    toggleVisibility(ingame);
    setRedirect(true); // Set the redirect state to true
  };

  const blockPress = () => {
    setMoney(money + 1)
    setHealth(health - 1)
    if (health <= 1){
      setHealth(10)
      setMoney(money + 11)
      setBlocksBroken(blocksBroken + 1)
      if(blocksBroken > 4){
        setLevel(level+1)
        setBlocksBroken(0)
      }
    }

   }


   useEffect(() => {
    if(newItem){
    setItemsArr(prevItemsArr => [...prevItemsArr, newItem]); // Add the newItem to the itemsArr
    }
  }, [newItem]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/users");
      const data = await response.json();
      console.log(data)
    };
  
    fetchData();
  }, []);

  useEffect(() => {
    console.log(itemsArr)
  }, [itemsArr]);

   function openCase() {
    if (money >= 20) {
      setRandom(Math.random());
      console.log(random)
      if (random < 0.56) {
        setResult("Common");
        setNewItem(commonItems[Math.floor(Math.random() * commonItems.length)]);
      }
      else if (random < 0.76) {
        setResult("Uncommon");
        setNewItem(uncommonItems[Math.floor(Math.random() * uncommonItems.length)]);
      }
      else if (random < 0.87) {
        setResult("Rare");
        setNewItem(rareItems[Math.floor(Math.random() * rareItems.length)]);
      }
      else if (random < 0.96) {
        setResult("Epic");
        setNewItem(epicItems[Math.floor(Math.random() * epicItems.length)]);
      }
      else {
        setResult("Legendary");
        setNewItem(legendaryItems[Math.floor(Math.random() * legendaryItems.length)]);
      }
    }
  }

  function checkItemRarity(item) {
    if (commonItems.includes(item)) {
      return("c")
    }

    if (uncommonItems.includes(item)) {
      return ("u")
    }

    if (rareItems.includes(item)) {
      return ("r")
    }

    if (epicItems.includes(item)) {
      return ("e")
    }

    if (legendaryItems.includes(item)) {
      return ("l")
    }
   }
function claim() {
  setNewItem(null)
  setMoney(money - 20);
}
  useEffect(() => {
    if (redirect) {
      setTimeout(() => {
        setRedirect(false);
      }, 500);
    }
  }, [redirect]);

  return (
    <div className="App">
      <Router>
        {/* Left side bar that toggles visibility */}
        {isVisible && (
          <div id="left-bar">
            <p className="text1" id="userName-Text">{username }</p>
            <p className="text1" id="money">Money: ${money }.00</p>
            <p className="text1" id="level" >Level: {level}</p>
            <p className="text1" id="level" >Broken: {blocksBroken}</p>
            <Link className="page-select" id="mine" to="/Mine">Mine</Link>
            <Link className="page-select" id="inventory" to="/Inventory">Inventory</Link>
            <Link className="page-select" id="upgrade" to="/Upgrade">Upgrade</Link>
            <Link className="page-select" id="shop" to="/Shop">Shop</Link>
            <Link className="page-select" id="bet" to="/Betting">Betting</Link>
          </div>
        )}

        {/* Redirect logic */}
        {redirect && <Navigate to="/Mine" replace />}

        {/* Routes definition */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp
            handleSubmit={handleSubmit}
            setUsername={setUsername}
            setPassword={setPassword}
            password={password}
            username={username }
          />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Mine" element={<Mine
          blockPress={blockPress}
          health={health}
          setHealth={setHealth}/>} />
          <Route path="/Inventory" element={<Inventory
            itemsArr={itemsArr}
            setItemsArr={setItemsArr}
            checkItemRarity={checkItemRarity}
            money={money}
            setMoney={setMoney}
          />} />
          <Route path="/Upgrade" element={<Upgrade />} />
          <Route path="/Shop" element={<Shop
          openCase={openCase}
          result={result}
          newItem={newItem}
          claim={claim}
           />} />
          <Route path="/Betting" element={<Betting />} />
          <Route path="/Betting/CoinFlip" element={<CoinFlip />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
