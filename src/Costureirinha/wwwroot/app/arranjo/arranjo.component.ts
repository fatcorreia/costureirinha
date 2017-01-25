import { Component, OnInit,Pipe } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { ArranjoService } from '../services/ArranjoService';
import { NomePipe } from '../pipes/nome.pipe';

@Component({
    selector: 'arranjos',
    templateUrl: 'app/arranjo/arranjo.component.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
    providers: [ArranjoService],
    pipes: [NomePipe]
})

export class ArranjoComponent implements OnInit {

    public arranjos: any[];

    constructor(private router: Router, private _arranjoService: ArranjoService) {
    }

    ngOnInit() {
        this._arranjoService
            .GetAll()
            .subscribe(data => this.arranjos = data,
            error => console.log(error),
            () => console.log('Get all complete'));
    }
}
