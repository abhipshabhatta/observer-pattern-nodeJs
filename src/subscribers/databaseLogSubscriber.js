const db = require("../db");

module.exports = (data) => {
	const query = `INSERT INTO resources (name, createdAt) VALUES (?, ?)`;
	db.run(query, [data.name, data.createdAt], (err) => {
		if (err) {
			console.error("DatabaseLogSubscriber: Error logging to database", err.message);
		} else {
			console.log("DatabaseLogSubscriber: Resource logged to database");
		}
	});
};
