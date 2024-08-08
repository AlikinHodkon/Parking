import { useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "../styles/login.css"
import axios from "axios";
import { useDispatch } from "react-redux";
import { signIn } from "../reducers/authReducers";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick(){
    axios.post("http://localhost:5000/api/login", {"login": login, "password": password}).then((response) => {
      dispatch(signIn({"id": response.data[0].id, "login": response.data[0].login, "email": response.data[0].email, "isActivated": response.data[0].isactivated, "carNumber": response.data[0].carnumber}));
    })
  }

  return (
    <div>
        <header>
            <Navbar />
        </header>
        <div className="backgroundForm">
            <form>
                <h4>Login</h4>
                <p>Login</p>
                <input name="Login" onChange={(e) => setLogin(e.target.value)} type="text" placeholder="Login" />
                <p>Password</p>
                <input name="password" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                <a className="mr-auto ml-9 mt-2" href="/registration">Don&apos;t have account?</a>
                <input type="submit" onClick={(e) => {e.preventDefault(); handleClick(); navigate("/profile")}} value="Submit" />
            </form>
        </div>
        <Footer />
    </div>
  )
}
