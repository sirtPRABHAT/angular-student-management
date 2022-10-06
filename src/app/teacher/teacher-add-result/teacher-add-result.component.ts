import { DatePipe } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { TeacherService } from '../teacher.service'

@Component({
    selector: 'app-teacher-add-result',
    templateUrl: './teacher-add-result.component.html',
    styleUrls: ['./teacher-add-result.component.css'],
})
export class TeacherAddResultComponent implements OnInit {
    addResultForm = new FormGroup({
        rollno: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        dateOfBirth: new FormControl('', [Validators.required]),
        score: new FormControl('', [Validators.required]),
    })

    constructor(
        private router: Router,
        private teacherService: TeacherService,
        private datePipe: DatePipe
    ) {}

    ngOnInit(): void {}

    onFormSubmit() {
        if (this.addResultForm.invalid) return

        this.teacherService
            .addStudentResult({
                rollno: Number.parseInt(this.addResultForm.get('rollno').value),
                name: this.addResultForm.get('name').value,
                dateOfBirth: this.datePipe.transform(
                    this.addResultForm.get('dateOfBirth').value,
                    'MM-dd-YYYY'
                ),
                score: Number.parseInt(this.addResultForm.get('score').value),
            })
            .subscribe({
                next: () => {
                    this.router.navigateByUrl('/teacher')
                },
                error: (error) => {
                    console.error('ERROR OCCURED', error)
                },
            })
    }
}
