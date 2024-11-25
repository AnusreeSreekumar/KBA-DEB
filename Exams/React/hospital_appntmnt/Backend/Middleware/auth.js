import jwt from 'jsonwebtoken';

const secretKey = 'hello';

const authenticate = (req, res, next) => {

    const tokencooky = req.headers.cookie;
    console.log('token in cookie',tokencooky);
    
    const cookie = tokencooky.split(';')
    console.log('splitted cookie',cookie);
    
    for(let cooky of cookie){
        const[name, token] =  cooky.trim().split('=');
        if(name == 'authToken'){
             const tokenverifcn =  jwt.verify(token, secretKey)
             console.log('verifiedToken: ', tokenverifcn);
             
             req.UserName = tokenverifcn.UserName;
             req.UserRole = tokenverifcn.UserRole;

             console.log("Role in token",tokenverifcn.UserRole);
             console.log("Username in token", tokenverifcn.UserName);
             
             break;
        }
     }
     next();
 }
 
 export {authenticate}