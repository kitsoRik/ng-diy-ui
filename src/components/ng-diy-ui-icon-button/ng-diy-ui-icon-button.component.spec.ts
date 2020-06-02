import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NgDiyUiIconButtonComponent } from "./ng-diy-ui-icon-button.component";

describe("NgDiyUiIconButtonComponent", () => {
	let component: NgDiyUiIconButtonComponent;
	let fixture: ComponentFixture<NgDiyUiIconButtonComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgDiyUiIconButtonComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgDiyUiIconButtonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
