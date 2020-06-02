import { storiesOf, moduleMetadata } from "@storybook/angular";
import { NgDiyUiModule } from "../../ng-diy-ui.module";

storiesOf("NgDiyUiCombobox", module)
	.addDecorator(
		moduleMetadata({
			imports: [NgDiyUiModule],
		})
	)
	.add("Default", () => ({
		template: `
        <ng-diy-ui-combobox [ngModel]="'encrypt'">
                <ng-diy-ui-combobox-option value="encrypt" text="Encrypt"></ng-diy-ui-combobox-option>
                <ng-diy-ui-combobox-option value="decrypt" text="Decrypt"></ng-diy-ui-combobox-option>
                <ng-diy-ui-combobox-option value="rencrypt" text="Rencrypt"></ng-diy-ui-combobox-option>
        </ng-diy-ui-combobox>`,
	}))
	.add("With groups", () => ({
		template: `
        <ng-diy-ui-combobox [ngModel]="'encrypt'">
            <ng-diy-ui-combobox-option-group>
                <ng-diy-ui-combobox-option value="encrypt" text="Encrypt">
                    <ng-diy-ui-icon iconLabel="simple-arrow" size="small"></ng-diy-ui-icon>
                </ng-diy-ui-combobox-option>
                <ng-diy-ui-combobox-option value="decrypt" text="Decrypt"></ng-diy-ui-combobox-option>
                <ng-diy-ui-combobox-option value="rencrypt" text="Rencrypt"></ng-diy-ui-combobox-option>
            </ng-diy-ui-combobox-option-group>
            <ng-diy-ui-combobox-option-group>
                <ng-diy-ui-combobox-option value="encrypt" text="Encrypt"></ng-diy-ui-combobox-option>
                <ng-diy-ui-combobox-option value="decrypt" text="Decrypt"></ng-diy-ui-combobox-option>
                <ng-diy-ui-combobox-option value="rencrypt" text="Rencrypt"></ng-diy-ui-combobox-option>
            </ng-diy-ui-combobox-option-group>
        </ng-diy-ui-combobox>`,
	}))
	.add("With groups and titles", () => ({
		template: `
        <ng-diy-ui-combobox [ngModel]="'encrypt'">
            <ng-diy-ui-combobox-option-group title="First title">
                <ng-diy-ui-combobox-option value="encrypt" text="Encrypt"></ng-diy-ui-combobox-option>
                <ng-diy-ui-combobox-option value="decrypt" text="Decrypt"></ng-diy-ui-combobox-option>
                <ng-diy-ui-combobox-option value="rencrypt" text="Rencrypt"></ng-diy-ui-combobox-option>
            </ng-diy-ui-combobox-option-group>
            <ng-diy-ui-combobox-option-group>
                <ng-diy-ui-combobox-option value="encrypt" text="Encrypt"></ng-diy-ui-combobox-option>
                <ng-diy-ui-combobox-option value="decrypt" text="Decrypt"></ng-diy-ui-combobox-option>
                <ng-diy-ui-combobox-option value="rencrypt" text="Rencrypt"></ng-diy-ui-combobox-option>
            </ng-diy-ui-combobox-option-group>
            <ng-diy-ui-combobox-option-group title="Secodn title">
                <ng-diy-ui-combobox-option value="encrypt" text="Encrypt"></ng-diy-ui-combobox-option>
                <ng-diy-ui-combobox-option value="decrypt" text="Decrypt"></ng-diy-ui-combobox-option>
                <ng-diy-ui-combobox-option value="rencrypt" text="Rencrypt"></ng-diy-ui-combobox-option>
            </ng-diy-ui-combobox-option-group>
        </ng-diy-ui-combobox>`,
	}))
	.add("Long combobox", () => ({
		template: `
        <ng-diy-ui-combobox [ngModel]="'encrypt'">
            ${`
                <ng-diy-ui-combobox-option-group title="First title">
                    <ng-diy-ui-combobox-option value="encrypt" text="Encrypt"></ng-diy-ui-combobox-option>
                    <ng-diy-ui-combobox-option value="decrypt" text="Decrypt"></ng-diy-ui-combobox-option>
                    <ng-diy-ui-combobox-option value="rencrypt" text="Rencrypt"></ng-diy-ui-combobox-option>
                </ng-diy-ui-combobox-option-group>
                <ng-diy-ui-combobox-option-group>
                    <ng-diy-ui-combobox-option value="encrypt" text="Encrypt"></ng-diy-ui-combobox-option>
                    <ng-diy-ui-combobox-option value="decrypt" text="Decrypt"></ng-diy-ui-combobox-option>
                    <ng-diy-ui-combobox-option value="rencrypt" text="Rencrypt"></ng-diy-ui-combobox-option>
                </ng-diy-ui-combobox-option-group>
            `.repeat(10)}
        </ng-diy-ui-combobox>`,
	}));
