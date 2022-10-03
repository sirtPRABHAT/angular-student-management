import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SigninComponent } from './signin/signin.component'
import { SignoutComponent } from './signout/signout.component'
import { SignupComponent } from './signup/signup.component'

const routes: Routes = [
    { path: 'teacher/signin', component: SigninComponent },
    { path: 'teacher/signup', component: SignupComponent },
    { path: 'teacher/signout', component: SignoutComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
