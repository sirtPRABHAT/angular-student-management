import { Component, OnInit, ViewChild } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { TeacherService } from '../teacher.service'
import { StudentResult } from '../interfaces'
import { BehaviorSubject } from 'rxjs'
import { DatePipe } from '@angular/common'

@Component({
    selector: 'app-teacher-home',
    templateUrl: './teacher-home.component.html',
    styleUrls: ['./teacher-home.component.css'],
})
export class TeacherHomeComponent implements OnInit {
    isModalActive: boolean = false
    dataSource$: BehaviorSubject<Array<StudentResult>>
    updateResultForm = new FormGroup({
        rollno: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        dateOfBirth: new FormControl('', [Validators.required]),
        score: new FormControl('', [Validators.required]),
    })

    constructor(
        private datePipe: DatePipe,
        private teacherService: TeacherService,
        private router: Router
    ) {
        this.dataSource$ = this.teacherService.dataSource$
    }

    ngOnInit() {
        this.teacherService.getResults().subscribe((data) => {
            this.dataSource$.next(data)
        })
    }

    closeModal() {
        this.isModalActive = false
    }

    openModal(data: StudentResult) {
        this.isModalActive = true
        this.updateResultForm.controls.rollno.setValue(data.rollno.toString())
        this.updateResultForm.controls.name.setValue(data.name.toString())
        this.updateResultForm.controls.dateOfBirth.setValue(
            this.datePipe.transform(data.dateOfBirth.toString(), 'YYYY-MM-dd')
        )
        this.updateResultForm.controls.score.setValue(data.score.toString())
    }

    onAddResultClick() {
        this.router.navigateByUrl('/teacher/add-result')
    }

    onUpdateResultClick() {
        this.teacherService
            .updateStudentResult({
                rollno: Number.parseInt(
                    this.updateResultForm.get('rollno').value
                ),
                name: this.updateResultForm.get('name').value,
                dateOfBirth: this.datePipe.transform(
                    this.updateResultForm.get('dateOfBirth').value,
                    'MM-dd-YYYY'
                ),
                score: Number.parseInt(
                    this.updateResultForm.get('score').value
                ),
            })
            .subscribe({
                next: () => this.closeModal(),
                error: (error) => {},
            })
    }

    onDeleteButtonClicked(rollno: number) {
        this.teacherService.deleteStudentResult(rollno).subscribe(() => {})
    }
}
