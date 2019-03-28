import * as _ from 'lodash';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Facet, FacetDataType, FacetFilterType, FacetOption } from '../../models';

@Component({
	selector: 'enl-facet-details-modal',
	templateUrl: './facet-details-modal.component.html',
	styleUrls: ['./facet-details-modal.component.css']
})
export class FacetDetailsModalComponent implements OnInit {

	public isUpdate: boolean;
	public close: () => void;
	public removeFacet: (facet: Facet) => void;
	public finished: (data: Facet) => void;

	public FacetDataType = FacetDataType;
	public FacetFilterType = FacetFilterType;

	constructor(
		public dialogRef: MatDialogRef<FacetDetailsModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data: Facet) {

		switch (this.data.type) {
			case FacetDataType.Category:
				// this.data.values = this.data.values || [{ type: FacetFilterType.Contains }];
				break;

			case FacetDataType.CategorySingle:
				// this.data.values = this.data.values || [{ type: FacetFilterType.Equals }];
				break;

			case FacetDataType.Date:
				this.data.values = this.data.values || [{ type: FacetFilterType.equal }];
				break;

			case FacetDataType.DateRange:
				this.data.values = this.data.values || [{ type: FacetFilterType.startsWith }, { type: FacetFilterType.endsWith }];
				break;

			case FacetDataType.Boolean:
				this.data.values = this.data.values || [{ type: FacetFilterType.equal }];
				break;

			case FacetDataType.Text:
				this.data.values = this.data.values || [{ type: FacetFilterType.contains, value: '' }];
				break;

			default:
				this.data.values = this.data.values || [{}];
		}
	}

	ngOnInit() {

	}

	onOk(): void {
		this.finished(this.data);
	}

	onCancel(): void {
		this.onClose();
	}

	onClose(): void {
		this.dialogRef.close();
	}


	isItemSelected = (option: FacetOption): boolean => {
		return _.some(this.data.values, option);
	}

	addOptionToSelected = (facet: Facet, option: FacetOption): void => {

		if (_.some(facet.values, { value: option.value })) {
			_.remove(facet.values, { value: option.value });
		} else {
			option.selected = true;
			switch (facet.type) {
				case FacetDataType.Category:
					if (_.isNil(facet.values)) {
						facet.values = [];
					}
					option.type = FacetFilterType.contains;
					facet.values.push(option);
					break;
				case FacetDataType.CategorySingle:
					option.type = FacetFilterType.equal;
					facet.values = [option];
					break;
			}
		}
		// option.selected = !option.selected;
	}

	isUpdateButtonDisabled = (): Boolean => {
		switch (this.data.type) {
			case FacetDataType.Category:
			case FacetDataType.CategorySingle:
				return !_.some(this.data.values, (val) => val.value);

			case FacetDataType.Date:
				return !_.some(this.data.values, (val) => val.value);

			case FacetDataType.DateRange:
				return !(this.data.values[0].value) || !(this.data.values[1].value);

			case FacetDataType.Text:
				return !_.some(this.data.values, (val) => val.value);

			case FacetDataType.Boolean:
				return false; // !(this.data.values[0].value);
		}
	}

}
