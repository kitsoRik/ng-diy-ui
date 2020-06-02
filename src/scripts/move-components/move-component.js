const fs = require("../utils/fs");
const path = require("path");
const {
	existsSync,
	readdirSync,
	lstatSync,
	rmdirSync,
	unlinkSync,
	readFileSync,
} = require("fs");
const toCamesCase = require("ng-diy-ui/src/scripts/utils/toCamesCase");

module.exports = (
	componentFolder,
	userChanges,
	componentsPath,
	componentPathInUser,
	preffix = "ng-diy-ui"
) => {
	const componentFolderName = componentFolder.name.replace(
		"ng-diy-ui",
		preffix
	);
	let changes = userChanges;

	fs.copyFolder(
		path.join(componentsPath, componentFolder.name),
		componentPathInUser
	);
	replacePreffix(componentPathInUser, componentFolder.name, preffix);

	acceptChanges(changes, componentPathInUser);
	return;
	// fs.copyFolder(
	// 	path.join(componentsPath, componentFolder.name),
	// 	path.join(userComponentsPath, componentFolderName)
	// );

	// replacePreffix(userComponentsPath, componentFolderName, preffix);

	// removeUnusableFiles(
	// 	path.join(userComponentsPath, componentFolderName),
	// 	changes
	// );

	// acceptChangesToComponent(
	// 	changes,
	// 	path.join(
	// 		userComponentsPath,
	// 		componentFolderName,
	// 		componentFolderName + ".component.ts"
	// 	)
	// );
};

function acceptChanges(changes, componentPath) {
	if (!changes) return;
	const componentName = changes.name;

	const dirs = readdirSync(changes.path);

	const ScssFileChanges =
		dirs[dirs.indexOf(componentName + ".component.scss")];
	const stylesChanges = dirs[dirs.indexOf("styles")];
	if (!!ScssFileChanges) {
		acceptScssFileChangesToComponent(
			changes,
			path.join(componentPath, componentName + ".component.ts")
		);
		unlinkSync(path.join(componentPath, ScssFileChanges));
	}

	if (stylesChanges) {
		acceptStylesChanges(changes, componentPath);
	}
}

function acceptScssFileChangesToComponent(changes, componentPath) {
	fs.changeFile(componentPath, (data) => {
		const str = data.toString();
		const relativePath = path.join(
			path.relative(
				path.dirname(componentPath),
				path.dirname(changes.path)
			),
			changes.name,
			changes.name + ".component.scss"
		);
		return str.replace(
			/styleUrls: \[".*"\]/,
			`styleUrls: ["${relativePath.replace(/\\/g, "/")}"]`
		);
	});
}

function acceptStylesChanges(changes, componentPath) {
	const userComponentPath = changes.userComponentPath;
	const dirs = readdirSync(path.join(userComponentPath, "styles"));

	dirs.forEach((fileName) => {
		fs.changeFile(path.join(componentPath, "styles", fileName), (data) => {
			return readFileSync(
				path.join(userComponentPath, "styles", "colors.scss")
			);
		});
	});
}

function acceptChangesToComponent(changes, componentPath) {
	if (!changes) return;
	const scss = changes.filesNames.find(
		(value) => value === `${changes.name}.component.scss`
	);
	if (!!scss) {
		fs.changeFile(componentPath, (data) => {
			const str = data.toString();
			const relativePath = path.join(
				path.relative(
					path.dirname(componentPath),
					path.dirname(changes.path)
				),
				changes.name,
				changes.name + ".component.scss"
			);
			return str.replace(
				/styleUrls: \[".*"\]/,
				`styleUrls: ["${relativePath.replace(/\\/g, "/")}"]`
			);
		});
	}
	resolve();
}

function removeUnusableFiles(componentFolderInUser, userChanges) {
	if (!userChanges) return;
	console.log(userChanges);
	userChanges.filesNames.forEach((fileName) => {
		if (fileName === "styles") {
		} else {
			unlinkSync(path.join(componentFolderInUser, fileName));
		}
	});
}

function replacePreffix(componentFolderPath, componentName, preffix) {
	const componentPath = path.join(
		componentFolderPath,
		`${componentName}.component.ts`
	);
	const modulePath = path.join(
		componentFolderPath,
		`${componentName}.module.ts`
	);

	replacePreffixRecursive(componentFolderPath, preffix);

	// if (existsSync(componentPath)) {
	// 	await fs.changeFile(componentPath, (data) => {
	// 		return data
	// 			.toString()
	// 			.replace(/NgDiyUi/g, toCamesCase(preffix, true))
	// 			.replace(/ng-diy-ui/g, preffix);
	// 	});
	// }
	// if (existsSync(modulePath)) {
	// 	await fs.changeFile(modulePath, (data) => {});
	// }
}

function replacePreffixRecursive(componentFolder, preffix) {
	readdirSync(componentFolder).filter((value) => {
		const itemPath = path.join(componentFolder, value);
		const stat = lstatSync(itemPath);
		if (stat.isDirectory()) {
			replacePreffixRecursive(itemPath, preffix);
		} else {
			fs.changeFile(itemPath, (data) => {
				return data
					.toString()
					.replace(/NgDiyUi/g, toCamesCase(preffix, true))
					.replace(/ng-diy-ui/g, preffix);
			});
		}

		fs.renameFile(
			itemPath,
			path
				.basename(itemPath)
				.replace(/NgDiyUi/g, toCamesCase(preffix, true))
				.replace(/ng-diy-ui/g, preffix)
		);

		return true;
	});
}

function changesInCurrentComponent(userChanges, componentName) {
	return userChanges;
}
