import { storiesOf, moduleMetadata } from "@storybook/angular";
import { NgDiyUiModule } from "../../ng-diy-ui.module";

storiesOf("NgDiyUiTextField", module)
	.addDecorator(
		moduleMetadata({
			imports: [NgDiyUiModule],
		})
	)
	.add("Default", () => ({
		template: `
        <ng-diy-ui-text-field>
        </ng-diy-ui-text-field>`,
	}))
	.add("Password", () => ({
		template: `
        <ng-diy-ui-text-field [password]="true">
        </ng-diy-ui-text-field>`,
	}));
