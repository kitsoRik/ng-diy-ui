import { Component, OnInit, Input } from "@angular/core";

export type NgDiyUiTextTags =
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6"
	| "span"
	| "p";
export type NgDiyUiTextType = "title" | "subtitle" | "text";

@Component({
	selector: "ng-diy-ui-text",
	templateUrl: "./ng-diy-ui-text.component.html",
	styleUrls: ["./ng-diy-ui-text.component.scss"],
})
export class NgDiyUiTextComponent implements OnInit {
	@Input("text") text: string = "";
	@Input("type") type: NgDiyUiTextTags | NgDiyUiTextType = "text";
	@Input("align") align: "left" | "center" | "right" = "left";

	constructor() {}

	ngOnInit() {}
}
