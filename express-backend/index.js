const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4 : uuid } = require("uuid");
const sql = require('mssql/msnodesqlv8');

const app = express();

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
    next();
  });

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


app.get("/api/poll/:id", async(req, res) => {
  const pollId = req.params.id;
  
  try {
    const result = await runQuery(`
      SELECT title FROM Polls WHERE id = ${pollId}
    `);
    
    const title = result[0].title;
    const options = await runQuery(`
      SELECT id, name, votes FROM Votes WHERE poll_id = ${pollId}
    `);
    
    const poll= {
      title: title,
      id:pollId,
      options: options.map(option => ({value: option.name, votes: option.votes, id: option.id}))
      
    };
    
    return res.status(200).json(poll);
  } catch (err) {
    return res.status(500).json({error: err.message});
  }
});

app.post("/api/new-poll", async (req, res) => {
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
        
        return res.status(201).json({ message: 'Poll added successfully', pollId: pollId });
      } catch (err) {
        return res.status(500).json({ error: err.message });
      }

});

app.put("/api/poll/:id/vote", async (req, res) => {
  const optionId = req.params.id;

  try {
    await runQuery(`
      UPDATE Votes SET votes = votes + 1
      WHERE id = ${optionId}
    `);

    return res.status(200).json({ message: 'Vote counted' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});



app.listen(3000, ()=> console.log("Api Server is running..."));