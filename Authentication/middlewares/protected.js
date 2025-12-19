const RoleBaseHandler = (...isRoll)=>{
    return (req,res,next)=>{
        console.log("req.user is here : ",req.user);
        
        if(!isRoll.includes(req.user.role)){
            res.status(404).json({
                message:'user not found & unauthorised user'
            })
        }
        next()
    }
}

module.exports = RoleBaseHandler