import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NgDiyUiComboboxOptionGroupComponent } from "./ng-diy-ui-combobox-option-group.component";

describe("NgDiyUiComboboxOptionGroupComponent", () => {
	let component: NgDiyUiComboboxOptionGroupComponent;
	let fixture: ComponentFixture<NgDiyUiComboboxOptionGroupComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgDiyUiComboboxOptionGroupComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgDiyUiComboboxOptionGroupComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
