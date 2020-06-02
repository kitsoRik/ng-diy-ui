const path = require("path");
const directories = require("ng-diy-ui/src/scripts/utils/directories");
const { readdirSync } = require("fs");
const fs = require("ng-diy-ui/src/scripts/utils/fs");
const moveComponent = require("ng-diy-ui/src/scripts/move-components/move-component");

module.exports = async (json, userChanges) => {
	const componentsPathInUser = path.join(
		directories.generatedDirectory(json),
		"components"
	);

	const componentsPath = path.join(__dirname, "../../components");

	const componentsFolders = foldersByPath(componentsPath);
	componentsFolders.forEach(async (componentFolder) => {
		await moveComponent(
			componentFolder,
			changesByComponent(componentFolder, userChanges, json.preffix),
			componentsPath,
			path.join(
				componentsPathInUser,
				componentFolder.name.replace("ng-diy-ui", json.preffix)
			),
			json.preffix
		);
	});
};

function changesByComponent(componentFolder, userChanges, preffix) {
	const res = userChanges.filter((changes) => {
		return (
			changes.name.replace(preffix, "") ===
			componentFolder.name.replace("ng-diy-ui", "")
		);
	})[0];

	if (!res) return undefined;

	return {
		...res,
		userComponentPath: res.path,
	};
}

function foldersByPath(path) {
	return readdirSync(path, {
		withFileTypes: true,
	}).filter((dirent) => dirent.isDirectory());
}
