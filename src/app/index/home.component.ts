import {Component, OnInit } from '@angular/core';
import {Video} from '../video';

import { VideoService } from '../services/detail.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'home',
    templateUrl: '../views/home.html',
    styleUrls: ['./home.component.sass'],
    providers: [VideoService]
})

export class HomeComponent implements OnInit {
    public videos: Video[];
    public portada: 'videos/abstracto/portada.mp4';

    constructor(
        // tslint:disable-next-line:variable-name
        private _videoService: VideoService,
    ) {}

    ngOnInit() {
        this.getVideos();

    }


    getVideos(): void {
        this._videoService.getVideos().subscribe(videos => this.videos = videos);
    }
}
