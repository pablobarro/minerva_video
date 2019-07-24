import { Video } from './video';
import { Categoria } from './categoria';

export const VIDEOS: Video[] = [
    {
        id: 1,
        name: 'Seul',
        categoria: 'ciudades',
        // tslint:disable-next-line:max-line-length
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus dapibus sem quis sodales. Donec at nibh rutrum lectus condimentum venenatis. Cras eu semper metus, vel bibendum ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent viverra quis elit sit amet vestibulum. Suspendisse potenti. Sed a neque auctor tortor luctus varius nec sagittis neque.',
        poster: 'https://cdn.pixabay.com/photo/2017/03/21/17/10/nightlife-2162772_960_720.jpg',
        src: '//player.vimeo.com/video/323496013?title=0&portrait=0&byline=0&autoplay=1&loop=1'
    },
    {
        id: 2,
        name: 'Street',
        categoria: 'ciudades',
        // tslint:disable-next-line:max-line-length
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus dapibus sem quis sodales. Donec at nibh rutrum lectus condimentum venenatis. Cras eu semper metus, vel bibendum ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent viverra quis elit sit amet vestibulum. Suspendisse potenti. Sed a neque auctor tortor luctus varius nec sagittis neque.',
        poster: 'img/categorias/ciudades/videos/street.jpg',
        src: 'videos/ciudades/Street_19627.mp4'
    },
    {
        id: 3,
        name: 'Walking',
        categoria: 'ciudades',
        // tslint:disable-next-line:max-line-length
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus dapibus sem quis sodales. Donec at nibh rutrum lectus condimentum venenatis. Cras eu semper metus, vel bibendum ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent viverra quis elit sit amet vestibulum. Suspendisse potenti. Sed a neque auctor tortor luctus varius nec sagittis neque.',
        poster: 'img/categorias/ciudades/videos/walk.jpg',
        src: 'videos/ciudades/Walking_21782.mp4'
    },
    {
        id: 4,
        name: 'Background',
        categoria: 'abstracto',
        // tslint:disable-next-line:max-line-length
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus dapibus sem quis sodales. Donec at nibh rutrum lectus condimentum venenatis. Cras eu semper metus, vel bibendum ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent viverra quis elit sit amet vestibulum. Suspendisse potenti. Sed a neque auctor tortor luctus varius nec sagittis neque.',
        poster: 'img/categorias/abstracto/videos/background.jpg',
        src: 'videos/abstracto/TheBackground_22126.mp4'
    }

    ];
export const CATEGORIAS: Categoria[] = [
    {
        id: 1,
        name: 'ciudades',
        imagen: 'img/categorias/ciudades/portada/portada.jpg'
    },
    {
        id: 2,
        name: 'abstracto',
        imagen: 'img/categorias/abstracto/portada/portada.jpg'

    }
];
