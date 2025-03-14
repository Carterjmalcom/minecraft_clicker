import { Link } from "react-router-dom"

const Betting = () => {
    return (
        <div className="" id="">
            <Link className="page-select" to="CoinFlip">
                <div id="coinFlip" onclick="coinFlipPage()"><p id="page-select">Coin Flip</p></div>
            </Link>
        </div>
    )
}
export default Betting
