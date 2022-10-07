import { DatePipe } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { StudentService } from '../student.service'

@Component({
    selector: 'app-student-home',
    templateUrl: './student-home.component.html',
    styleUrls: ['./student-home.component.css'],
})
export class StudentHomeComponent implements OnInit {
    getResultForm = new FormGroup({
        rollno: new FormControl('', [Validators.required]),
        dateOfBirth: new FormControl('', [Validators.required]),
    })

    constructor(
        private datePipe: DatePipe,
        private route: Router,
        private studentService: StudentService
    ) {}

    ngOnInit(): void {}

    onFormSubmit() {
        console.error(
            this.datePipe.transform(
                this.getResultForm.get('dateOfBirth').value,
                'MM-dd-YYYY'
            )
        )
        if (this.getResultForm.invalid) return
        this.studentService
            .getResults(
                Number.parseInt(this.getResultForm.controls.rollno.value),
                this.datePipe.transform(
                    this.getResultForm.get('dateOfBirth').value,
                    'MM-dd-YYYY'
                )
            )
            .subscribe({
                next: (data) => {
                    this.route.navigate(['/student-result'], {
                        state: { result: data },
                    })
                },
                error: (err) => {
                    if (err.status == 404) {
                        window.alert('No result Found')
                    } else {
                        console.error('Error in getting result', err)
                    }
                },
            })
    }

    onResetClick() {
        this.getResultForm.reset()
    }
}
