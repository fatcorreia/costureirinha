import { Component, OnInit, OnDestroy } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { ActivatedRoute, Router, ROUTER_DIRECTIVES } from '@angular/router';

import { ArranjoService } from '../services/ArranjoService';

@Component({
    selector: 'home',
    templateUrl: 'app/arranjo/arranjo-detail.component.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
    providers: [ArranjoService]
})

export class ArranjoDetailComponent implements OnInit, OnDestroy {

    arranjo: any;

    private sub: any;

    constructor(private route: ActivatedRoute, private router: Router, private _arranjoService: ArranjoService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this._arranjoService
                .GetSingle(id)
                .subscribe(data => this.arranjo = data,
                error => console.log(error),
                () => console.log('Get complete'));
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}