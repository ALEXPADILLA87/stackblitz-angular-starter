import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConceptsComponent } from './concepts.component';

@NgModule({
  imports: [CommonModule, MatTabsModule, BrowserAnimationsModule],
  declarations: [ConceptsComponent],
})
export class ConceptsModule {}
