const parseKitUiJson = require("./utils/parseNgDiyUiJson");
const directories = require("./utils/directories");
const path = require("path");
const getUserChanges = require("ng-diy-ui/src/scripts/get-user-changes");
const moveComponents = require("./move-components/index.js");
const init = require("./utils/init");
const moveStyles = require("ng-diy-ui/src/scripts/move-styles");

(async () => {
	const json = parseKitUiJson();

	await init(json);

	const userChanges = await getUserChanges(
		path.join(directories.projectDirectory, json.inputPath)
	);
	await moveComponents(json, userChanges.components);
	await moveStyles(json, userChanges.styles);
})();
