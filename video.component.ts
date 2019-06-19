import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Video } from '../video';
import { VideoService } from '../services/detail.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'video_detalle',
    templateUrl: '../views/video_detalle.html',
    styleUrls: ['./video.component.sass'],
    providers: [VideoService]
})

export class VideoComponent implements OnInit {
    public video: Video;

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

    getVideo(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        // tslint:disable-next-line:no-shadowed-variable
        this.videoService.getVideo(id).subscribe(video => this.video = video);

    }
    goBack(): void {
        this.location.back();
    }
}
