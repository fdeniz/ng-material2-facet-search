import { FacetFilterType } from './';

export interface FacetOption {
	type?: FacetFilterType;
	value?: string | Date | boolean;
	text?: string;
	count?: number;
	description?: string;
	icon?: string;
	iconClass?: string;
	cssClass?: string;
	selected?: boolean;
}
