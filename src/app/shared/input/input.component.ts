import { Component, Input, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
    @Input() control: FormControl
    @Input() label: string
    @Input() inputType: string = 'text'
    @Input() icon: string
    @Input() isDisabled: boolean = false

    constructor() {}

    ngOnInit() {}

    showErrors() {
        const { dirty, touched, errors } = this.control
        return dirty && touched && errors
    }
}
