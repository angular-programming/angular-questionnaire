import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar';


@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavbarComponent],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, NavbarComponent]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
