import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NgDiyUiTextComponent } from "./ng-diy-ui-text.component";

describe("NgDiyUiTextComponent", () => {
	let component: NgDiyUiTextComponent;
	let fixture: ComponentFixture<NgDiyUiTextComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgDiyUiTextComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgDiyUiTextComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
