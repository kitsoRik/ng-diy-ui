import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NgDiyUiIconComponent } from "./ng-diy-ui-icon.component";

describe("NgDiyUiIconComponent", () => {
	let component: NgDiyUiIconComponent;
	let fixture: ComponentFixture<NgDiyUiIconComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgDiyUiIconComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgDiyUiIconComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
