import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { iNgDiyUiSnackbarNotification } from "./models/iNgDiyUiSnackbarNotification";
import { iNgDiyUiSnackbarNotificationOptions } from "./models/iNgDiyUiSnackbarNotificationOptions";
import { iNgDiyUiSnackbarNotificationAction } from "./models/iNgDiyUiSnackbarNotificationAction";

@Injectable()
export class NgDiyUiSnackbarService {
	private _notifications: iNgDiyUiSnackbarNotification[] = [];

	get notifications(): iNgDiyUiSnackbarNotification[] {
		return this._notifications;
	}

	notify$ = new BehaviorSubject<iNgDiyUiSnackbarNotification[]>([]);

	constructor() {}

	notifyInfo(
		text: string,
		options: iNgDiyUiSnackbarNotificationOptions = {
			duration: 4500,
		},
		actions: iNgDiyUiSnackbarNotificationAction[] = []
	) {
		this.notifyAny("info", text, options, actions);
	}

	notifyWarning(
		text: string,
		options: iNgDiyUiSnackbarNotificationOptions = {
			duration: 4500,
		},
		actions: iNgDiyUiSnackbarNotificationAction[] = []
	) {
		this.notifyAny("warning", text, options, actions);
	}

	notifyError(
		text: string,
		options: iNgDiyUiSnackbarNotificationOptions = {
			duration: 4500,
		},
		actions: iNgDiyUiSnackbarNotificationAction[] = []
	) {
		this.notifyAny("error", text, options, actions);
	}

	notifyCustom(
		text: string,
		options: iNgDiyUiSnackbarNotificationOptions,
		actions: iNgDiyUiSnackbarNotificationAction[] = []
	) {
		this.notifyAny("info", text, options, actions);
	}

	private notifyAny(
		type: "error" | "warning" | "info" | string,
		text: string,
		options: iNgDiyUiSnackbarNotificationOptions,
		actions: iNgDiyUiSnackbarNotificationAction[]
	) {
		const newNotification: iNgDiyUiSnackbarNotification = {
			id: Math.random() * 5000 + "",
			text,
			type,
			options,
			actions,
		};

		this.add(newNotification);

		setTimeout(() => {
			this.remove(newNotification);
		}, options.duration);
	}

	private add(notification: iNgDiyUiSnackbarNotification) {
		this.notify$.next(
			(this._notifications = [...this._notifications, notification])
		);
	}

	private remove(notification: iNgDiyUiSnackbarNotification) {
		this.notify$.next(
			(this._notifications = [
				...this._notifications.filter((n) => n !== notification),
			])
		);
	}
}
