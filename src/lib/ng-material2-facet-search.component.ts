import * as _ from 'lodash';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogPosition, MatAutocompleteSelectedEvent, MatChipSelectionChange, MatDialog } from '@angular/material';
import { Facet, FacetDataType, FacetFilterType } from './models';
import { FacetDetailsModalComponent } from './modals/facet-details-modal/facet-details-modal.component';
import { MediaObserver } from '@angular/flex-layout';

@Component({
	selector: 'ng-material2-facet-search',
	styleUrls: ['./ng-material2-facet-search.css'],
	templateUrl: './ng-material2-facet-search.component.html',
})
export class NgMaterial2FacetSearchComponent implements OnInit {

	@Input() source: Facet[];
	@Input() placeholder = 'Filter Table...';
	@Input() clearButtonText = 'Clear Filters';
	@Input() clearButtonEnabled = true;
	@Input() dateFormat = 'M/d/yyyy';


	@Input() facetWidth = '400px';
	@Input() facetHasBackdrop = true;
	@Input() confirmOnRemove = true;
	@Input() chipLabelsEnabled = true;
	@Output() searchUpdated: EventEmitter<Facet[]>;

	public selectedFacet: Facet;
	public selectedFacets: Facet[] = [];
	public availableFacets: Facet[] = [];
	public FacetDataType = FacetDataType;
	public FacetFilterType = FacetFilterType;

	constructor(public dialog: MatDialog, public media: MediaObserver) {
		this.searchUpdated = new EventEmitter<Facet[]>();
	}

	ngOnInit() {
		this.updateAvailableFacets();
		this.selectedFacets = [];
		_.each(_.filter(this.source, (facet) => facet && facet.values && _.isArray(facet.values)), (facet) => {
			this.selectedFacets.push(facet);
		});

		if (this.selectedFacets && _.isArray(this.selectedFacets) && this.selectedFacets.length > 0) {
			this.emitSelectedEvent();
		}
	}

	chipSelected(event: MatChipSelectionChange, facet: Facet): void {
		if (event.selected && !facet.readonly) {
			const elementRef = event.source._elementRef.nativeElement;
			const bound = elementRef.getBoundingClientRect();
			this.facetSelected(facet, {
				top: bound.top + bound.height + 'px',
				left: (!this.media.isActive('xs') ? bound.left + 'px' : undefined)

			}, true);
		}
	}

	autoCompleteSelected = (event: MatAutocompleteSelectedEvent): void => {
		const selectedFacet: Facet = event.option.value;
		const elementRef = event.option._getHostElement().parentElement.getBoundingClientRect();
		const top = elementRef.top;
		const left = elementRef.left;

		this.facetSelected(selectedFacet, {
			top: top + 'px',
			left: (!this.media.isActive('xs') ? left + 'px' : undefined)
		}, false);

	}

	facetSelected = (facet: Facet, position: DialogPosition, isUpdate: boolean): void => {
		this.promptFacet(_.cloneDeep(facet), position, isUpdate);
	}

	promptFacet = (facet: Facet, position: DialogPosition, isUpdate: boolean): void => {
		setTimeout(() => {

			const facetDetailsModal = this.dialog.open(FacetDetailsModalComponent, {
				width: this.facetWidth,
				hasBackdrop: this.facetHasBackdrop,
				position: position,
				backdropClass: 'transparentBackdrop',
				data: facet,
				disableClose: true,
				closeOnNavigation: false
			});
			facetDetailsModal.componentInstance.removeFacet = (f: Facet) => {
				if (this.removeFacet(f)) {
					facetDetailsModal.close();
				}
			};
			facetDetailsModal.componentInstance.isUpdate = isUpdate;
			facetDetailsModal.componentInstance.finished = (updatedFacet: Facet) => {
				this.addOrUpdateFacet(updatedFacet);
				facetDetailsModal.close();
			};
			facetDetailsModal.beforeClose().subscribe(() => {
				this.selectedFacet = undefined;
			});

		}, 1);
	}

	addOrUpdateFacet = (facet: Facet): void => {
		const index = _.findIndex(this.selectedFacets, { name: facet.name });
		if (index > -1) {
			this.selectedFacets[index] = facet;
		} else {
			this.selectedFacets.push(facet);
		}
		this.emitSelectedEvent();
	}

	removeFacet = (facet: Facet): boolean => {

		if (!this.confirmOnRemove || (this.confirmOnRemove && confirm('Do you really want to remove "' + facet.text + '" filter?'))) {
			_.remove(this.selectedFacets, { name: facet.name });
			this.emitSelectedEvent();
			return true;
		}
		return false;
	}

	updateAvailableFacets = (): void => {
		const sourceClone = _.cloneDeep(this.source);
		_.remove(sourceClone, (a) => {
			return _.some(this.selectedFacets, { name: a.name });
		});
		this.availableFacets = sourceClone;
	}

	reset = (): void => {
		this.selectedFacets = _.filter(this.source, (f) => f.readonly === true);
		this.emitSelectedEvent();
	}

	emitSelectedEvent(): void {
		this.updateAvailableFacets();
		this.searchUpdated.next(_.map(this.selectedFacets, (facet) => (
			{
				name: facet.name,
				text: facet.text,
				type: facet.type,
				values: _.map(facet.values, (val) => ({
					value: val.value,
					text: val.text,
					type: val.type
				}))
			}
		)));
	}

	displayFn(facet?: Facet): string | undefined {
		return undefined;
	}
}
