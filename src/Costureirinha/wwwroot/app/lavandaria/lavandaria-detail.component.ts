import { Component, OnInit, OnDestroy } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { ActivatedRoute, Router, ROUTER_DIRECTIVES } from '@angular/router';

import { LavandariaService } from '../services/LavandariaService';

@Component({
    selector: 'home',
    templateUrl: 'app/lavandaria/lavandaria-detail.component.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
    providers: [LavandariaService]
})

export class LavandariaDetailComponent implements OnInit, OnDestroy {

    servico: any;

    private sub: any;

    constructor(private route: ActivatedRoute, private router: Router, private _lavandariaService: LavandariaService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this._lavandariaService
                .GetSingle(id)
                .subscribe(data => this.servico = data,
                error => console.log(error),
                () => console.log('Get complete'));
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}