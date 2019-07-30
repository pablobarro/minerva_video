import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Video } from './video';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const VIDEOS = [
      {
          id: 1,
          name: 'Seul',
          categoria: 'ciudades',
          // tslint:disable-next-line:max-line-length
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus dapibus sem quis sodales. Donec at nibh rutrum lectus condimentum venenatis. Cras eu semper metus, vel bibendum ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent viverra quis elit sit amet vestibulum. Suspendisse potenti. Sed a neque auctor tortor luctus varius nec sagittis neque.',
          poster: 'https://cdn.pixabay.com/photo/2017/03/21/17/10/nightlife-2162772_960_720.jpg',
          src: 'https://player.vimeo.com/video/323496013'
      },
      {
          id: 2,
          name: 'Street',
          categoria: 'ciudades',
          // tslint:disable-next-line:max-line-length
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus dapibus sem quis sodales. Donec at nibh rutrum lectus condimentum venenatis. Cras eu semper metus, vel bibendum ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent viverra quis elit sit amet vestibulum. Suspendisse potenti. Sed a neque auctor tortor luctus varius nec sagittis neque.',
          poster: 'https://cdn.pixabay.com/photo/2015/11/06/11/32/girl-1026246_960_720.jpg',
          src: 'https://player.vimeo.com/video/321298091'
      },
      {
          id: 3,
          name: 'Walking',
          categoria: 'ciudades',
          // tslint:disable-next-line:max-line-length
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus dapibus sem quis sodales. Donec at nibh rutrum lectus condimentum venenatis. Cras eu semper metus, vel bibendum ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent viverra quis elit sit amet vestibulum. Suspendisse potenti. Sed a neque auctor tortor luctus varius nec sagittis neque.',
          poster: 'https://cdn.pixabay.com/photo/2017/08/12/19/01/walk-2635038_960_720.jpg',
          src: 'https://player.vimeo.com/video/321298091'
      },
      {
          id: 4,
          name: 'Polygon',
          categoria: 'abstracto',
          // tslint:disable-next-line:max-line-length
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus dapibus sem quis sodales. Donec at nibh rutrum lectus condimentum venenatis. Cras eu semper metus, vel bibendum ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent viverra quis elit sit amet vestibulum. Suspendisse potenti. Sed a neque auctor tortor luctus varius nec sagittis neque.',
          poster: 'https://cdn.pixabay.com/photo/2017/03/25/18/06/color-2174066_960_720.png',
          src: 'https://player.vimeo.com/video/183786490'
      },
      {
          id: 5,
          name: 'Triangle',
          categoria: 'abstracto',
          // tslint:disable-next-line:max-line-length
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus dapibus sem quis sodales. Donec at nibh rutrum lectus condimentum venenatis. Cras eu semper metus, vel bibendum ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent viverra quis elit sit amet vestibulum. Suspendisse potenti. Sed a neque auctor tortor luctus varius nec sagittis neque.',
          poster: 'https://cdn.pixabay.com/photo/2016/05/24/14/54/polygon-1412485_960_720.png',
          src: 'http://player.vimeo.com/video/318978190'
      },
      {
          id: 6,
          name: 'Sphere',
          categoria: 'abstracto',
          // tslint:disable-next-line:max-line-length
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus dapibus sem quis sodales. Donec at nibh rutrum lectus condimentum venenatis. Cras eu semper metus, vel bibendum ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent viverra quis elit sit amet vestibulum. Suspendisse potenti. Sed a neque auctor tortor luctus varius nec sagittis neque.',
          poster: 'https://cdn.pixabay.com/photo/2017/03/25/18/06/color-2174066_960_720.png',
          src: 'https://player.vimeo.com/video/183786490'
      },
      {
          id: 7,
          name: 'African',
          categoria: 'personas',
          // tslint:disable-next-line:max-line-length
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus dapibus sem quis sodales. Donec at nibh rutrum lectus condimentum venenatis. Cras eu semper metus, vel bibendum ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent viverra quis elit sit amet vestibulum. Suspendisse potenti. Sed a neque auctor tortor luctus varius nec sagittis neque.',
          poster: 'https://cdn.pixabay.com/photo/2017/04/03/03/58/african-2197414_960_720.jpg',
          src: 'https://player.vimeo.com/video/158298505'
      },
      {
          id: 8,
          name: 'Asian',
          categoria: 'personas',
          // tslint:disable-next-line:max-line-length
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus dapibus sem quis sodales. Donec at nibh rutrum lectus condimentum venenatis. Cras eu semper metus, vel bibendum ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent viverra quis elit sit amet vestibulum. Suspendisse potenti. Sed a neque auctor tortor luctus varius nec sagittis neque.',
          poster: 'https://cdn.pixabay.com/photo/2016/11/08/05/16/buddhist-1807518_960_720.jpg',
          src: 'https://player.vimeo.com/video/136216213'
      },
      {
          id: 9,
          name: 'European',
          categoria: 'personas',
          // tslint:disable-next-line:max-line-length
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus dapibus sem quis sodales. Donec at nibh rutrum lectus condimentum venenatis. Cras eu semper metus, vel bibendum ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent viverra quis elit sit amet vestibulum. Suspendisse potenti. Sed a neque auctor tortor luctus varius nec sagittis neque.',
          poster: 'https://cdn.pixabay.com/photo/2014/07/25/08/48/alley-401540_960_720.jpg',
          src: 'https://player.vimeo.com/video/182666664'
      }
   ];
   
   
 
 
    
    const CATEGORIAS = [
      {
          id: 1,
          name: 'ciudades',
          imagen: 'https://cdn.pixabay.com/photo/2015/03/26/10/04/new-york-690868_960_720.jpg'
      },
      {
          id: 2,
          name: 'abstracto',
          imagen: 'https://cdn.pixabay.com/photo/2017/07/03/20/17/abstract-2468874_960_720.jpg'

      },
      {
          id: 3,
          name: 'personas',
          imagen: 'https://cdn.pixabay.com/photo/2014/05/03/00/56/summerfield-336672_960_720.jpg'

      }
     
    ];

    return {VIDEOS, CATEGORIAS};
  }
  genId(VIDEOS: Video[]): number {
    return VIDEOS.length > 0 ? Math.max(...VIDEOS.map(video => video.id)) + 1 : 1;
  }
  
}
