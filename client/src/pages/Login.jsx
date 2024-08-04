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
                <h4>Login</h4>
                <p>Login</p>
                <input name="Login" type="text" placeholder="Login" />
                <p>Password</p>
                <input name="password" type="password" placeholder="Password" />
                <a className="mr-auto ml-9 mt-2" href="/registration">Don&apos;t have account?</a>
                <input type="submit" value="Submit" />
            </form>
        </div>
        <Footer />
    </div>
  )
}
