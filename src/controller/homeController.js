import connection from "../configs/connectDB";

let getHomepage = (req, res) => {
    //logic code
    //ket noi database lay danh sach nguoi dung
    let data = [];
    // simple query
    connection.query(
        'SELECT * FROM `users`',
        function (err, results, fields) {
            //console.log('>>> check mysql');
            //console.log(results); // results contains rows returned by server
            //console.log(fields); // fields contains extra meta data about results, if available
            results.map((row) => {
                data.push({
                    id: row.id,
                    firstName: row.firstName,
                    lastName: row.lastName,
                    email: row.email,
                    address: row.address
                })
            });
            //console.log('>>> check data: ', typeof (data), JSON.stringify(data));
            //return res.render('index.ejs', { dataUser: JSON.stringify(data) });
            return res.render('index.ejs', { dataUser: data });
        }
    );
}

module.exports = {
    getHomepage
}