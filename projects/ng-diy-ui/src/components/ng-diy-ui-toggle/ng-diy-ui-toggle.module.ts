import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgDiyUiToggleComponent } from "./ng-diy-ui-toggle.component";
import { FormsModule } from "@angular/forms";
import { NgDiyUiToggleValueComponent } from "./ng-diy-ui-toggle-value/ng-diy-ui-toggle-value.component";

@NgModule({
	declarations: [NgDiyUiToggleComponent, NgDiyUiToggleValueComponent],
	imports: [CommonModule, FormsModule],
	exports: [NgDiyUiToggleComponent, NgDiyUiToggleValueComponent],
	providers: [],
})
export class NgDiyUiToggleModule {}
