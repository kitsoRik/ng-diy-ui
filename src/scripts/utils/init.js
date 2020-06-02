const { exists, rmdir, mkdir } = require("fs");
const { join } = require("path");
const directories = require("./directories");

module.exports = (json) =>
	new Promise((resolve) => {
		const initPath = join(directories.generatedDirectory(json));

		exists(initPath, (value) => {
			if (value) {
				rmdir(initPath, { recursive: true }, () => {
					mkdir(initPath, { recursive: true }, () => {
						const stylesPath = join(initPath, "/styles");
						const components = join(initPath, "/components");

						mkdir(stylesPath, () => mkdir(components, resolve));
					});
				});
			} else {
				mkdir(initPath, { recursive: true }, () => {
					const stylesPath = join(initPath, "/styles");
					const components = join(initPath, "/components");

					mkdir(stylesPath, () => mkdir(components, resolve));
				});
			}
		});
	});
