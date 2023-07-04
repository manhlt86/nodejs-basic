import pool from "../configs/connectDB";

let getHomepage = async (req, res) => {
    //logic code
    // query database
    const [rows, fields] = await pool.execute('SELECT * FROM users');
    return res.render('index.ejs', { dataUser: rows, test: 'abc test' });
}

let getDetailPage = async (req, res) => {
    let id = req.params.id;
    let user = await pool.execute('select * from users where id = ?', [id]);
    return res.send(JSON.stringify(user[0]));
}
module.exports = {
    getHomepage, getDetailPage
}