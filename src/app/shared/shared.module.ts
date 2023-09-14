import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './layout/card/card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule],
  exports: [CardComponent],
})
export class SharedModule {}
