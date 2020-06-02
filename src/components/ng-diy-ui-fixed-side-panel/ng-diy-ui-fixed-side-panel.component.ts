import { Component, OnInit, OnDestroy } from "@angular/core";
import {
	trigger,
	state,
	style,
	transition,
	animate,
} from "@angular/animations";
import { NgDiyUiLocalState } from "../extends/ng-diy-ui-local-state";

@Component({
	selector: "ng-diy-ui-fixed-side-panel",
	templateUrl: "./ng-diy-ui-fixed-side-panel.component.html",
	styleUrls: ["./ng-diy-ui-fixed-side-panel.component.scss"],
	animations: [
		trigger("contentState", [
			state(
				"opened",
				style({
					height: "*",
				})
			),
			state(
				"closed",
				style({
					height: "0",
				})
			),
			transition("opened => closed", animate("300ms")),
			transition("closed => opened", animate("300ms")),
		]),
	],
})
export class NgDiyUiFixedSidePanelComponent extends NgDiyUiLocalState
	implements OnInit, OnDestroy {
	private _opened: boolean;

	get opened(): boolean {
		return this._opened;
	}
	set opened(value: boolean) {
		this._opened = value;
		this.localWrite("opened", value);
	}

	constructor() {
		super();
	}

	ngOnInit() {
		this._opened = this.localRead("opened", false);
	}

	ngOnDestroy() {}
}
