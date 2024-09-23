import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [TopBarComponent],
  imports: [CommonModule,
    RouterModule,
    StoreModule
  ],
  exports: [TopBarComponent],
})
export class TopBarModule {}
