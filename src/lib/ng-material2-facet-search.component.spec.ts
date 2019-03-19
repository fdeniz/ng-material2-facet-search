import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMaterial2FacetSearchComponent } from './ng-material2-facet-search.component';

describe('NgMaterial2FacetSearchComponent', () => {
	let component: NgMaterial2FacetSearchComponent;
	let fixture: ComponentFixture<NgMaterial2FacetSearchComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgMaterial2FacetSearchComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgMaterial2FacetSearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
