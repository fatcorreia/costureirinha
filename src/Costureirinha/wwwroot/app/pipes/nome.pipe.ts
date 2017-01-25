import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'nomeFilter' })
export class NomePipe implements PipeTransform {
    transform(lista: any[], nome: string) {
        if (nome == null) {
            return lista;
        }

        return lista.filter(servico => servico.nome.toLowerCase().indexOf(nome.toLowerCase()) !== -1);
    }
}