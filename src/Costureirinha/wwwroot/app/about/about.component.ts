import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';

@Component({
    selector: 'about',
    templateUrl: 'app/about/about.component.html',
    directives: [CORE_DIRECTIVES]
})

export class AboutComponent {

    public message: string;

    constructor() {
        this.message = "About";
    }
}
