import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgDiyUiExpansionPanelComponent } from "./ng-diy-ui-expansion-panel.component";
import { NgDiyUiTextModule } from "../ng-diy-ui-text/ng-diy-ui-text.module";
import { NgDiyUiIconModule } from "../ng-diy-ui-icon/ng-diy-ui-icon.module";

@NgModule({
	declarations: [NgDiyUiExpansionPanelComponent],
	imports: [CommonModule, NgDiyUiTextModule, NgDiyUiIconModule],
	exports: [NgDiyUiExpansionPanelComponent],
	providers: [],
})
export class NgDiyUiExpansionPanelModule {}
