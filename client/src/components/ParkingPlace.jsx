import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ParkingPlace({data, fetchParking}) {
  const [date, setDate] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const {t} = useTranslation();
  const tz = new Date().getHours() - new Date().getUTCHours();
  function convert(n) {
    n = ""+n;
    if (n[0] === "-"){
      if (n.substring(1).length === 1) n = '-0'+n.substring(1);
    }
    if (n.length === 1) n = '0' + n;
    return n
  }
  let timeFrom = (""+data.timefrom).substring(11, 13);
  timeFrom = parseInt(timeFrom)+tz;
  let timeTo = (""+data.timeto).substring(11, 13);
  timeTo = parseInt(timeTo)+tz;
  async function handleClick(id) {
    axios.post('http://localhost:5000/api/booking', {"id": id, "client_id": localStorage.getItem("id"), "date": date, "from": from, "to": to, "tz": (tz > 0 ? "+"+convert(tz) : convert(tz))}).then(() => fetchParking());
  }

  return (
    <div className={`border-pink-500 border-[3px] flex flex-col text-[24px] justify-center items-center bg-pink-300 min-w-[20vw] min-h-[50vh] mt-5`}>
        <p>{data.id}</p>
        <p>{data.price} $/h</p>
        <input type="date" disabled={data.disabled} onChange={(e) => setDate(e.target.value)} name="date" value={(""+data.timefrom).substring(0,10)} className={`w-3/4 border-pink-500 border-[3px] rounded-xl mt-2 ${data.disabled ? "" : "hidden"}`} />
        <input type="date" disabled={data.disabled} onChange={(e) => setDate(e.target.value)} name="date" className={`w-3/4 border-pink-500 border-[3px] rounded-xl mt-2 ${data.disabled ? "hidden" : ""}`} />
        <div className="mt-2 flex justify-between w-3/4"></div>
        <div className="mt-2 flex justify-between w-3/4">
          <label>{t("parking.from")}</label>
          <input type="time" disabled={data.disabled} onChange={(e) => setFrom(e.target.value)} name="from" value={timeFrom+(""+data.timefrom).substring(13,19)} className={`w-3/4 ml-auto border-pink-500 border-[3px] rounded-xl ${data.disabled ? "" : "hidden"}`} />
          <input type="time" disabled={data.disabled} onChange={(e) => setFrom(e.target.value)} name="from" className={`w-3/4 ml-auto border-pink-500 border-[3px] rounded-xl ${data.disabled ? "hidden" : ""}`} />
        </div>
        <div className="mt-2 flex w-3/4">
          <label>{t("parking.to")}</label>
          <input type="time" disabled={data.disabled} onChange={(e) => setTo(e.target.value)} name="to" value={timeTo+(""+data.timeto).substring(13,19)} className={`w-3/4 ml-auto border-pink-500 border-[3px] rounded-xl ${data.disabled ? "" : "hidden"}`} />
          <input type="time" disabled={data.disabled} onChange={(e) => setTo(e.target.value)} name="to" className={`w-3/4 ml-auto border-pink-500 border-[3px] rounded-xl ${data.disabled ? "hidden" : ""}`} />
        </div>
        <button disabled={data.disabled} onClick={() => handleClick(data.id)} className={`border-[3px] w-3/4 border-pink-500 ${data.disabled ? "bg-red-500" : "bg-green-500"} rounded-xl mt-2 p-1`}>{data.disabled ? t("parking.statusBooked") : t("parking.statusFree")}</button>
    </div>
  )
}
