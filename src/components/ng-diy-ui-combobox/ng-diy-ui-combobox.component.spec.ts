import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NgDiyUiComboboxComponent } from "./ng-diy-ui-combobox.component";

describe("NgDiyUiComboboxComponent", () => {
	let component: NgDiyUiComboboxComponent;
	let fixture: ComponentFixture<NgDiyUiComboboxComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgDiyUiComboboxComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgDiyUiComboboxComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
