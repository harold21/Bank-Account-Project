class UserModel
{
	constructor(uid, name, email, password)
	{
		this.uid = uid;
		this.name = name;
		this.email = email;
		this.password = password;
	}
}

module.exports = UserModel;