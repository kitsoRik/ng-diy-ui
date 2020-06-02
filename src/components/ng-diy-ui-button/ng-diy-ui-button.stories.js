import { storiesOf, moduleMetadata } from "@storybook/angular";
import { NgDiyUiButtonComponent } from "./ng-diy-ui-button.component";

storiesOf("NgDiyUiButton", module)
	.addDecorator(
		moduleMetadata({
			declarations: [NgDiyUiButtonComponent],
		})
	)
	.add("Default", () => ({
		template: `<ng-diy-ui-button>Default button</ng-diy-ui-button>`,
	}))
	.add("Disabled", () => ({
		template: `<ng-diy-ui-button [disabled]="true">Default button</ng-diy-ui-button>`,
	}));
