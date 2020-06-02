import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NgDiyUiComboboxOptionComponent } from "./ng-diy-ui-combobox-option.component";

describe("NgDiyUiComboboxOptionComponent", () => {
	let component: NgDiyUiComboboxOptionComponent;
	let fixture: ComponentFixture<NgDiyUiComboboxOptionComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgDiyUiComboboxOptionComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgDiyUiComboboxOptionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
