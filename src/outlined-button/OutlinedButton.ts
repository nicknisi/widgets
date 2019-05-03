import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import Button, { ButtonProperties } from '../button';
import * as css from '../theme/outlined-button.m.css';

export interface OutlinedButtonProperties extends ButtonProperties {}

export class OutlinedButton extends WidgetBase<OutlinedButtonProperties> {
	protected render() {
		return w(Button, {
			classes: {
				'@dojo/widgets/buttton': {
					root: [css.root]
				}
			},
			...this.properties
		}, this.children);
	}
}

export default OutlinedButton;
