import {
	Component,
	OnInit,
	Input,
	HostBinding,
	HostListener,
	ElementRef,
} from "@angular/core";
import { iNgDiyUiSnackbarNotification } from "../models/iNgDiyUiSnackbarNotification";
import {
	trigger,
	style,
	state,
	transition,
	animate,
	keyframes,
} from "@angular/animations";
import { translateState } from "./states/translate.state";
import { fadeState } from "./states/fade.state";

@Component({
	selector: "ng-diy-ui-snackbar-notification",
	templateUrl: "./ng-diy-ui-snackbar-notification.component.html",
	styleUrls: ["./ng-diy-ui-snackbar-notification.component.scss"],

	animations: [trigger("thisState", [...translateState, ...fadeState])],
})
export class NgDiyUiSnackbarNotificationComponent implements OnInit {
	@Input() notification: iNgDiyUiSnackbarNotification;

	@HostBinding("@thisState") thisState = "fade";
	@HostBinding("attr.type") _type = "info";

	@Input() set type(value: "fade" | "translate") {
		this.thisState = value;
	}

	constructor(private elRef: ElementRef) {}

	ngOnInit(): void {
		this._type = this.notification.type;
	}
}
