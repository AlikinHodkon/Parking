const db = require('../db');

class parkingController{
    async getParking(req, res){
        try {
            const parkingData = await db.query(`SELECT * FROM parking ORDER BY id`);
            res.json(parkingData.rows);
        } catch (error) {
            
        }
    }

    async booking(req, res){
        try {
            const {id, date, from, to, tz} = req.body; 
            const timeFrom = date+" "+from+":00"+tz;
            const timeTo =date+" "+to+":00"+tz;
            await db.query(`UPDATE parking SET disabled = true, timefrom = $1, timeto = $2 WHERE id = $3`, [timeFrom, timeTo, id]);
            res.json(id);
        } catch (error) {
            
        }
    }
}

module.exports = new parkingController();