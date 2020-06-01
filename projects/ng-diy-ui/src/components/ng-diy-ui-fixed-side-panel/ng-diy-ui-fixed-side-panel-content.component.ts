import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "ng-diy-ui-fixed-side-panel-content",
	template: "<ng-content></ng-content>",
})
export class NgDiyUiFixedSidePanelContentComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
