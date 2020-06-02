import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NgDiyUiToggleValueComponent } from "./ng-diy-ui-toggle-value.component";

describe("NgDiyUiToggleValueComponent", () => {
	let component: NgDiyUiToggleValueComponent;
	let fixture: ComponentFixture<NgDiyUiToggleValueComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgDiyUiToggleValueComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgDiyUiToggleValueComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
