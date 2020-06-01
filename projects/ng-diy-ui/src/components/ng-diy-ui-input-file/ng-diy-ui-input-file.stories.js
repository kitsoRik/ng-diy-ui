import { storiesOf, moduleMetadata } from "@storybook/angular";
import { NgDiyUiModule } from "../../ng-diy-ui.module";

storiesOf("NgDiyUiInputFile", module)
	.addDecorator(
		moduleMetadata({
			imports: [NgDiyUiModule],
		})
	)
	.add("Default", () => ({
		template: `
        <ng-diy-ui-input-file>
        </ng-diy-ui-input-file>`,
	}));
