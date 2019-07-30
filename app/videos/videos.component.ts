import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Video } from '../video';
import { VideoService } from '../services/detail.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'videos',
    templateUrl: '../videos/videos.html',
    styleUrls: ['./videos.component.sass'],
    providers: [VideoService]
})

export class VideosComponent implements OnInit {
    public video: Video;
    public videos: Video[];
    public categoriaVideo: {categoria: string; };
    constructor(
        private route: ActivatedRoute,
        private videoService: VideoService,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.getVideos();
    }

    getVideos(): void {
        this.videoService.getVideos().subscribe(videos => this.videos = videos);
    }
    
    goBack(): void {
        this.location.back();
    }
}

