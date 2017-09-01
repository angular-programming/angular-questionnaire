import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { CoreModule } from '../core/core.module';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ngx-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, CarouselModule.forRoot(), HomeRoutingModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
