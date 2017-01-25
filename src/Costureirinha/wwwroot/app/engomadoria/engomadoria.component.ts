import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { EngomadoriaService } from '../services/EngomadoriaService';
import { NomePipe } from '../pipes/nome.pipe';

@Component({
    selector: 'engomadoria',
    templateUrl: 'app/engomadoria/engomadoria.component.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
    providers: [EngomadoriaService],
    pipes: [NomePipe]
})

export class EngomadoriaComponent implements OnInit {

    public engomadoria: any[];

    constructor(private router: Router, private _engomadoriaService: EngomadoriaService) {
    }

    ngOnInit() {
        this._engomadoriaService
            .GetAll()
            .subscribe(data => this.engomadoria = data,
            error => console.log(error),
            () => console.log('Get all complete'));
    }
}
