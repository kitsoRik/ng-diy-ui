import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NgDiyUiExpansionPanelComponent } from "./ng-diy-ui-expansion-panel.component";

describe("NgDiyUiExpansionPanelComponent", () => {
	let component: NgDiyUiExpansionPanelComponent;
	let fixture: ComponentFixture<NgDiyUiExpansionPanelComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgDiyUiExpansionPanelComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgDiyUiExpansionPanelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
