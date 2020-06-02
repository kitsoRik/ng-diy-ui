import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NgDiyUiDividerComponent } from "./ng-diy-ui-divider.component";

describe("NgDiyUiDividerComponent", () => {
	let component: NgDiyUiDividerComponent;
	let fixture: ComponentFixture<NgDiyUiDividerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgDiyUiDividerComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgDiyUiDividerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
