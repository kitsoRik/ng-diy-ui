import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NgDiyUiInputFilesGroupComponent } from "./ng-diy-ui-input-files-group.component";

describe("NgDiyUiInputFilesGroupComponent", () => {
	let component: NgDiyUiInputFilesGroupComponent;
	let fixture: ComponentFixture<NgDiyUiInputFilesGroupComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgDiyUiInputFilesGroupComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgDiyUiInputFilesGroupComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
