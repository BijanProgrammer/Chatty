import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';

const MaterialComponents = [
	MatButtonModule,
	MatExpansionModule,
	MatDividerModule
];

@NgModule({
	imports: [ MaterialComponents ],
	exports: [ MaterialComponents ]
})
export class MaterialModule {}
