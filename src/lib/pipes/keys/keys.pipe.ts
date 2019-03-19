import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
	name: 'keys',
	pure: false
})
export class KeysPipe implements PipeTransform {
	transform(value): any {
		return _.map(_.keys(value), (x) => {
			return {
				key: x,
				value: x
			};
		});
	}
}
