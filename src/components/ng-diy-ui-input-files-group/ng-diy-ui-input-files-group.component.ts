import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "ng-diy-ui-input-files-group",
	templateUrl: "./ng-diy-ui-input-files-group.component.html",
	styleUrls: ["./ng-diy-ui-input-files-group.component.scss"],
})
export class NgDiyUiInputFilesGroupComponent implements OnInit {
	files: File[] = [];

	@Input("files") _files: File[];
	@Output("filesChange") _filesChange: EventEmitter<
		File[]
	> = new EventEmitter();

	ngOnInit() {}

	uploadFile(files: File[]) {
		this.files = this.files.concat(files);
		this._filesChange.emit(files);
	}

	unloadFile(index: number) {
		this.files = this.files.filter((f, i) => i !== index);
	}
}
