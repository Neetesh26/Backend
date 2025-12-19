const jwt =require('jsonwebtoken')

const verifyToken = (req,res,next)=>{

    let token;
    let authHeaders =  req.headers.Authorization || req.headers.authorization
    if(authHeaders && authHeaders.startsWith("Bearer")){
        token = authHeaders.split(" ")[1]

        if (!token) {
            return res.status(401).json({msg :'no token , authorization denied'})
        }
        try {
            const decode = jwt.verify(token , process.env.JWT_SECRET)
            req.user = decode
            console.log(req.user);
            next()
        } catch (error) {
            res.status(400).json(({message : 'token is not valid'}))
        }
    }else{
        return res.status(401).json({msg :'no token , authorization denied'})
    }
}

module.exports = verifyToken