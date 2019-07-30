import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Video } from '../video';
import { Categoria } from '../categoria';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':
        'aplication/json'
    })
};


@Injectable()
export class VideoService {
    private videosUrl = 'api/VIDEOS';
    constructor(
        private http: HttpClient

    ) {}
    /*getVideos(): Observable<Video[]> {
        return of(VIDEOS);
    }*/
    getVideos(): Observable<Video[]> {
        return this.http.get<Video[]>(this.videosUrl);
    }
    getCategorias(): Observable<Categoria[]> {
        return this.http.get<Categoria[]>(this.videosUrl);
    }
    /*getVideo(id: number): Observable<Video> {
        return of(VIDEOS.find(video => video.id === id));
    }*/
    getVideo(id: number): Observable<Video> {
        const url = `${this.videosUrl}/${id}`;
        return this.http.get<Video>(url);
    }
    getCategoria(id: number): Observable<Categoria> {
        const url = `${this.videosUrl}/${id}`;
        return this.http.get<Categoria>(url);
    }
    addVideo(video: Video): Observable<Video> {
        return this.http.post<Video>(this.videosUrl, video, httpOptions);
    }
    deleteVideo(video: Video | number): Observable<Video> {
        const id = typeof video === 'number' ? video : video.id;
        const url = `${this.videosUrl}/${id}`;

        return this.http.delete<Video>(url, httpOptions);
    }

    updateVideo(video: Video): Observable<any> {
        return this.http.put(this.videosUrl, video, httpOptions);
    }
}
