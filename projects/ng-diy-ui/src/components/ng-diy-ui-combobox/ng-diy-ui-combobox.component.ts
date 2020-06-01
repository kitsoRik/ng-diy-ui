import {
	Component,
	forwardRef,
	ContentChildren,
	QueryList,
	AfterContentInit,
	ElementRef,
	AfterContentChecked,
	OnChanges,
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";
import { NgDiyUiComboboxOptionComponent } from "./ng-diy-ui-combobox-option/ng-diy-ui-combobox-option.component";
import {
	trigger,
	state,
	style,
	transition,
	animate,
} from "@angular/animations";
import { NgDiyUiDividerComponent } from "../ng-diy-ui-divider/ng-diy-ui-divider.component";
import { NgDiyUiComboboxOptionGroupComponent } from "./ng-diy-ui-combobox-option-group/ng-diy-ui-combobox-option-group.component";

export type Option = NgDiyUiComboboxOptionComponent | NgDiyUiDividerComponent;

@Component({
	selector: "ng-diy-ui-combobox",
	templateUrl: "./ng-diy-ui-combobox.component.html",
	styleUrls: ["./ng-diy-ui-combobox.component.scss"],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => NgDiyUiComboboxComponent),
			multi: true,
		},
	],
	animations: [
		trigger("listState", [
			state(
				"opened",
				style({
					height: "*",
					transform: "translateY(40px)",
				})
			),
			state(
				"closed",
				style({
					height: "0",
				})
			),
			transition("closed=>opened", animate("100ms")),
			transition("opened=>closed", animate("100ms")),
		]),
	],
})
export class NgDiyUiComboboxComponent
	implements ControlValueAccessor, AfterContentChecked {
	@ContentChildren(NgDiyUiComboboxOptionGroupComponent) _groups: QueryList<
		NgDiyUiComboboxOptionGroupComponent
	>;
	@ContentChildren(NgDiyUiComboboxOptionComponent, { descendants: true })
	_sss: QueryList<NgDiyUiComboboxOptionComponent>; // TODO

	private _value: string;

	get value(): string {
		return this._value;
	}

	set value(value: string) {
		if (value === this._value) return;

		this._value = value;
		this.onChange(value);
	}

	get optionValue(): NgDiyUiComboboxOptionComponent {
		return this._sss
			.toArray()
			.find((option) => option.value === this.value);
	}

	get groups(): NgDiyUiComboboxOptionGroupComponent[] {
		return this._groups.toArray();
	}

	opened: Boolean = false;

	constructor() {}

	onChange = (_) => {};

	ngAfterContentChecked() {
		this._sss.toArray().forEach((option) => {
			option.onClick = () => {
				this.selectOption(option);
			};
		});
	}
	private onTouched = () => {};

	registerOnChange(f: any) {
		this.onChange = f;
	}
	registerOnTouched(f: any) {
		this.onTouched = f;
	}
	setDisabledState(isDisabled: Boolean) {
		throw new Error("Method not implements");
	}
	writeValue(value: string) {
		this.value = value;
	}

	selectOption(option: NgDiyUiComboboxOptionComponent) {
		this.value = option.value;
		this.opened = false;
	}
}
