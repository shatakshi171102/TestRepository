import { BrowserModule,provideClientHydration } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { ApiModule, BASE_PATH } from 'sample-webapi';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserService } from './user.service';
import { PolicyService } from './policy.service';
import { ClaimService } from './claim.service';
import { CartService } from './cart.service';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { PolicyComponent } from './policy/policy.component';
import { ClaimComponent } from './claim/claim.component';
// import { PolicyChartComponent } from './policy-chart/policy-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    PolicyComponent,
    ClaimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // ApiModule,
    FormsModule,
  ],
  providers: [UserService, PolicyService, ClaimService, CartService,provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }


