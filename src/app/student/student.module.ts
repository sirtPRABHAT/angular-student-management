import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { StudentRoutingModule } from './student-routing.module'
import { ReactiveFormsModule } from '@angular/forms'
import { StudentHomeComponent } from './student-home/student-home.component'
import { StudentResultComponent } from './student-result/student-result.component'

@NgModule({
    declarations: [StudentHomeComponent, StudentResultComponent],
    imports: [CommonModule, StudentRoutingModule, ReactiveFormsModule],
})
export class StudentModule {}
