import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgDiyUiInputFilesGroupComponent } from "./ng-diy-ui-input-files-group.component";
import { NgDiyUiInputFileModule } from "../ng-diy-ui-input-file/ng-diy-ui-input-file.module";

@NgModule({
	declarations: [NgDiyUiInputFilesGroupComponent],
	imports: [CommonModule, NgDiyUiInputFileModule],
	exports: [NgDiyUiInputFilesGroupComponent],
	providers: [],
})
export class NgDiyUiInputFilesGroupModule {}
