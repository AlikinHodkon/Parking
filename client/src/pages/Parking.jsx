import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ParkingPlace from "../components/ParkingPlace";
import axios from 'axios'

export default function Parking() {
  const [parkingPlaces, setParkingPlaces] = useState([]);
  async function fetchParking(){
    axios.get('http://localhost:5000/api/parking').then((respond) => setParkingPlaces(respond.data))
  }
  useEffect(() => {
    fetchParking();
  }, []);
  return (
    <div>
      <Navbar />
      <h1 className="text-center text-[32px] font-semibold">Выберите место</h1>
      <div className="flex flex-wrap ml-5 mr-5 justify-between">
        {parkingPlaces.map((place) => <ParkingPlace data={place} fetchParking={fetchParking} key={place.id} />)}
      </div>
    </div>
  )
}
