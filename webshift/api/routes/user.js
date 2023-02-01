const express = require("express");
const router = express.Router();

const { validateAuth, validateAdmin, validateOperator } = require("../middleware/auth");

const {
    registerUser,
    allUsers,
    loginUser,
    loggedUser,
    //forgottenPassword,
    deleteUser,
    changeAdmin,
    changeOperator,
    logout,
    updateLogedUser,
    allOperators,
    usersByBranch,
  } = require("../controllers/user");


  //Registrar usuario
router.post("/register", registerUser);
  //Mostrar en consola a todos los usuarios.
router.get("/allUsers", validateAuth, validateAdmin, allUsers);
//Función para mostrar a todos los operadores.
router.get("/allOperators", validateAuth, validateAdmin, allOperators)
//Función para buscar operadores mediante su idBranch.
router.get("/usersByBranch/:id", validateAuth, validateAdmin, usersByBranch)
//Recibir perfil de usuario logeado
router.get("/me", validateAuth, loggedUser);
//Logearse
router.post("/login", loginUser);
//Actualizar contraseña olvidada
//router.put("/changepassword", forgottenPassword);
//Actualizar usuario logeado
router.put("/updateUser", validateAuth, updateLogedUser)
//Borrar usuario
router.delete("/deleteUser/:id", validateAuth, validateAdmin, deleteUser);
//Actualizar rol a administrador
router.put("/setAdmin/:id", validateAuth, changeAdmin);
//Actualizar a rol de Operador
router.put("/setOperator/:id", validateAuth, changeOperator)
//Logout
router.post("/logout", validateAuth, logout);
module.exports = router;
