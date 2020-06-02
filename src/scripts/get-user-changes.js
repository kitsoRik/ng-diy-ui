const { readdirSync } = require("fs");
const path = require("path");

module.exports = (inputPath) => {
	return {
		components: getUserComponentsChanges(
			path.join(inputPath, "components")
		),
		styles: getUserStylesChanges(path.join(inputPath, "styles")),
	};
};

function getUserComponentsChanges(inputPath) {

	const dirs = foldersByPath(inputPath);
	return dirs.map((dir) => {
		const name = dir.name,
			dirPath = path.join(inputPath, name);
		return {
			name,
			path: dirPath
		};
	});
}

function getUserStylesChanges(inputPath) {
	return filesByPath(inputPath).map((file) => ({
		...file,
		userFilePath: path.join(inputPath, file.name),
	}));
}

function foldersByPath(path) {
	return readdirSync(path, {
		withFileTypes: true,
	}).filter((dirent) => dirent.isDirectory());
}

function filesByPath(path) {
	return readdirSync(path, {
		withFileTypes: true,
	}).filter((dirent) => !dirent.isDirectory());
}

function anyByPathRecursive(path) {
	return readdirSync(path, {
		withFileTypes: true,
	});
}
