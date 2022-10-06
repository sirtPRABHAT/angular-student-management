import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { StudentResult } from '../interface'

@Component({
    selector: 'app-student-result',
    templateUrl: './student-result.component.html',
    styleUrls: ['./student-result.component.css'],
})
export class StudentResultComponent implements OnInit {
    dataFromPreviousPage: StudentResult
    constructor(private router: Router) {}

    ngOnInit(): void {
        if (window.history.state.result) {
            this.dataFromPreviousPage = window.history.state.result
        } else {
            //this.router.navigateByUrl('/student')
        }
    }
}
