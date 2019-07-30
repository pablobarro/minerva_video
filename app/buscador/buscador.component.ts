import {Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { Categoria } from '../categoria';
import { VideoService } from '../services/detail.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'buscador',
    templateUrl: '../buscador/buscador.html',
    styleUrls: ['./buscador.component.sass'],
    providers: [VideoService]
})

export class BuscadorComponent implements OnInit {
    public videos: Video[];
    public video: Video;
    constructor(
        private videoService: VideoService
        ){
        this.video = new Video();
        }
    ngOnInit() {
        this.getVideos();

    }
    getVideos(): void {
        this.videoService.getVideos().subscribe(videos => this.videos = videos);
    }

}
