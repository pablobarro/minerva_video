import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Video } from '../video';
import { VideoService } from '../services/detail.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'video_detalle',
    templateUrl: '../detalle/video_detalle.html',
    styleUrls: ['./video.component.sass'],
    providers: [VideoService]
})

export class VideoComponent implements OnInit {
    public video: Video;
    public videos: Video[];
    public categoriaVideo: {categoria: string; };
    constructor(
        private route: ActivatedRoute,
        private videoService: VideoService,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.getVideo();
        this.getVideos();
    }

    getVideo(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.videoService.getVideo(id).subscribe(video => this.video = video);

    }
    getVideos(): void {
        this.videoService.getVideos().subscribe(videos => this.videos = videos);
    }
    goBack(): void {
        this.location.back();
    }
}

