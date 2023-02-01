const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4 : uuid } = require("uuid");
const sql = require('mssql/msnodesqlv8');

const app = express();

app.use(express.json());

const config = {
    server: "(localdb)\\MSSQLLocalDB",
    database: "Poll",
    driver: 'msnodesqlv8',
    options: {
      trustedConnection: true,
    }
  };

async function runQuery(query) {
try {
    const pool = await sql.connect(config);
    const result = await pool.request().query(query);
    return result.recordset;
} catch (err) {
    console.error('SQL error:', err);
    return [];
}
}


app.get("/asd", (req, res) => {
    res.send("this is working");
});

app.post("/new-poll", async (req, res) => {
    const title = req.body.title;
    const options = req.body.options;

    if(!title || !options){
        return res.sendStatus(400);
    }
    try {      
        const result = await runQuery(`
          INSERT INTO Polls (title)
          VALUES ('${title}');
          SELECT SCOPE_IDENTITY() AS id;
        `);
        
        const pollId = result[0].id;
        
        for (const option of options) {
          await runQuery(`
            INSERT INTO Votes (poll_id, name, votes)
            VALUES (${pollId}, '${option.value}', 0);
          `);
        }
        
        return res.status(201).json({ message: 'Poll added successfully' });
      } catch (err) {
        return res.status(500).json({ error: err.message });
      }

});



app.listen(3000, ()=> console.log("Api Server is running..."));