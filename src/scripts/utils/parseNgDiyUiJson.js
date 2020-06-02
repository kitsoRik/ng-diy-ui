const { join } = require("path");
const { existsSync, readFileSync } = require("fs");

module.exports = () => {
	const projectPath = join(__dirname, "../../../../../");
	const fileName = "ng-diy-ui.json";

	const kitUiJsonPath = join(projectPath, fileName);

	if (!existsSync(kitUiJsonPath))
		throw new Error(
			"ng-diy-ui.json not found, please create ng-diy-ui.json in your root directory"
		);

	const data = readFileSync(kitUiJsonPath);
	const json = JSON.parse(data);

	return json;
};
