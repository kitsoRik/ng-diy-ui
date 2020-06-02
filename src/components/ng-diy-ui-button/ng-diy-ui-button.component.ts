import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "ng-diy-ui-button",
	templateUrl: "./ng-diy-ui-button.component.html",
	styleUrls: ["./ng-diy-ui-button.component.scss"],
})
export class NgDiyUiButtonComponent implements OnInit {
	@Input("value") value: string = "";
	@Input("disabled") disabled: Boolean = false;

	constructor() {}

	ngOnInit() {}
}
