import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "ng-diy-ui-toggle-value",
	templateUrl: "./ng-diy-ui-toggle-value.component.html",
	styleUrls: ["./ng-diy-ui-toggle-value.component.scss"],
})
export class NgDiyUiToggleValueComponent implements OnInit {
	@Input("side") side: "left" | "right" = "right";

	constructor() {}

	ngOnInit() {}
}
