import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NgDiyUiTabsComponent } from "./ng-diy-ui-tabs.component";

describe("NgDiyUiTabsComponent", () => {
	let component: NgDiyUiTabsComponent;
	let fixture: ComponentFixture<NgDiyUiTabsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgDiyUiTabsComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgDiyUiTabsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
