import { Observable } from 'rxjs';
import { FacetDataType, FacetOption, FacetFilterType } from '.';

export interface Facet {
	name?: string;
	text?: string;
	description?: string;
	readonly?: boolean;
	type?: FacetDataType;
	dataType?: 'boolean' | 'number' | 'string' | 'date';
	options?: Observable<FacetOption[]>;
	typeahead?: (txt: string) => Observable<FacetOption[]>;
	typeahedDebounce?: number;
	values?: FacetOption[];
	fixedFilterType?: FacetFilterType;
	icon?: string;
	iconClass?: string;
	cssClass?: string;
	data?: any;
}
