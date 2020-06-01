import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "ng-diy-ui-label",
	templateUrl: "./ng-diy-ui-label.component.html",
	styleUrls: ["./ng-diy-ui-label.component.scss"],
})
export class NgDiyUiLabelComponent implements OnInit {
	@Input("text") text: string = "";

	constructor() {}

	ngOnInit() {}
}
