import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NgDiyUiLabelComponent } from "./ng-diy-ui-label.component";

describe("NgDiyUiLabelComponent", () => {
	let component: NgDiyUiLabelComponent;
	let fixture: ComponentFixture<NgDiyUiLabelComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgDiyUiLabelComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgDiyUiLabelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
