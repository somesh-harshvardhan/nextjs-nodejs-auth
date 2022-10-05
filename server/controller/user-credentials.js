const jwt = require('jsonwebtoken');
const { statusText } = require('../constants');

exports.signin= function (req, res) {
    const { user_name, email, password } = req.body;
    const db = req.app.get('db');
    const user = db.findOne("email", email);
    if (!user) {
        res.status(200).json({ "message": "No login credentials found", status: statusText[0] })
    }
    if (user) {
        if (password === user.password) {
            const token = jwt.sign({
                user_name: user.user_name, email: user.email
            }, process.env.TOKEN_KEY, { expiresIn: '30d' })
            user.token = token;
            res.status(200).json(user);
        } else {
            res.status(200).json({ "message": "wrong password or username", status: statusText[3] });
        }

    }
}

exports.register = function(req,res){
    const { user_name, email, password } = req.body;
    const db = req.app.get('db');
    const user = db.findOne("email", email);
    if(user){
        return res.status(409).json({"message" : "User already exists",status : statusText[4]})
    }
    if(!user){
        db.createUser(user_name,email,password);
        const u = db.findOne("email", email);
        const token = jwt.sign(
            { user_name : u.user_name, email : u.email },
            process.env.TOKEN_KEY,
            {
              expiresIn: "30d",
            }
          );
          u.token = token;

          // return new user
          res.status(201).json(u);

    }
  }