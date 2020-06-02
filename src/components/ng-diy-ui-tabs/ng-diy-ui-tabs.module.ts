import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgDiyUiTabsComponent } from "./ng-diy-ui-tabs.component";
import { NgDiyUiTabComponent } from "./ng-diy-ui-tab/ng-diy-ui-tab.component";

@NgModule({
	declarations: [NgDiyUiTabComponent, NgDiyUiTabsComponent],
	imports: [CommonModule],
	exports: [NgDiyUiTabComponent, NgDiyUiTabsComponent],
	providers: [],
})
export class NgDiyUiTabsModule {}
