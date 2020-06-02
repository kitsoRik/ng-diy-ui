import {
	Component,
	OnInit,
	QueryList,
	ContentChildren,
	HostListener,
	Input,
} from "@angular/core";
import { NgDiyUiComboboxOptionComponent } from "../ng-diy-ui-combobox-option/ng-diy-ui-combobox-option.component";

@Component({
	selector: "ng-diy-ui-combobox-option-group",
	templateUrl: "./ng-diy-ui-combobox-option-group.component.html",
	styleUrls: ["./ng-diy-ui-combobox-option-group.component.scss"],
})
export class NgDiyUiComboboxOptionGroupComponent implements OnInit {
	@ContentChildren(NgDiyUiComboboxOptionComponent) _options: QueryList<
		NgDiyUiComboboxOptionComponent
	>;

	@HostListener("click", ["$event"]) onClick(e: Event) {}

	@Input("title") _title: string = "";

	constructor() {}

	ngOnInit() {}
}
