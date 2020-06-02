import { iNgDiyUiSnackbarNotificationOptions } from "./iNgDiyUiSnackbarNotificationOptions";
import { iNgDiyUiSnackbarNotificationAction } from "./iNgDiyUiSnackbarNotificationAction";

export interface iNgDiyUiSnackbarNotification {
	id: string;
	type: "error" | "info" | "warning" | string;
	text: string;
	options: iNgDiyUiSnackbarNotificationOptions;
	actions: iNgDiyUiSnackbarNotificationAction[];
}
