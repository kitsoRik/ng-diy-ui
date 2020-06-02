import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NgDiyUiTabComponent } from "./ng-diy-ui-tab.component";

describe("NgDiyUiTabComponent", () => {
	let component: NgDiyUiTabComponent;
	let fixture: ComponentFixture<NgDiyUiTabComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgDiyUiTabComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgDiyUiTabComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
