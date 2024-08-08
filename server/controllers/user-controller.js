const db = require('../db');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

class UserController{
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

    async login(req, res){
        try {
            const {login, password} = req.body;
            const userData = await db.query(`SELECT * FROM client WHERE login = $1`, [login]);
            if (userData.rows[0].login === login && bcrypt.compare(password, userData.rows[0].password)){
                res.json(userData.rows);
            }
        } catch (error) {
            
        }
    }

    async logout(req, res){
        try {
            localStorage.removeItem('login');
        } catch (error) {
            
        }
    }
}

module.exports = new UserController();