import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgDiyUiSnackbarComponent } from "./ng-diy-ui-snackbar.component";
import { NgDiyUiSnackbarNotificationComponent } from "./ng-diy-ui-snackbar-notification/ng-diy-ui-snackbar-notification.component";
import { NgDiyUiSnackbarService } from "./ng-diy-ui-snackbar.service";

@NgModule({
	declarations: [
		NgDiyUiSnackbarComponent,
		NgDiyUiSnackbarNotificationComponent,
	],
	imports: [CommonModule],
	exports: [NgDiyUiSnackbarComponent],
	providers: [NgDiyUiSnackbarService],
})
export class NgDiyUiSnackbarModule {}
