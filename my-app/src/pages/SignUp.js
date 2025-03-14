import { Link } from "react-router-dom"

const SignUp = ({handleSubmit, setUsername, setPassword, password, username}) => {
    return (
        <div>
            <div id="login-title-center">
                <p id="login-title">Sign-Up</p>
            </div>
            <div id="log-box">
                <div id="username-text-container">
                    <h1 id="username-text">Username:</h1>
                </div>
                <input
                    id="username-input-signup"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                />

                <div id="password-text-container">
                    <h1 id="password-text">Password:</h1>
                </div>
                <input
                    id="password-input-signup"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                />

                <div onClick={handleSubmit} id="login-finish-background">
                    <p id="sign-finish">Sign-Up</p>
                </div>

                <Link to="/LogIn">
                    <div id="switch-to-login-background">
                        <p id="no-account">Already Have An Account? Log In Here</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default SignUp
