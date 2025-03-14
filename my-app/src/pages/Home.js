import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <h1 className="home-title">Minecraft Clicker</h1>
            <Link className="page-select" id="mine" to="SignUp"> Sign Up </Link>
            <Link className="page-select" id="shop"to="LogIn"> Log In </Link>
        </div>
    )
}
export default Home
