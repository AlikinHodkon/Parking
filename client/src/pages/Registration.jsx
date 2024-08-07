import axios from "axios"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "../styles/login.css"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { registration } from "../reducers/authReducers"
import { useNavigate } from "react-router-dom"

export default function Registration() {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [car, setCar] = useState("");
    const [similar, setSimilar] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleClick(){
        axios.post("http://localhost:5000/api/registration", {"login": login, "password": password, "email": email, "carNumber": car}).then((response) => {
            dispatch(registration, {"login": response.data.login, "email": response.data.email, "isActivated": false, "carNumber": response.data.carnumber});
        });
    }

    return (
        <div>
            <header>
                <Navbar />
            </header>
            <div className="backgroundForm">
                <form className="min-h-[62vh]">
                    <h4>Registration</h4>
                    <p>Login</p>
                    <input name="login" onChange={(e) => setLogin(e.target.value)} type="text" placeholder="Login" />
                    <p>Password</p>
                    <input name="password" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    <p>Repeat password</p>
                    <input name="repeatpassword" onChange={(e) => {if (e.target.value === password) setSimilar(true);}} type="password" placeholder="Password" />
                    <p>Email</p>
                    <input name="email" onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
                    <p>Your car number</p>
                    <input name="car" onChange={(e) => setCar(e.target.value)} type="text" placeholder="Car number" />
                    <input onClick={(e) => {e.preventDefault(); if (similar) {handleClick(); navigate('/profile')}}} type="submit" value="Submit" />
                </form>
            </div>
            <Footer />
        </div>
    )
}
