import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NgDiyUiButtonComponent } from "./ng-diy-ui-button.component";

describe("NgDiyUiButtonComponent", () => {
	let component: NgDiyUiButtonComponent;
	let fixture: ComponentFixture<NgDiyUiButtonComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgDiyUiButtonComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgDiyUiButtonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
