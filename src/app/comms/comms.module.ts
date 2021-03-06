// Angular Libs
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

// PrimeNG
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';

// Our Components
import { CommsComponent } from './comms.component';

@NgModule({
  declarations: [
    CommsComponent
  ],
  imports: [
    // Angular
    CommonModule,
    FormsModule,

    // PrimeNG
    ToolbarModule,
    ButtonModule,
    InputTextModule,
  ],
  exports: [
    CommsComponent
  ],
  providers: [],
  bootstrap: []
})
export class CommsModule {}
