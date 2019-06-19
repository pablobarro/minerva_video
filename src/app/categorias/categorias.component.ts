import {Component, OnInit } from '@angular/core';
import {Categoria} from '../categoria';

import { VideoService } from '../services/detail.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'categorias',
    templateUrl: '../views/categorias.html',
    styleUrls: ['./categorias.component.sass'],
    providers: [VideoService]
})

export class CategoriasComponent implements OnInit {
    public categorias: Categoria[];

    constructor(
        // tslint:disable-next-line:variable-name
        private _videoService: VideoService
    ) { }

    ngOnInit() {
        this.getCategorias();
    }


    getCategorias(): void {
        this._videoService.getCategorias().subscribe(categorias => this.categorias = categorias);
    }
}
