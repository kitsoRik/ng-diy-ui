import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "ng-diy-ui-fixed-side-panel-header",
	template: `
		<ng-diy-ui-text type="subtitle">
			<ng-content></ng-content>
		</ng-diy-ui-text>
	`,
})
export class NgDiyUiFixedSidePanelHeaderComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
