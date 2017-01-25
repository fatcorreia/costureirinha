import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.component.html',
    directives: [CORE_DIRECTIVES]
})

export class HomeComponent{
    
    constructor() {
    }
}