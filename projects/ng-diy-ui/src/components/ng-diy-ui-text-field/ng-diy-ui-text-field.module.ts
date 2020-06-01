import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgDiyUiTextFieldComponent } from "./ng-diy-ui-text-field.component";
import { FormsModule } from "@angular/forms";

@NgModule({
	declarations: [NgDiyUiTextFieldComponent],
	imports: [CommonModule, FormsModule],
	exports: [NgDiyUiTextFieldComponent],
	providers: [],
})
export class NgDiyUiTextFieldModule {}
