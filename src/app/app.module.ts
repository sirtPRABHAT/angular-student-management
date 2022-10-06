import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthModule } from './auth/auth.module'
import { HomeComponent } from './home/home.component'
import { TeacherModule } from './teacher/teacher.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthHttpInterceptor } from './auth/auth-http-interceptor'
import { StudentModule } from './student/student.module'
import { DatePipe } from '@angular/common'

@NgModule({
    declarations: [AppComponent, HomeComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule,
        TeacherModule,
        BrowserAnimationsModule,
        HttpClientModule,
        StudentModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthHttpInterceptor,
            multi: true,
        },
        DatePipe,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
