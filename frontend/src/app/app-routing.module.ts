import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { LoginComponent} from './login/login.component';
import { RegisterComponent} from './register/register.component';
import { UserhomeComponent} from './userhome/userhome.component';
import { ContactComponent } from './contact/contact.component';
import { ForumComponent } from './forum/forum.component';
import { HomeComponent} from './home/home.component';
import {WebsocketComponent} from './websocket/websocket.component'

const routes: Routes = [
 // {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'user',component:UserhomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'forum', component:ForumComponent},
  {path :'' , component:HomeComponent},
  {path :'chat', component:WebsocketComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
