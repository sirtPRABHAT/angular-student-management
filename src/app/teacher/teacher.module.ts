import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { TeacherRoutingModule } from './teacher-routing.module'
import { TeacherHomeComponent } from './teacher-home/teacher-home.component'
import { TeacherAddResultComponent } from './teacher-add-result/teacher-add-result.component'
import { SharedModule } from '../shared/shared.module'

@NgModule({
    declarations: [TeacherHomeComponent, TeacherAddResultComponent],
    imports: [
        CommonModule,
        TeacherRoutingModule,
        ReactiveFormsModule,
        SharedModule,
    ],
})
export class TeacherModule {}
