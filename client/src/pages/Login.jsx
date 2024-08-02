import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "../styles/login.css"

export default function Login() {
  return (
    <div>
        <header>
            <Navbar />
        </header>
        <div className="backgroundForm">
            <form>
                <h4>Registration</h4>
                <p>Login</p>
                <input name="login" type="text" placeholder="Login" />
                <p>Password</p>
                <input name="password" type="password" placeholder="Password" />
                <input type="submit" value="Submit" />
            </form>
        </div>
        <Footer />
    </div>
  )
}
