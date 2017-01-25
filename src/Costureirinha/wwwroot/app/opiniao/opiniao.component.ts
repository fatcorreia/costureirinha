import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { NgForm } from '@angular/forms';

import { OpiniaoService } from '../services/OpiniaoService';

@Component({
    selector: 'about',
    templateUrl: 'app/opiniao/opiniao.component.html',
    directives: [CORE_DIRECTIVES],
    providers: [OpiniaoService],
})

export class OpiniaoComponent {

    opinioes: any[];
    opiniao = new Opiniao(0, "", 0, "");

    //problema quando a lista inicial é vazia
    constructor(private _opiniaoService: OpiniaoService) {
        this._opiniaoService
            .GetAll()
            .subscribe(data => this.opinioes = data,
            error => console.log(error),
            () => console.log('Get all complete'));
    }

    onStarClick(id: number) {
        this.opiniao.estrelas = id;
    }

    onSubmit(data) {
        this.opinioes.push(new Opiniao(this.opinioes.length + 1, this.opiniao.autor, this.opiniao.estrelas, this.opiniao.texto));

        this._opiniaoService
            .AddAll(this.opinioes)
            .subscribe(data => true,
            error => console.log(error),
            () => console.log('Get all complete'));
    }
}

class Opiniao {
    constructor(
        public id: number,
        public autor: string,
        public estrelas: number,
        public texto?: string
    ) { }
}