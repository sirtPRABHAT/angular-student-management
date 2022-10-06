import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TeacherHomeComponent } from './teacher-home/teacher-home.component'
import { TeacherAddResultComponent } from './teacher-add-result/teacher-add-result.component'
import { AuthGuard } from './auth.guard'

const routes: Routes = [
    {
        path: 'teacher',
        component: TeacherHomeComponent,
        canActivate: [AuthGuard],
    },
    { path: 'teacher/add-result', component: TeacherAddResultComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TeacherRoutingModule {}
