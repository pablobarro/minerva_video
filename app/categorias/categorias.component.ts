import {Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Categoria } from '../categoria';
import { VideoService } from '../services/detail.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'categorias',
    templateUrl: '../categorias/categorias.html',
    styleUrls: ['./categorias.component.sass'],
    providers: [VideoService]
})

export class CategoriasComponent implements OnInit {
    public categorias: Categoria[];

    constructor(
        private route: ActivatedRoute,
        private videoService: VideoService,
        private location: Location
    ) { }

    ngOnInit() {
        this.getCategorias();
        console.log(this.categorias);
    }


    getCategorias(): void {
        this.videoService.getCategorias().subscribe(categorias => this.categorias = categorias);
    }
}
