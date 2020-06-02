import { TestBed } from "@angular/core/testing";

import { NgDiyUiSnackbarService } from "./ng-diy-ui-snackbar.service";

describe("NgDiyUiSnackbarService", () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it("should be created", () => {
		const service: NgDiyUiSnackbarService = TestBed.get(
			NgDiyUiSnackbarService
		);
		expect(service).toBeTruthy();
	});
});
