var db = require('../config.js').db;


exports.createUser = function (data, cb){
	db.users.insert({
		username: 	data.username,
		email: 		data.email,
		pass: 		data.pass,
		about: 		data.about
	}, function(err, data){
		if (err) {
			throw err;
		}
		cb(null, true);
	});
};


exports.findUser = function (user, mail, cb){
	db.users.find({email: mail, username: user}).toArray(function(err,data){
	    if(err){
	      console.log(err);
	      data=[];
	    }else {cb(null, data);}
	});
};



exports.updateUser = function (data, cb){
	//db.users.

};

exports.deleteUser = function (data, cb){
	//db.users.remove({},function (){})
};