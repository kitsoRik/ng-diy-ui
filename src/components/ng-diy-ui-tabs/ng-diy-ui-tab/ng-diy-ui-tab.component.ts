import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "ng-diy-ui-tab",
	templateUrl: "./ng-diy-ui-tab.component.html",
	styleUrls: ["./ng-diy-ui-tab.component.scss"],
})
export class NgDiyUiTabComponent implements OnInit {
	@Input("label") label: string = "";

	constructor() {}

	ngOnInit() {}
}
