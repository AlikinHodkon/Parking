import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { selectAuth } from "../reducers/authReducers";
import axios from "axios";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Profile() {
  const auth = useSelector(selectAuth);
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [bill_1, setBill_1] = useState();
  const [bill_2, setBill_2] = useState();
  const [bill_3, setBill_3] = useState();
  const {t} = useTranslation();
  async function getData() {
    axios.get(`http://localhost:5000/api/userParking/${auth.id}`).then((user) => {
      if (new Date(user.data[0].timefrom).getTime() !== 0){
        setFrom(new Date(user.data[0].timefrom).toLocaleString());
        setTo((new Date(user.data[0].timeto).toLocaleString()));
      }
    });
  }
  async function getBills() {
    axios.get(`http://localhost:5000/api/userBills/${auth.id}`).then((bills) => {
      setBill_1(bills.data[0]); 
      setBill_2(bills.data[1]);
      setBill_3(bills.data[2]);
    });
  }
  useEffect(() => {
    getData();
  });
  useEffect(() => {
    getBills();
  }, []);
  return (
    <div className="w-full">
        <Navbar />
        <div className="flex flex-row w-full pt-5 pb-5 bg-slate-400">
          <div className="shadow bg-white w-1/4 ml-5 rounded-xl">
            <div className="h-[50vh]">
              <img src={"src/images/avatar.jpg"} className="rounded-xl" />
            </div>
            <div className="flex flex-col justify-between h-[45vh] p-5 text-[24px]">
              <h1>{t("profile.login")}: {auth.login}</h1>
              <h1>{t("profile.email")}: {auth.email}</h1>
              <h1>{t("profile.carNumber")}: {auth.carNumber}</h1>
              <h1>{t("profile.isActivated")}: {auth.isActivated}</h1>
            </div>
          </div>
          <div className="flex flex-col w-3/4 ml-5 mr-5">
            <div className="bg-white w-full p-5 flex flex-col h-[47.5vh] rounded-xl text-[32px]">
              <h1 className="text-center text-[40px]">{t("profile.active")}</h1>
              <p className="mt-5">{t("profile.from")}: {from}</p>
              <p className="mt-20">{t("profile.to")}: {to}</p>
            </div>
            <div className="bg-white w-full mt-5 p-5 flex flex-col justify-between h-[47.5vh] rounded-xl text-[32px]">
              <h1 className="text-center text-[40px]">{t("profile.bills")}</h1>
              <div className={`flex justify-between ml-5 mr-5`}>
                <p>1</p>
                <p>{new Date(bill_1?.fromtime).toLocaleString()}</p>
                <p>{new Date(bill_1?.totime).toLocaleString()}</p>
                <p>{bill_1?.total} $</p>
              </div>
              <div className={`flex justify-between ml-5 mr-5`}>
                <p>2</p>
                <p>{new Date(bill_2?.fromtime).toLocaleString()}</p>
                <p>{new Date(bill_2?.totime).toLocaleString()}</p>
                <p>{bill_2?.total} $</p>
              </div>
              <div className={`flex justify-between mb-5 ml-5 mr-5`}>
                <p>3</p>
                <p>{new Date(bill_3?.fromtime).toLocaleString()}</p>
                <p>{new Date(bill_3?.totime).toLocaleString()}</p>
                <p>{bill_3?.total} $</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}
