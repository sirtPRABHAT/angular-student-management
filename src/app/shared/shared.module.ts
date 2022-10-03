import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { InputComponent } from './input/input.component'
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component'

@NgModule({
    declarations: [InputComponent, NavbarComponent],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [InputComponent],
})
export class SharedModule {}
