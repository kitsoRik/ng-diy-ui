const fs = require("../utils/fs");
const path = require("path");
const { linkSync, writeFileSync } = require("fs");

module.exports = (colorsPath, colorsPathInUser, userChanges = []) =>
	new Promise(async (resolve, reject) => {
		let colorsFile;
		if (
			!!(colorsFile = userChanges.find(
				({ name }) => name === "colors.scss"
			))
		) {
			const relativePath = path.relative(
				colorsPathInUser,
				colorsFile.userFilePath
			);
			writeFileSync(
				colorsPathInUser,
				`@import '${relativePath.substring(3).replace(/\\/g, "/")}'`
			);
		} else {
			await fs.copyFile(colorsPath, colorsPathInUser);
		}

		resolve();
	});
