import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, map, tap } from 'rxjs'
import { StudentResult } from './interface'

@Injectable({
    providedIn: 'root',
})
export class StudentService {
    rootUrl = 'https://student-management-node.herokuapp.com/v1'
    //rootUrl = 'http://localhost:4201/v1'
    studentResultArray: StudentResult[] = []
    dataSource$ = new BehaviorSubject(this.studentResultArray)

    constructor(private http: HttpClient) {}

    getResults(rollno: number, dateOfBirth: string) {
        return this.http
            .get<StudentResult>(
                `${this.rootUrl}/student/result?rollno=${rollno}&dateOfBirth=${dateOfBirth}`
            )
            .pipe(tap((response) => console.log('result recieved')))
    }
}
