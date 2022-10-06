import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '../shared/shared.module'
import { StudentHomeComponent } from './student-home/student-home.component'
import { StudentResultComponent } from './student-result/student-result.component'

const routes: Routes = [
    { path: 'student', component: StudentHomeComponent },
    { path: 'student-result', component: StudentResultComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule, SharedModule],
})
export class StudentRoutingModule {}
