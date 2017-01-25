import { Component, OnInit, OnDestroy } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { ActivatedRoute, Router, ROUTER_DIRECTIVES } from '@angular/router';

import { EngomadoriaService } from '../services/EngomadoriaService';

@Component({
    selector: 'engomadoria-detail',
    templateUrl: 'app/engomadoria/engomadoria-detail.component.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
    providers: [EngomadoriaService]
})

export class EngomadoriaDetailComponent implements OnInit, OnDestroy {

    servico: any;

    private sub: any;

    constructor(private route: ActivatedRoute, private router: Router, private _engomadoriaService: EngomadoriaService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this._engomadoriaService
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