import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "ng-diy-ui-fixed-side-panel-footer",
	template: "<ng-content></ng-content>",
	styles: [":host { display: flex; }"],
})
export class NgDiyUiFixedSidePanelFooterComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
