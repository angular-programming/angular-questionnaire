import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { AccordionModule } from 'ngx-bootstrap';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
    imports: [CommonModule, AccordionModule.forRoot(), AboutRoutingModule],
    declarations: [AboutComponent]
})
export class AboutModule { }
