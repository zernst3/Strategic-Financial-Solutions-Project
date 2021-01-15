const router = require("express").Router();
const { Creditor } = require("../database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = router;

// Route: GET /api/creditors
router.get("/", async (req, res, next) => {
  try {
    const creditors = await Creditor.findAll();
    res.send(creditors);
  } catch (error) {
    next(error);
  }
});

// Route: GET /api/creditors/analysis
router.get("/analysis", async (req, res, next) => {
  try {
    const creditors = await Creditor.findAll({
      where: {
        balance: {
          [Op.gt]: 2000,
        },
        minPaymentPercentage: {
          [Op.lte]: 29.99,
        },
      },
    });
    res.send(creditors);
  } catch (error) {
    next(error);
  }
});

// Route: GET /api/creditors/:id
router.get("/:id", async (req, res, next) => {
  try {
    const creditor = await Creditor.findByPk(req.params.id);
    if (creditor) {
      res.send(creditor);
    } else {
      const error = new Error("Creditor Not Found");
      error.status = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
});

// Route: POST /api/creditors
router.post("/", async (req, res, next) => {
  try {
    const newCreditor = await Creditor.create(req.body);
    res.send(newCreditor);
  } catch (error) {
    next(error);
  }
});

// Route: PUT /api/creditors/:id
router.put("/:id", async (req, res, next) => {
  try {
    const creditor = await Creditor.findByPk(req.params.id);
    if (creditor) {
      const updatedCreditor = await creditor.update(req.body);
      res.send(updatedCreditor);
    } else {
      const error = new Error("Creditor Not Found");
      error.status = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
});

// Route: DELETE /api/creditors/:id
router.delete("/:id", async (req, res, next) => {
  try {
    const creditor = await Creditor.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (creditor) {
      res.sendStatus(200);
    } else {
      const error = new Error("Creditor Not Found");
      error.status = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
});
