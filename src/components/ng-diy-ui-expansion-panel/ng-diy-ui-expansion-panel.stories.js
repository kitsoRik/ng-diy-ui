import { storiesOf, moduleMetadata } from "@storybook/angular";
import { NgDiyUiModule } from "./../../ng-diy-ui.module";

const content = `
    <p>1111111111111111111111111111111111111</p>
    <p>111111111111111111111111111111111111</p>
    <p>111111111111111111111111111</p>
    <p>111111111111111111111111111</p>
    <p>111111111111111111111111111</p>
    <p>111111111111111111111111111</p>
    <p>111111111111111111111111111</p>
    <p>111111111111111111111111111</p>
    <p>111111111111111111111111111</p>
    <p>111111111111111111111111111</p>
`;

storiesOf("NgDiyUiExpansionPanel", module)
	.addDecorator(
		moduleMetadata({
			imports: [NgDiyUiModule],
		})
	)
	.add("Default", () => ({
		template: `
        <ng-diy-ui-expansion-panel title="My expansion panel">
            ${content}
        </ng-diy-ui-expansion-panel>`,
	}))
	.add("Without scroll", () => ({
		template: `
        <ng-diy-ui-expansion-panel title="My expansion panel" [scroll]='false'>
            ${content}
        </ng-diy-ui-expansion-panel>`,
	}))
	.add("Disabled", () => ({
		template: `
        <ng-diy-ui-expansion-panel title="My expansion panel" [disabled]="true">
            ${content}
        </ng-diy-ui-expansion-panel>`,
	}));
