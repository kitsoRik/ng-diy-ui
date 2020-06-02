const { join } = require("path");
const { rewriteFromFileToFile } = require("../utils/rewriteFile");
const { existsSync } = require("fs");
const directories = require("../utils/directories");

module.exports = (json) => {
	if (!json.effects) return writeDefault(json);

	if (typeof json.effects !== "string")
		throw new Error("Effects path must be a string");

	const fromPath = join(__dirname, "../../../../../", json.effects);

	if (!existsSync(fromPath)) throw new Error("Effects path not exists");

	const toPath = join(
		directories.generatedDirectory(json),
		"styles/effects.scss"
	);

	rewriteFromFileToFile(fromPath, toPath);
};

function writeDefault(json) {
	const fromPath = join(
		__dirname,
		"../../defaults/default-theme/styles/effects.scss"
	);
	const toPath = join(
		directories.generatedDirectory(json),
		"styles/effects.scss"
	);

	rewriteFromFileToFile(fromPath, toPath);
}
