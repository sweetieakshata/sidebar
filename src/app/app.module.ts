import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxPaginationModule } from 'ngx-pagination'
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,

} from "@angular/material";
import { MatListModule } from "@angular/material/list";
import { OrganizationComponent } from "./organization/organization.component";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmationService } from "primeng/api";

import { MainNavComponent } from "./main-nav/main-nav.component";
import { routing } from "./app.routing";
import { GrdFilterPipe } from "./search-filter.pipe";
import { SidebComponent } from "./sideb/sideb.component";
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganizationComponent,
    MainNavComponent,

    GrdFilterPipe,
    SidebComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,

    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,

    ConfirmDialogModule,
    NgxPaginationModule,

    //  SidebarModule,
    routing
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
