export default function Navbar() {
  return (
    <div>
        <nav>
            <ul>
                <li><a href="/">Your<span className="pinkText">Place</span></a></li>
                <li><a href="/profile">Benefits</a></li>
                <li><a href="/parking">Parking</a></li>
                <li><a>About us</a></li>
                <li><a href={localStorage.getItem("login") ? "/profile" : "/login"}>{localStorage.getItem("login") ? localStorage.getItem("login") : "Login"}</a></li>
                </ul>
        </nav>
    </div>
  )
}
