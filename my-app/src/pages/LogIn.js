import { Link } from "react-router-dom"

const LogIn = () => {
    return (
        <div id="">
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
                <div id="login-finish-background"><p id="login-finish">Login</p></div>
                <Link to="/SignUp">
                    <div id="no-account-background"><p id="no-account">No Account? Create Account Here</p></div>
                </Link>
            </div>
            <div id="need-to-create">
                <p id="invalid">Username or Password Invalid</p>
            </div>
        </div>
    )
}
export default LogIn
