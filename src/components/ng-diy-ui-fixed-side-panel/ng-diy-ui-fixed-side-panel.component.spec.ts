import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NgDiyUiFixedSidePanelComponent } from "./ng-diy-ui-fixed-side-panel.component";

describe("NgDiyUiFixedSidePanelComponent", () => {
	let component: NgDiyUiFixedSidePanelComponent;
	let fixture: ComponentFixture<NgDiyUiFixedSidePanelComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgDiyUiFixedSidePanelComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgDiyUiFixedSidePanelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
