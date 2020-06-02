import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NgDiyUiInputFileComponent } from "./ng-diy-ui-input-file.component";

describe("NgDiyUiInputFileComponent", () => {
	let component: NgDiyUiInputFileComponent;
	let fixture: ComponentFixture<NgDiyUiInputFileComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgDiyUiInputFileComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgDiyUiInputFileComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
