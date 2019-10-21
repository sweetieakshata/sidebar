import { Routes, RouterModule } from "@angular/router";
import { OrganizationComponent } from "./organization/organization.component";
import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { HomeComponent } from './home/home.component';
// import { ContactComponent } from './contact/contact.component';

const arr: Routes = [

  {path:'home',component:HomeComponent},
  // {path:'about',component:AboutComponent},
  // {path:'contact',component:ContactComponent}
  // {path:'sid',component:SideComponent}

  // {path:'**',redirectTo:'/pagenotfound'}
];

export const routing = RouterModule.forRoot(arr);
