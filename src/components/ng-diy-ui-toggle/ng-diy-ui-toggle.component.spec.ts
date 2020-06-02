import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NgDiyUiToggleComponent } from "./ng-diy-ui-toggle.component";

describe("NgDiyUiToggleComponent", () => {
	let component: NgDiyUiToggleComponent;
	let fixture: ComponentFixture<NgDiyUiToggleComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgDiyUiToggleComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgDiyUiToggleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
