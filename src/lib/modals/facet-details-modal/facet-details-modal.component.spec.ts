import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacetDetailsModalComponent } from './facet-details-modal.component';

describe('FacetDetailsModalComponent', () => {
	let component: FacetDetailsModalComponent;
	let fixture: ComponentFixture<FacetDetailsModalComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [FacetDetailsModalComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FacetDetailsModalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
