const TransactionModel = require("../models/model.transaction");
let Validator = require('fastest-validator');

let account = {};
let counter = 0;
account.balance = 0;

let transactionValidator = new Validator();

const transactionSchema = {
        transactionId: {type: "string", min: 3, optional: true},
		
		type: { type: "string", min: 1, max: 10 },
		value: { type: "number", positive: true }
};

class TransactionService
{
	static movement(data)
	{
		var vres = transactionValidator.validate(data, transactionSchema);
		
		if(!(vres === true))
		{
			let errors = {}, item;

			for(const index in vres)
			{
				item = vres[index];

				errors[item.field] = item.message;
			}
			
			throw {
			    name: "ValidationError",
			    message: errors
			};
		}

		let transaction = new TransactionModel(counter++, data.type, data.value, new Date());

		if (transaction.type == "debit" && account.balance - transaction.value < 0) {
			throw {
			    name: "BalanceError",
			    message: "Insufficient Balance"
			};
		}

		if (transaction.type == "credit") {
			account.balance += transaction.value;
		} else {
			account.balance -= transaction.value;
		}

		account[transaction.transactionId] = transaction;

		return transaction;
	}

	static retrieve()
	{
		if(account != null)
		{
			return account;
		}
		else
		{
			throw new Error('Unable to retrieve the movements');
		}
	}
}

module.exports = TransactionService;