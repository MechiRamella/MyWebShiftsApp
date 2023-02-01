//DESEABLE: DAR DE BAJA A OPERADORES

const User = require("../models/User");
const Branch = require("../models/Branch")
const { generateToken } = require("../config/token");
const bcrypt = require("bcrypt");

const usersManagement = {

    //Función para registrar un usuario.
registerUser: async function (req, res) {
    try {
      let usuario = await User.findOne({ email: req.body.email });
      if (usuario) {return res.status(400).send("Email already exists")};
  
      const user = req.body;
      const newUser = new User({
        fullName: user.fullName,
        password: user.password,
        email: user.email,
        phone: user.phone,
        dni: user.dni,
      });
  
      newUser.save().then((savedUser) => {
        res.status(201).send(savedUser);
      });
    } catch (err) {
      const errors = handleErrors(err);
      return res.status(400).json({ errors });
    }
  },

  //Función de logeo de usuarios


loginUser: async function (req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    bcrypt.compare(password, user.password, (err, data) => {
      if (err) throw err;
      if (data) {
        let payload = {
          email: user.email,
          id: user._id,
          fullName: user.fullName,
          phone: user.phone,
          role: user.role,
          idBranch: user.idBranch,
          dni: user.dni,
        }
        let token = generateToken(payload);
        res.cookie("token", token);
        return res.json({ token, user: payload });
      } else {
        return res.status(401).json({ msg: "Invalid credential" });
      }
    });
  } catch (error) {
    res.send(error);
  }

},


    //Función para mostrar TODOS los usuarios.
    allUsers: async function (req, res) {
        try{
          const users = await User.find()
          res.status(200).send(users)
        }
        catch(error){
          res.status(401).send(error)
        }
      },
      //Función para mostrar a TODOS los usuarios de un idBranch determinado.
      usersByBranch: async function(req,res){
        try{
          const users = await User.find({idBranch: req.params.id})
          res.status(200).send(users)
        }
        catch(error){
          res.status(401).send(error)
        }
      },


      //Función para mostrar TODOS los operadores
      allOperators: async function(req,res){
        try{
          const users = await User.find({role: "operator"})
          res.status(200).send(users)
        }
        catch(error)  {
          res.send(error)
        }
      },
      
      //Función para traer un usuario por su ID.
      catchUserById: async function(req,res){
        try{
          const users = await User.findOne({_id: req.params.id})

          res.status(200).send(users)
        }
        catch(error){
          res.status(500).send(error)
        }
      },


      //Función para buscar usuarios. [Nombre, email, phone, dni]
      searchUser: async function (req, res) {
        const user = await User.find();
        let filterUsers = [];
      
        user.forEach((users) => {
          if (users.fullName.toLowerCase().includes(req.params.search.toLowerCase()))
            filterUsers.push(users);
          else if (
            users.dni.toLowerCase().includes(req.params.search.toLowerCase())
          )
            filterUsers.push(users);
            else if(
              users.email.toLowerCase().includes(req.params.search.toLowerCase())
            )
            filterUsers.push(users);
            else if(
              users.phone.toLowerCase().includes(req.params.search.toLowerCase())
            )
            filterUsers.push(users)
        });
      
        res.send(filterUsers);
      },
      //Traer información de usuario logeado
      loggedUser: async function (req,res){
        let users = await User.findOne({ email: req.user.email })
        res.send(users)
      },

      //Función para deslogearse
      logout: async function (req, res) {
        res.clearCookie("token");
        res.sendStatus(200);
      },
      
      //Setear privilegios de administrador
      changeAdmin: async function (req,res){
        try{
          const user = await User.update({
            _id: req.params.id
           },
           {
           role: "administrator"
           })
          res.send(200).status(user)
        }

        catch(error){
          res.status(401).send(error)
        }
      },
            //Setear privilegios de operator
            changeOperator: async function (req,res){
              try{
                const user = await User.update({
                  _id: req.params.id
                 },
                 {
                 role: "operator"
                 })
                res.send(200).status(user)
              }
      
              catch(error){
                res.status(401).send(error)
              }
            },
      //Un administrador crea el perfil de un operador.
      createOperator: async function (req,res){
        
        const user = await User.findOne({id: req.user.id})

        if(user.role === "administrator"){
      const newOperator = req.body;
      const newOp = new User({
        fullName: req.body.fullname,
        password: req.body.password,
        dni: req.body.dni,
        role: "operator",
        idBranch: req.body.idBranch
      });
        }
      },
      //Función para recuperar contraseña olvidada
      changePassword: async function (req,res){
        
        const userFound = await User.findOne({email: req.body.email})
        userFound.validatePassword(req.body.oldPassword).then((isValid) => {
          if(!isValid) return res.status(401).send("Invalid credentials")

          console.log(userFound.password)

          try{
            let newHash = bcrypt.hashSync(req.body.newPassword, 10)
            const user = User.update({
               email: userFound.email
              },
              {
              password: newHash
              })
              .then((savedUser) => {
                res.status(201).send(savedUser);
              })
              .catch((error) => {
                res.status(500).send(error)
              })
    
          }
          catch(err){
            res.status(500).send(err)
          }
        
        })

        

        
      },
      //Actualizar perfil de un usuario
      updateLogedUser: async function(req,res){
        try{
          let newHash = bcrypt.hashSync(req.body.password, 10)

          const user = await User.update({_id: req.user.id},
            {
              email: req.body.email,
              phone: req.body.phone,
              password: newHash
            })
            res.status(200).send(`Updated!`)
        }
        catch(error){
          res.status(404).send("Email ya existente")
        }


      },
      //Borrar un usuario
      deleteUser: async function (req,res){
        const user = await User.deleteOne({_id: req.params.id})

        .then((userDeleted) => {
          res.status(200).send(userDeleted)
        })
        .catch((error) => {
            res.status(500).send(error)
        })
      }
}

module.exports = usersManagement;