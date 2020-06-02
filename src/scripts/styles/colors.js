const { join } = require("path");
const {
	rewriteFromFileToFile,
	rewriteFromFolderToFolder,
} = require("../utils/rewriteFile");
const { existsSync, exists } = require("fs");
const directories = require("../utils/directories");

module.exports = (json) =>
	new Promise((resolve, reject) => {
		if (!json.colors) return writeDefault(json);

		if (typeof json.colors !== "string")
			return reject("Colors path must be a string");

		const fromPath = join(__dirname, "../../../../../", json.colors);

		exists(fromPath, (value) => {
			if (!value) return reject("Colors path not exists");

			const toPath = join(
				directories.generatedDirectory(json),
				"styles/colors.scss"
			);

			return rewriteFromFileToFile(fromPath, toPath).then(resolve);
		});
	});

async function writeDefault(json) {
	await rewriteFromFileToFile(
		join(__dirname, "../../defaults/default-theme/styles/colors.scss"),
		join(directories.generatedDirectory(json), "styles/colors.scss")
	);
	await rewriteFromFolderToFolder(
		join(__dirname, "../../defaults/default-theme/styles/colors"),
		join(directories.generatedDirectory(json), "styles/colors")
	);
}
