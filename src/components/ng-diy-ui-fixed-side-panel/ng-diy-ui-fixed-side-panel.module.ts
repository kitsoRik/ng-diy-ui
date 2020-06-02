import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgDiyUiFixedSidePanelComponent } from "./ng-diy-ui-fixed-side-panel.component";
import { NgDiyUiFixedSidePanelHeaderComponent } from "./ng-diy-ui-fixed-side-panel-header.component";
import { NgDiyUiFixedSidePanelContentComponent } from "./ng-diy-ui-fixed-side-panel-content.component";
import { NgDiyUiFixedSidePanelFooterComponent } from "./ng-diy-ui-fixed-side-panel-footer.component";
import { NgDiyUiTextModule } from "../ng-diy-ui-text/ng-diy-ui-text.module";

@NgModule({
	declarations: [
		NgDiyUiFixedSidePanelComponent,
		NgDiyUiFixedSidePanelHeaderComponent,
		NgDiyUiFixedSidePanelContentComponent,
		NgDiyUiFixedSidePanelFooterComponent,
	],
	imports: [CommonModule, NgDiyUiTextModule],
	exports: [
		NgDiyUiFixedSidePanelComponent,
		NgDiyUiFixedSidePanelHeaderComponent,
		NgDiyUiFixedSidePanelContentComponent,
		NgDiyUiFixedSidePanelFooterComponent,
	],
	providers: [],
})
export class NgDiyUiFixedSidePanelModule {}
