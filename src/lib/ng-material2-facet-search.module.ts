import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { CsvPipe } from './pipes/csv/csv.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { KeysPipe } from './pipes/keys/keys.pipe';
export { Facet, FacetDataType, FacetFilterType, FacetOption } from './models';
import { FacetDetailsModalComponent } from './modals/facet-details-modal/facet-details-modal.component';
import { NgMaterial2FacetSearchComponent } from './ng-material2-facet-search.component';
import {
	MatAutocompleteModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatCardModule,
	MatCheckboxModule,
	MatChipsModule,
	MatCommonModule,
	MatDatepickerModule,
	MatDialogModule,
	MatDividerModule,
	MatExpansionModule,
	MatFormFieldModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatLineModule,
	MatListModule,
	MatMenuModule,
	MatNativeDateModule,
	MatOptionModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatPseudoCheckboxModule,
	MatRadioModule,
	MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	MatSlideToggleModule,
	MatSliderModule,
	MatSnackBarModule,
	MatSortModule,
	MatStepperModule,
	MatTableModule,
	MatTabsModule,
	MatToolbarModule,
	MatTooltipModule,
	NativeDateModule
} from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		FlexLayoutModule,
		// MATERIAL
		MatOptionModule,
		MatAutocompleteModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCardModule,
		MatCheckboxModule,
		MatChipsModule,
		MatCommonModule,
		MatDatepickerModule,
		MatDialogModule,
		MatDividerModule,
		MatExpansionModule,
		MatFormFieldModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatLineModule,
		MatListModule,
		MatMenuModule,
		MatNativeDateModule,
		MatPaginatorModule,
		MatProgressBarModule,
		MatPseudoCheckboxModule,
		MatProgressSpinnerModule,
		MatRadioModule,
		MatRippleModule,
		MatSelectModule,
		MatSidenavModule,
		MatSliderModule,
		MatSlideToggleModule,
		MatSnackBarModule,
		MatSortModule,
		MatStepperModule,
		MatTableModule,
		MatTabsModule,
		MatToolbarModule,
		MatTooltipModule,
		NativeDateModule

	],
	declarations: [
		CsvPipe,
		KeysPipe,
		FilterPipe,
		NgMaterial2FacetSearchComponent,
		FacetDetailsModalComponent
	],
	exports: [
		NgMaterial2FacetSearchComponent,

	],
	entryComponents: [
		FacetDetailsModalComponent
	]

})
export class NgMaterial2FacetSearchModule { }
