import {Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { Categoria } from '../categoria';
import { VideoService } from '../services/detail.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'editor',
    templateUrl: '../views/editor.html',
    styleUrls: ['./editor.component.sass'],
    providers: [VideoService]
})

export class EditorComponent implements OnInit {
    public videos: Video[];
    public video: Video;
    public categoria: Categoria;

    constructor(
        private _videoService: VideoService
        )
        {
        this.video = new Video();
        this.categoria = new Categoria();
        }
    ngOnInit() {
        this.getVideos();

    }
    getVideos(): void {
        this._videoService.getVideos().subscribe(videos => this.videos = videos);
    }
    onSubmit(){
       this.videos.push(this.video);
       this.video = new Video();
    }

}
