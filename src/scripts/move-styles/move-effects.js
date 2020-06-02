const fs = require("../utils/fs");
const path = require("path");
const { linkSync, writeFileSync } = require("fs");

module.exports = (effectsPath, effectsPathInUser, userChanges = []) =>
	new Promise(async (resolve, reject) => {
		let effectsFile;
		if (
			!!(effectsFile = userChanges.find(
				({ name }) => name === "effects.scss"
			))
		) {
			const relativePath = path.relative(
				effectsFile.userFilePath,
				effectsPathInUser
			);
			writeFileSync(
				effectsPathInUser,
				`@import '${relativePath.substring(3).replace(/\\/g, "/")}'`
			);
		} else {
			await fs.copyFile(effectsPath, effectsPathInUser);
		}

		resolve();
	});
