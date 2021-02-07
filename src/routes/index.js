const fs = require("fs");
const path = require("path");
const routes = fs.readdirSync(__dirname);

module.exports = app => {
	for(const route of routes) {
		if(route !== "index.js") {
			const r = require(path.join(__dirname, route));
			app.use(r.dir, r.app);
			console.log(`Loaded route '${r.dir}'`);
		}
	}
}
