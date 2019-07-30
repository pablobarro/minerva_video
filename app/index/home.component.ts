import {Component, OnInit } from '@angular/core';
import {Video} from '../video';
import {Categoria} from '../categoria';
import { VideoService } from '../services/detail.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'home',
    templateUrl: '../index/home.html',
    styleUrls: ['./home.component.sass'],
    providers: [VideoService]
})

export class HomeComponent implements OnInit {
    //public videos: Video[];
    //public categorias: Categoria[];
    public portada: 'videos/abstracto/portada.mp4';

    constructor(
        // tslint:disable-next-line:variable-name
        private _videoService: VideoService,
    ) {}

    ngOnInit() {
        

    }


}
