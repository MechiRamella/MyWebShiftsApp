const express = require("express");
const router = express.Router();

const { validateAuth, validateAdmin, validateOperator } = require("../middleware/auth");

const {
    createBranch,
    allOperatorsInBranch,
    allBranchs,
    branchById,
    updateBranch,
    deleteBranch
  } = require("../controllers/branch");

router.post("/createBranch", validateAuth, validateAdmin, createBranch)
router.get("/allBranchs", validateAuth, validateAdmin, allBranchs)
router.get("/branchById/:id", validateAuth, validateAdmin, branchById)
router.get("/operators/:id", validateAuth, validateAdmin, allOperatorsInBranch)
router.put("/updateBranch/:id", validateAuth, validateAdmin, updateBranch)
router.delete("/delete", validateAuth, validateAdmin, deleteBranch)

module.exports = router;