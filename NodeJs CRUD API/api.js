const express = require('express');
const sql = require('mssql');
const dbConfig = require("./dbConfig");


const app = express();
app.use(express.json());

sql.connect(dbConfig,(err) => {
    if (err) {
        console.log("Veri tabanına bağlanırken bir hata oluştu" , err);
    }
    else{
        console.log("Veritabanı bağlantısı başarılı");
    }
})


app.get('/deneme',(req,res)=>{
    const request = new sql.Request();

    request.query('SELECT * FROM Products', (err, result) => {
        if (err) {
            console.log('Kayıtlar getirilirken bir hata oluştu:', err);
            res.status(500).send('Kayıtlar getirilirken bir hata oluştu.');
        } else {
            res.send(result.recordset);
        }
    });
});


app.listen(3000, () => {

});