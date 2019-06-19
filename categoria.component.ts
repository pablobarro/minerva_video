import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Video } from '../video';
import { Categoria } from '../categoria';
import { VideoService } from '../services/detail.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'categoria_detalle',
    templateUrl: '../views/categoria_detalle.html',
    styleUrls: ['./categoria.component.sass'],
    providers: [VideoService]
})

export class CategoriaComponent implements OnInit {
    public videos: Video[];
    public categoria: Categoria;
    public categoriaVideo: {categoria: string;};

    constructor(
        private route: ActivatedRoute,
        private _videoService: VideoService,
        private location: Location
    ) {
        console.log(+this.route.snapshot.paramMap.get('id'));
    }

    ngOnInit() {
        this.getVideos();
        this.getCategoria();
        //this.getCategoriaVideo();
        this.categoriaVideo = {
          categoria: this.route.snapshot.params.name
          };
    }

    getCategoria(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        // tslint:disable-next-line:no-shadowed-variable
        this._videoService.getCategoria(id).subscribe(categoria => this.categoria = categoria);
    }

    getVideos(): void {
      this._videoService.getVideos().subscribe(videos => this.videos = videos);

  }
    getCategoriaVideo(){
     // return this.videos.filter((videos) => videos.categoria === this.categoriaVideo);
     /*this.categoriaVideo = {
      categoria: this.route.snapshot.params.name
      };
      var filtroCategoria = this.categoriaVideo;
      console.log(filtroCategoria);*/
  }
    goBack(): void {
        this.location.back();
    }
}
