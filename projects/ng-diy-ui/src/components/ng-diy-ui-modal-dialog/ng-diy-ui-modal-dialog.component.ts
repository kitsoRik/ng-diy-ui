import {
	Component,
	Input,
	Output,
	EventEmitter,
	HostListener,
	HostBinding,
} from "@angular/core";

@Component({
	selector: "ng-diy-ui-modal-dialog",
	templateUrl: "./ng-diy-ui-modal-dialog.component.html",
	styleUrls: ["./ng-diy-ui-modal-dialog.component.scss"],
})
export class NgDiyUiModalDialogComponent {
	_opened = false;

	@Input("opened") set opened(value: boolean) {
		this._opened = value;
		this.display = value ? "flex" : "none";
	}

	@Output("close") close = new EventEmitter();

	@HostListener("click") onClick() {
		this.close.emit();
	}

	@HostBinding("style.display") display: string = "none";
}
