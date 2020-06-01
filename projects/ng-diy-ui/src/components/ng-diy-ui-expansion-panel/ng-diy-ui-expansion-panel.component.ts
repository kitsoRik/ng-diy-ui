import { Component, OnInit, Input, HostBinding } from "@angular/core";
import {
	trigger,
	state,
	style,
	transition,
	animate,
	keyframes,
} from "@angular/animations";
import { NgDiyUiLocalState } from "../extends/ng-diy-ui-local-state";

@Component({
	selector: "ng-diy-ui-expansion-panel",
	templateUrl: "./ng-diy-ui-expansion-panel.component.html",
	styleUrls: ["./ng-diy-ui-expansion-panel.component.scss"],

	animations: [
		trigger("content", [
			state(
				"opened",
				style({
					height: "*",
					padding: "10px",
				})
			),
			state(
				"closed",
				style({
					height: 0,
					padding: "0 10px",
				})
			),
			transition("opened => closed", animate("200ms")),
			transition("closed => opened", animate("200ms")),
		]),
		trigger("element", [
			state(
				"opened",
				style({
					height: "*",
				})
			),
			state(
				"closed",
				style({
					height: 0,
				})
			),
			transition("opened => closed", animate("200ms")),
			transition("closed => opened", animate("200ms")),
		]),
	],
})
export class NgDiyUiExpansionPanelComponent extends NgDiyUiLocalState
	implements OnInit {
	private _opened: boolean = false;

	get opened(): boolean {
		return this._opened;
	}
	set opened(value: boolean) {
		this._opened = value;
		this.localWrite("opened", value);
	}

	@Input("title") title: string = "";
	@Input("scroll") scroll: boolean = true;
	@Input("disabled") disabled: boolean = false;

	@HostBinding("attr.disabled") _disabled: boolean = false;

	constructor() {
		super();
	}

	ngOnInit() {
		this._disabled = this.disabled;
		this.opened = this.localRead("opened", false);
	}

	onClickHeader() {
		if (!this.disabled) this.opened = !this.opened;
	}
}
