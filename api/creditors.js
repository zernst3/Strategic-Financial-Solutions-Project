const router = require("express").Router();
const { Creditor } = require("../database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = router;

// Route: GET /api/creditors
// Get all creditor data with total balance and average min pay percentage
router.get("/", async (req, res, next) => {
  try {
    const creditors = await Creditor.findAll();

    let totalBalance = 0;
    let totalMinPaymentPercentage = 0;

    creditors.forEach((creditor) => {
      totalBalance = totalBalance + parseFloat(creditor.balance);
      totalMinPaymentPercentage =
        totalMinPaymentPercentage + parseFloat(creditor.minPaymentPercentage);
    });

    let averageMinPaymentPercentage =
      totalMinPaymentPercentage / creditors.length;

    averageMinPaymentPercentage = averageMinPaymentPercentage.toFixed(2);

    res.json({
      creditors: creditors,
      totalBalance,
      averageMinPaymentPercentage,
    });
  } catch (error) {
    next(error);
  }
});

// Route: GET /api/creditors/analysis
/* Credit analysis route that returns creditors with a balance of over $2,000
and a creditor min pay percentage that doesn't exceed 29.99% */
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
    res.json(creditors);
  } catch (error) {
    next(error);
  }
});

// Route: GET /api/creditors/:name
// Get creditor data by creditor name
router.get("/:name", async (req, res, next) => {
  try {
    const creditor = await Creditor.findAll({
      where: {
        creditorName: req.params.name,
      },
    });

    if (creditor) {
      res.json(creditor);
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
// Add a new creditor entry
router.post("/", async (req, res, next) => {
  try {
    const newCreditor = await Creditor.create(req.body);
    res.json(newCreditor);
  } catch (error) {
    next(error);
  }
});

// Route: PUT /api/creditors/:id
// Update an existing creditor entry (partial or full update)
router.put("/:id", async (req, res, next) => {
  try {
    const creditor = await Creditor.findByPk(req.params.id);
    if (creditor) {
      const updatedCreditor = await creditor.update(req.body);
      res.json(updatedCreditor);
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
      res.jsonStatus(200);
    } else {
      const error = new Error("Creditor Not Found");
      error.status = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
});
