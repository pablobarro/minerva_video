import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Video } from '../video';
import {Categoria} from '../categoria';
import { VideoService } from '../services/detail.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'categoria_detalle',
    templateUrl: '../views/categoria_detalle.html',
    styleUrls: ['./categoria.component.sass'],
    providers: [VideoService]
})

export class CategoriaComponent implements OnInit {
    public video: Video;
    public categoria: Categoria;
    
    constructor(
        private route: ActivatedRoute,
        private videoService: VideoService,
        private location: Location
    ) {
        console.log(+this.route.snapshot.paramMap.get('id'));
    }

    ngOnInit(): void {
        this.getVideo();
    }
    getCategoria(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        // tslint:disable-next-line:no-shadowed-variable
        this.videoService.getCategoria(id).subscribe(categoria => this.categoria = categoria);
    }
    getVideo(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        // tslint:disable-next-line:no-shadowed-variable
        this.videoService.getVideo(id).subscribe(video => this.video = video);

    }
    goBack(): void {
        this.location.back();
    }
}