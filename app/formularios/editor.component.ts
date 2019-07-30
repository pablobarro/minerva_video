import {Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Video } from '../video';
import { Categoria } from '../categoria';
import { VideoService } from '../services/detail.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'editor',
    templateUrl: '../formularios/editor.html',
    styleUrls: ['./editor.component.sass'],
    providers: [VideoService]
})

export class EditorComponent implements OnInit {
   @Input() video: Video;
    public videos: Video[];
   // public video: Video;
    //public videoSeleccionado: Video;
    public categorias: Categoria[];
    constructor(
        private route: ActivatedRoute,
        private videoService: VideoService,
        private location: Location
        )
        {
        this.video = new Video();
        }
    ngOnInit() {
        this.getVideos();
        this.getVideo();
    }
    
    getVideos(): void {
        this.videoService.getVideos().subscribe(videos => this.videos = videos);
    }
    getVideo(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.videoService.getVideo(id).subscribe(video => this.video = video);
        console.log(id);

    }
    getCategorias(): void {
        this.videoService.getCategorias().subscribe(categorias => this.categorias = categorias);
    }
    goBack(): void {
        this.location.back();
      }
   
    add(video): void {
        this.videoService.addVideo(video).subscribe(video => {this.videos.push(video)});

    }
    update(): void {
        this.videoService.updateVideo(this.video).subscribe(() => this.goBack());
    }
    delete(video: Video): void {
        this.videos = this.videos.filter(v => v !== video);
        this.videoService.deleteVideo(video).subscribe();
    }
}
