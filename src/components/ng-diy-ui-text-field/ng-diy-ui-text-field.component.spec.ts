import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NgDiyUiTextFieldComponent } from "./ng-diy-ui-text-field.component";

describe("NgDiyUiTextFieldComponent", () => {
	let component: NgDiyUiTextFieldComponent;
	let fixture: ComponentFixture<NgDiyUiTextFieldComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgDiyUiTextFieldComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgDiyUiTextFieldComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
