import {
	Component,
	ContentChildren,
	QueryList,
	Input,
	Output,
	EventEmitter,
} from "@angular/core";
import { NgDiyUiTabComponent } from "./ng-diy-ui-tab/ng-diy-ui-tab.component";

@Component({
	selector: "ng-diy-ui-tabs",
	templateUrl: "./ng-diy-ui-tabs.component.html",
	styleUrls: ["./ng-diy-ui-tabs.component.scss"],
})
export class NgDiyUiTabsComponent {
	@ContentChildren(NgDiyUiTabComponent) tabs: QueryList<NgDiyUiTabComponent>;

	@Input("tabIndex") _tabIndex = 0;
	@Output("tabIndex") _tabIndexChange = new EventEmitter();

	constructor() {}

	changeTabIndex(index: number) {
		this._tabIndexChange.emit(index);
	}
}
