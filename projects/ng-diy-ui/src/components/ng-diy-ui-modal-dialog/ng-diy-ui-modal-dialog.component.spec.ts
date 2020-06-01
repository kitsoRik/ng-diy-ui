import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NgDiyUiModalDialogComponent } from "./ng-diy-ui-modal-dialog.component";

describe("NgDiyUiModalDialogComponent", () => {
	let component: NgDiyUiModalDialogComponent;
	let fixture: ComponentFixture<NgDiyUiModalDialogComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgDiyUiModalDialogComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgDiyUiModalDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
