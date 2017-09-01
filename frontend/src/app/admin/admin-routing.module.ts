import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { CenterComponent } from './center/center.component';
import { EditComponent } from './edit/edit.component';

import { AuthGuard } from '../core/services/auth-guard.service';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            children: [
              { path: 'center', component: CenterComponent },
              { path: 'edit/:id', component: EditComponent }
            ]
          }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }

