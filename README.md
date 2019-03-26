# ng-material2-facet-search

This is An Angular library that contains a [facet search](https://en.wikipedia.org/wiki/Faceted_search) bar component, based on Angular team's [Material Design components](https://material.angular.io/). 
Google uses something similar in some of their internal portals like [Cloud Console](https://console.cloud.google.com) and [G-Suite Admin Console](https://gsuite.google.com/products/admin/).


[Source at Github](https://github.com/fdeniz/ng-material2-facet-search)

[![npm version](https://badge.fury.io/js/ng-material2-facet-search.svg)](https://www.npmjs.com/package/ng-material2-facet-search)

---

[Try Example App](https://ng-material2-facet-search-example.stackblitz.io) - ([Edit on StackBlitz ⚡️](https://stackblitz.com/edit/ng-material2-facet-search-example))

![Stackblitz Example Github API](https://i.imgur.com/iLhZ9P0.png)

---


[Try Table Example on Github API](https://ng-material2-facet-search-github-api-example.stackblitz.io) - ([Edit on StackBlitz ⚡️](https://stackblitz.com/edit/ng-material2-facet-search-github-api-example))


![Stackblitz Example Github API](https://i.imgur.com/MGxJCk5.png)


## Installation

```bash
npm i ng-material2-facet-search
```

## Usage
* Import ```NgMaterial2FacetSearchModule``` module in ```app.module.ts```
* Add ```ng-material2-facet-search``` directive in your component, and configure it as you like.

## Basic Example
```app.component.html```
```html
<ng-material2-facet-search
	[source]="facets"
	(searchUpdated)="filterUpdated($event)"
	[chipLabelsEnabled]="true" [confirmOnRemove]="true"
	[clearButtonEnabled]="true" placeholder="Add a filter..." clearButtonText="CLEAR FILTERS">
</ng-material2-facet-search>
```
```app.component.ts```
```javascript
import { Component, OnInit } from '@angular/core';
import { Facet, FacetDataType } from 'ng-material2-facet-search';
import { of, } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
	selector: 'app-component',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	// Facet Definitions
	// You can either define and configure your facets as static object array,
	// or you can generate dynamically based on your data from back end.
	public facets: Array<Facet> = [{
		// facet's object name
		name: 'userName',
		// label text for ui (optional)
		text: 'User Name',
		// type of the facet, options are; 
		// "Text" (input), "Boolean" (checkbox), "Category" (multi select), 
		// "CategorySingle" (single select), "Date" (date picker) and "DateRange" (date pickers)
		type: FacetDataType.Text,
		// description text for ui (optional)
		description: 'Please enter your user name (simple text input example)',
		// name of the material icon (optional) (https://material.io/tools/icons)
		icon: 'person_outline',
		// you can set a facet as readonly to disable editing.
		readonly: false,
	}, {
		name: 'birthday',
		text: 'Birthday',
		icon: 'date_range',
		description: 'Please select your birthday (date select example)',
		type: FacetDataType.Date,
	}, {
		name: 'eventDays',
		text: 'Event Days',
		icon: 'event_available',
		description: 'Please select start and end dates (date range select example)',
		type: FacetDataType.DateRange,
	}, {
		name: 'isParticipant',
		text: 'Is a Participant?',
		icon: 'live_help',
		description: 'This is a test field, you can test boolean data type.',
		type: FacetDataType.Boolean,
	}, {
		name: 'state',
		text: 'State',
		description: 'Please select something (single select, http example)',
		type: FacetDataType.CategorySingle,
		icon: 'folder_open',
		/* mock http service call  */
		// you can define this facet's selection items as observable array, or fixed array.
		options: of([
			{ value: 'open', text: 'Open', count: 49 },
			{ value: 'closed', text: 'Closed', count: 23 }
		]).pipe(delay(700))
	}, {
		name: 'license',
		text: 'License(s)',
		description: 'Please select your licenses (multi select, http example)',
		type: FacetDataType.Category,
		icon: 'drive_eta',
		/* mock http service call  */
		options: of([
			{ value: 'a', text: 'Class A' },
			{ value: 'b', text: 'Class B' },
			{ value: 'c', text: 'Class C' }
		]).pipe(delay(1200))
	}];

	constructor() {

	}

	ngOnInit(): void {

	}

	// you can use an event method like this to trigger your filtering logic.
	filterUpdated = (facetFilters: Array<Facet>): void => {
		console.log('filter', facetFilters);
	}
}


```



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
