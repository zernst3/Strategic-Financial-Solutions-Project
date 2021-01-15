const { Creditor, db } = require("./database");

const creditors = [
  {
    creditorName: "CBNA",
    firstName: "Suman",
    lastName: "Tester79",
    minPaymentPercentage: 2.0,
    balance: 1363.0,
  },
  {
    creditorName: "AMEX",
    firstName: "Suman",
    lastName: "Tester79",
    minPaymentPercentage: 2.0,
    balance: 2763.0,
  },
  {
    creditorName: "AMEX",
    firstName: "Suman",
    lastName: "Tester79",
    minPaymentPercentage: 2.0,
    balance: 429.0,
  },
  {
    creditorName: "AMEX",
    firstName: "Suman",
    lastName: "Tester79",
    minPaymentPercentage: 2.0,
    balance: 1363.0,
  },
  {
    creditorName: "DISCOVERBANK",
    firstName: "Suman",
    lastName: "Tester79",
    minPaymentPercentage: 2.0,
    balance: 2644.0,
  },
  {
    creditorName: "CAPITAL ONE",
    firstName: "Suman",
    lastName: "Tester79",
    minPaymentPercentage: 4.0,
    balance: 5464.0,
  },
  {
    creditorName: "CAPITAL ONE",
    firstName: "Suman",
    lastName: "Tester79",
    minPaymentPercentage: 4.0,
    balance: 2345.0,
  },
  {
    creditorName: "CAPITAL ONE",
    firstName: "Suman",
    lastName: "Tester79",
    minPaymentPercentage: 4.0,
    balance: 836.0,
  },
  {
    creditorName: "CBNA",
    firstName: "Suman",
    lastName: "Tester79",
    minPaymentPercentage: 3.5,
    balance: 687.0,
  },
  {
    creditorName: "CBNA",
    firstName: "Suman",
    lastName: "Tester79",
    minPaymentPercentage: 3.5,
    balance: 235.0,
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    for (let i = 0; i < creditors.length; i++) {
      await Creditor.create(creditors[i]);
    }
    db.close();
  } catch (error) {
    console.log(error);
  }
};

const runSeed = async () => {
  try {
    await seed();
    console.log("seeding success");
  } catch (error) {
    console.log(error);
  }
};

runSeed();
