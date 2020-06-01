import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NgDiyUiSnackbarNotificationComponent } from "./ng-diy-ui-snackbar-notification.component";

describe("NgDiyUiSnackbarNotificationComponent", () => {
	let component: NgDiyUiSnackbarNotificationComponent;
	let fixture: ComponentFixture<NgDiyUiSnackbarNotificationComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgDiyUiSnackbarNotificationComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgDiyUiSnackbarNotificationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
