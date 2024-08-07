import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { selectAuth } from "../reducers/authReducers";

export default function Profile() {
  const auth = useSelector(selectAuth);
  return (
    <div className="w-full">
        <Navbar />
        <div className="flex flex-row w-full pt-5 pb-5 bg-slate-400">
          <div className="shadow bg-white w-1/4 ml-5 rounded-xl">
            <div className="">
              <img src={"src/images/R1.jpg"} className="rounded-xl" />
            </div>
            <div className="flex flex-col justify-between h-[45vh] p-5 text-[24px]">
              <h1>Login: {auth.login}</h1>
              <h1>Email: {auth.email}</h1>
              <h1>Car number: {auth.carNumber}</h1>
              <h1>Activated: {auth.isActivated}</h1>
            </div>
          </div>
          <div className="flex flex-col w-3/4 ml-5 mr-5">
            <div className="bg-white w-full p-5 flex flex-col justify-between h-[40vh] rounded-xl text-[24px]">
              <h1>Active booking place:</h1>
              <p>From:</p>
              <p>To:</p>
            </div>
            <div className="bg-white w-full mt-5 p-5 flex flex-col justify-between h-[40vh] rounded-xl text-[24px]">
              <h1>Bills:</h1>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}
