const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const PORT = process.env.port || 8000;
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const saltRounds = 10;
const expressSession = require("express-session");
const { request } = require("express");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "ssy2407!",
  database: "simpleboard",
});

app.use(cors());
app.use(cookieParser());
app.use(
  expressSession({
    secret: "my key",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.post("/api/register", (req, res, next) => {
  const param = [req.body.name, req.body.email, req.body.password];
  bcrypt.hash(param[2], saltRounds, (error, hash) => {
    param[2] = hash;
    const sqlQuery = "INSERT INTO member (name,email,password) VALUES (?,?,?)";
    db.query(sqlQuery, param, (err, result) => {
      res.send("register");
    });
  });
});

app.post("/api/login", (req, res) => {
  const param = [req.body.email, req.body.password];
  db.query("SELECT * FROM member WHERE email=?", param[0], (err, row) => {
    if (err) console.log(err);
    if (row.length > 0) {
      bcrypt.compare(param[1], row[0].password, (err, result) => {
        if (result) {
          req.session.login = true;
          req.session.email = param[0];
          req.session.password = param[1];
          res.redirect("/");
          res.end();
        } else {
        }
      });
    } else {
    }
  });
});

app.get("/api/get", (req, res) => {
  const sqlQuery = "SELECT * FROM simpleboard;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const sqlQuery = "INSERT INTO simpleboard (title,content) VALUES (?,?)";
  db.query(sqlQuery, [title, content], (err, result) => {
    res.send("success!");
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
