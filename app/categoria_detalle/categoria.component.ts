import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Video } from '../video';
import { Categoria } from '../categoria';
import { VideoService } from '../services/detail.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'categoria_detalle',
    templateUrl: '../categoria_detalle/categoria_detalle.html',
    styleUrls: ['./categoria.component.sass'],
    providers: [VideoService]
})

export class CategoriaComponent implements OnInit {
    public videos: Video[];
    public categoria: Categoria;
    public categoriaVideo: {categoria: string; };
    filterVideo = '';
    constructor(
        private route: ActivatedRoute,
        private videoService: VideoService,
        private location: Location
    ) {
        console.log(+this.route.snapshot.paramMap.get('id'));
    }

    ngOnInit() {
        this.getVideos();
        this.getCategoria();
        this.categoriaVideo = {
          categoria: this.route.snapshot.params.name
          };
    }

    getCategoria(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.videoService.getCategoria(id).subscribe(categoria => this.categoria = categoria);
    }

    getVideos(): void {
      this.videoService.getVideos().subscribe(videos => this.videos = videos);

  }
    goBack(): void {
        this.location.back();
    }
}
