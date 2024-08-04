const db = require('../db');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

class parkingController{
    async getParking(req, res){
        try {
            const parkingData = await db.query(`SELECT * FROM parking ORDER BY id`);
            (parkingData.rows).forEach(element => {
                if (element.timeto === undefined) return;
                if (new Date(element.timeto).getTime() < Date.now()){
                    db.query(`UPDATE parking SET disabled = false, timefrom = NULL, timeto = NULL WHERE id = $1`, [element.id]);
                }
            });
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

    async registration(req, res){
        try {
            const {login, password, email, carNumber} = req.body;
            const hashpassword = await bcrypt.hash(password, 5);
            const activationLink = uuid.v4();
            await db.query(`INSERT INTO client (login, password, email, activationlink, carnumber) VALUES ($1, $2, $3, $4, $5)`, [login, hashpassword, email, activationLink, carNumber]);
            res.json({login, email, carNumber});
        } catch (error) {
            
        }
    }
}

module.exports = new parkingController();