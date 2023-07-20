const jwt = require('jsonwebtoken');

const app_secret = "my_app_secret";
const user_name = "admin";
const password = "secret";

module.exports = function(req, res, next){
    if(req.url === 'login' && req.method === 'POST'){
        if(req.body.user_name === user_name && req.body.password === password){
            let token = jwt.sign({data: user_name, expiresIn: '1h'}, app_secret);
            res.json({success: true, token: token});
        }
        else{
            res.json({success: false});
        }
        res.end();
        return;
    }
    else{
        if(req.url.startsWith("/products") || req.url.startsWith("/categorories") && req.method != 'GET'){
            let token = req.headers['authorization'];
            if(token != null && token.startsWith('Bearer<')){
                token.substrin(7, token.length);
                try{
                    jwt.verify(token, app_secret);
                    next();
                    return;
                } catch(err){

                }
            }
            res.statusCode = 401;
            res.end();
            return;
        }
    }
    next();
}