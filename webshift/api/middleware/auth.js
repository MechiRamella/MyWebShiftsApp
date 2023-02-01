const { validateToken} = require("../config/token");

const validateAuth = async (req, res, next) => {
  if (!req.headers.cookie) return res.sendStatus(401);
  const token = req.headers.cookie.split("token=")
  
  //const { user } = validateToken(token[1]);
  req.user = validateToken(token[1])
  console.log(req.user.id)
  if (!req.user) return res.sendStatus(401);

  next();
}

function validateAdmin(req, res, next) {
  if (req.user.role === "administrator") {
    next();
  } else {
    return res
      .status(401)
      .send("You need to be an Administrator to perform this task");
  }
}

function validateOperator (req,res,next){
  if(req.user.role === "operator") {
    next()
  }
  else{
    return res 
    .status(401)
    .send("You need to be an Operator to perform this task")
  }
}
module.exports = { validateAuth, validateAdmin, validateOperator};