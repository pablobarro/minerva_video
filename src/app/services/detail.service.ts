import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { Video } from '../video';
import { Categoria } from '../categoria';
import { VIDEOS, CATEGORIAS } from '../mock-videos';

@Injectable()

export class VideoService {
    constructor(
    ) {}
    getVideos(): Observable<Video[]> {
        return of(VIDEOS);
    }
    getCategorias(): Observable<Categoria[]> {
        return of(CATEGORIAS);
    }
    getVideo(id: number): Observable<Video> {
        return of(VIDEOS.find(video => video.id === id));
    }
}
