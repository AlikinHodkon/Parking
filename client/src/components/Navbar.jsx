import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { logout } from "../reducers/authReducers";
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {t, i18n} = useTranslation();
  const lngs = {
    en: { nativeName: 'English'},
    ru: { nativeName: 'Русский'}
  }
  return (
    <div>
        <nav>
            <ul>
                <li><a href="/">Your<span className="pinkText">Place</span></a></li>
                <li>
                  <select className="bg-transparent outline-none text-white" onChange={(e) => i18n.changeLanguage(e.target.value)}>
                  {Object.keys(lngs).map((lng) => (
                    <option key={lng} className={`${i18n.resolvedLanguage === lng ? 'font-bold' : 'font-normal'} text-black`} value={lng}>
                      {lngs[lng].nativeName}
                    </option>
                  ))}
                  </select>
                </li>
                {/* <li><a>Benefits</a></li> */}
                <li><a href="/parking">{t("navbar.parking")}</a></li>
                {/* <li><a>About us</a></li> */}
                <li><a href={localStorage.getItem("login") ? "/profile" : "/login"}>{localStorage.getItem("login") ? localStorage.getItem("login") : t("navbar.login")}</a></li>
                <li className={`${localStorage.getItem("login") ? "" : "hidden"}`}><button id="logout" className="" onClick={() => {dispatch(logout()); navigate("/")}} /></li>
                </ul>
        </nav>
    </div>
  )
}
