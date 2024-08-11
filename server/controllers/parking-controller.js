const db = require('../db');

class parkingController{
    async getParking(req, res){
        try {
            const parkingData = await db.query(`SELECT * FROM parking ORDER BY id`);
            (parkingData.rows).forEach(element => {
                if (element.timeto === undefined) return;
                if (new Date(element.timeto).getTime() < Date.now()){
                    db.query(`UPDATE parking SET disabled = false, timefrom = NULL, timeto = NULL, client_id = null WHERE id = $1`, [element.id]);
                }
            });
            res.json(parkingData.rows);
        } catch (error) {
            
        }
    }

    async booking(req, res){
        try {
            const {id, client_id, timeFrom, timeTo} = req.body;
            if ((await db.query(`SELECT * FROM parking WHERE client_id = $1`, [client_id])).rowCount !== 0){
                return;
            }
            await db.query(`UPDATE parking SET disabled = true, timefrom = $1, timeto = $2, client_id = $3 WHERE id = $4`, [timeFrom, timeTo, client_id, id]);
            res.json(id);
        } catch (error) {
            
        }
    }

    async getUserDate(req, res){
        try {
            const {id} = req.params;
            const user = await db.query(`SELECT * from parking WHERE client_id = $1`, [id]);
            res.json(user.rows);
        } catch (error) {
            
        }
    }

    async getUserBills(req, res){
        try {
            const {id} = req.params;
            const user = await db.query(`SELECT * FROM bills where client_id = $1 ORDER BY totime DESC LIMIT 3`, [id]);
            res.json(user.rows);
        } catch (error) {
            
        }
    }

    async saveBillsData(req, res){
        try {
            const {client_id, total, timeFrom, timeTo} = req.body;
            if ((await db.query(`SELECT * FROM parking WHERE client_id = $1`, [client_id])).rowCount !== 0){
                res.json("booked");
            }
            if ((await db.query(`SELECT * FROM bills WHERE client_id = $1`, [client_id])).rowCount === 3){;
                const id = (await db.query(`SELECT id FROM bills WHERE client_id = $1 ORDER BY totime LIMIT 1`, [client_id])).rows[0].id;
                const saveData = await db.query(`UPDATE bills SET total = $1, fromtime = $2, totime = $3 WHERE id = $4`, [total, timeFrom, timeTo, id]);
                res.json(saveData);
            }
            const saveData = await db.query(`INSERT INTO bills (client_id, total, fromTime, totime) VALUES ($1,$2,$3,$4)`, [client_id, total, timeFrom, timeTo]);
            res.json(saveData);
        } catch (error) {
            
        }
    }
}

module.exports = new parkingController();