import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform{

    transform(value: any, arg: any): any{
        if ( arg === '' || arg.length < 3) { return value; }
        const resultVideo = [];
        for(const video of value){
            if(video.name.toLowerCase().indexOf(arg) > -1) {
                resultVideo.push(video);
            };
        };
        return resultVideo;
    }
}