import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
	name: 'filter',
	pure: false
})
export class FilterPipe implements PipeTransform {
	transform(objectArray: Array<object>, fieldName: string, fieldValue: any): any {
		return _.filter(objectArray, (obj) => {
			return obj[fieldName] === fieldValue;
		});
	}
}
