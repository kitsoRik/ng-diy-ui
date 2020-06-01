import { Component } from "@angular/core";
import { NgDiyUiSnackbarService } from "./ng-diy-ui-snackbar.service";
import { iNgDiyUiSnackbarNotification } from "./models/iNgDiyUiSnackbarNotification";

@Component({
	selector: "ng-diy-ui-snackbar",
	templateUrl: "./ng-diy-ui-snackbar.component.html",
	styleUrls: ["./ng-diy-ui-snackbar.component.scss"],
})
export class NgDiyUiSnackbarComponent {
	get notifications(): iNgDiyUiSnackbarNotification[] {
		return this.snackbar.notifications;
	}

	constructor(private snackbar: NgDiyUiSnackbarService) {
		snackbar.notify$.subscribe(() => {});
	}
}
