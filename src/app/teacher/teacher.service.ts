import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { HttpClient, HttpParams } from '@angular/common/http'
import { map, tap } from 'rxjs/operators'
import { StudentResultResposne, StudentResult } from './interfaces'

@Injectable({
    providedIn: 'root',
})
export class TeacherService {
    rootUrl = 'https://student-management-node.herokuapp.com/v1'
    //rootUrl = 'http://localhost:4201/v1'
    studentResultArray: StudentResult[] = []
    dataSource$ = new BehaviorSubject(this.studentResultArray)

    constructor(private http: HttpClient) {}

    getResults() {
        return this.http
            .get<StudentResultResposne>(`${this.rootUrl}/teacher/result`)
            .pipe(map((response) => response.data))
    }

    addStudentResult(data: StudentResult) {
        return this.http
            .post<StudentResult>(`${this.rootUrl}/teacher/result`, data)
            .pipe(
                tap((data) => {
                    //no need to change dataSource array of teacherHome from here as it is reloaded when we go there
                    //this.dataSource.next([...this.dataSource.value, data])
                })
            )
    }

    updateStudentResult(data: StudentResult) {
        return this.http
            .put<{ success: boolean }>(`${this.rootUrl}/teacher/result`, data)
            .pipe(
                tap(() => {
                    const index = this.dataSource$.value.findIndex(
                        (item) => item.rollno == data.rollno
                    )
                    this.dataSource$.value[index] = data

                    return this.dataSource$.next(this.dataSource$.value)
                })
            )
    }

    deleteStudentResult(rollno: number) {
        return this.http
            .delete(`${this.rootUrl}/teacher/result`, {
                params: new HttpParams().set('rollno', rollno),
            })
            .pipe(
                tap(() => {
                    const index = this.dataSource$.value.findIndex(
                        (item) => item.rollno == rollno
                    )
                    this.dataSource$.value.splice(index, 1)

                    return this.dataSource$.next(this.dataSource$.value)
                })
            )
    }
}
