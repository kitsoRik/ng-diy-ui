const fs = require("fs");
const path = require("path");

exports.copyFolder = (fromPath, toPath) => {
	const dirs = fs.readdirSync(fromPath, { withFileTypes: true });

	fs.mkdirSync(toPath);

	dirs.forEach((d, index) => {
		if (d.isDirectory()) {
			this.copyFolder(
				path.join(fromPath, d.name),
				path.join(toPath, d.name)
			);
		} else {
			this.copyFile(
				path.join(fromPath, d.name),
				path.join(toPath, d.name)
			);
		}
	});
};
exports.copyFile = (fromPath, toPath) => {
	const data = fs.readFileSync(fromPath);
	fs.writeFileSync(toPath, data);
};

exports.changeFile = (filePath, callback) => {
	const readData = fs.readFileSync(filePath);
	const writeData = callback(readData);
	fs.writeFileSync(filePath, writeData);
};

exports.renameFile = (filePath, newFileName) => {
	fs.renameSync(filePath, path.join(path.join(filePath, "..", newFileName)));
};
