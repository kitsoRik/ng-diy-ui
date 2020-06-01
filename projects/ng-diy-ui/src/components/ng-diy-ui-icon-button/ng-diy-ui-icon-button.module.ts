import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgDiyUiIconButtonComponent } from "./ng-diy-ui-icon-button.component";
import { NgDiyUiIconModule } from "../ng-diy-ui-icon/ng-diy-ui-icon.module";

@NgModule({
	declarations: [NgDiyUiIconButtonComponent],
	imports: [CommonModule],
	exports: [NgDiyUiIconButtonComponent],
	providers: [],
})
export class NgDiyUiIconButtonModule {}
