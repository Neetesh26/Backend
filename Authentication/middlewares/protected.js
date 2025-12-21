const RoleBaseHandler = (...isRoll)=>{
    return (req,res,next)=>{
        console.log("req.user is here : ",req.user);
        
        if(!isRoll.includes(req.user.role)){
            res.status(404).json({
                message:'user not found & unauthorised user',
                imp:`sorry your role is ->  ${req.user.role}. you can't access this route..`
            })
        }
        next()
    }
}

module.exports = RoleBaseHandler