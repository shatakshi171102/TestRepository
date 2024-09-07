import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { PolicyComponent } from './policy/policy.component';
import { UserComponent } from './user/user.component';
import { ClaimComponent } from './claim/claim.component';
// import { ChartsModule } from 'ng2-charts';


const routes: Routes = [
  
  {path:'admin',component:AdminComponent},
  {path:'user',component:UserComponent},
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  {path:'policy',component:PolicyComponent},
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  {path:'claim',component:ClaimComponent},
  { path: '', redirectTo: '/admin', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




