class TransactionModel
{
	constructor(transactionId, type, value, date)
	{
		this.transactionId = transactionId;
		this.type = type;
		this.value = value;
		this.date = date;
	}
}

module.exports = TransactionModel;