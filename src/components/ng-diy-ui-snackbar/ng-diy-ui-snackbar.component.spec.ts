import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NgDiyUiSnackbarComponent } from "./ng-diy-ui-snackbar.component";

describe("NgDiyUiSnackbarComponent", () => {
	let component: NgDiyUiSnackbarComponent;
	let fixture: ComponentFixture<NgDiyUiSnackbarComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgDiyUiSnackbarComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgDiyUiSnackbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
