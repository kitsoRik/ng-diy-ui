const path = require("path");

exports.generatedDirectory = (json) => {
	if (!json.generatedPath)
		throw new Error(
			"Generated path must be, please add field 'generatedPath' with path to your"
		);
	return path.join(__dirname, "../../../../../../", json.generatedPath);
};

exports.projectDirectory = path.join(__dirname, "../../../../../../");
