import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { LavandariaService } from '../services/LavandariaService';
import { NomePipe } from '../pipes/nome.pipe';

@Component({
    selector: 'home',
    templateUrl: 'app/lavandaria/lavandaria.component.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
    providers: [LavandariaService],
    pipes: [NomePipe]
})

export class LavandariaComponent implements OnInit {

    public lavandaria: any[];

    constructor(private router: Router, private _lavandariaService: LavandariaService) {
    }

    ngOnInit() {
        this._lavandariaService
            .GetAll()
            .subscribe(data => this.lavandaria = data,
            error => console.log(error),
            () => console.log('Get all complete'));
    }
}
