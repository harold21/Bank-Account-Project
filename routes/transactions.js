var express = require('express');
var router = express.Router();
var TransactionService = require('../services/service.transaction');

/* adds a movement to the list */
router.post('/', async (req, res, next) =>
{
	const body = req.body;

	try
	{
		const transaction = await TransactionService.movement(body);

		return res.status(201).json({ transaction: transaction });
	}
	catch(err)
	{
    return res.status(400).json({ error: err.message });

		// unexpected error
		return next(err);
	}
});

/* retrieves transaction history */
router.get('/', async (req, res, next) =>
{
	try
	{
		const transactions = await TransactionService.retrieve();

		return res.json({ transactions: transactions });
	}
	catch(err)
	{
		// unexpected error
		return next(err);
	}
});

module.exports = router;
