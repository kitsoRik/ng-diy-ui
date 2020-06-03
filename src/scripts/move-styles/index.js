const path = require("path");
const directories = require("../utils/directories");
const { readdirSync } = require("fs");
const fs = require("../utils/fs");
const moveColors = require("./move-colors");
const moveEffects = require("./move-effects");

module.exports = async (json, userChanges) => {
	const stylesPathInUser = path.join(
		directories.generatedDirectory(json),
		"styles"
	);

	const stylesPath = path.join(
		__dirname,
		"../../../../../@ng-diy-ui/components/src/styles"
	);

	await moveColors(
		path.join(stylesPath, "colors.scss"),
		path.join(stylesPathInUser, "colors.scss"),
		userChanges
	);

	await moveEffects(
		path.join(stylesPath, "effects.scss"),
		path.join(stylesPathInUser, "effects.scss"),
		userChanges
	);
};
