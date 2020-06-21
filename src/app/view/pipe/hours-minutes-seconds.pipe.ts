import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'hoursMinutesSeconds'
})
@Injectable()
export class HoursMinutesSecondsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let minutes = Math.floor(value / 60);
    let hours = Math.floor(minutes / 60);
    let seconds = Math.floor(value % 60);

    return hours + " hrs, " + minutes + " mins, " + seconds + " secs";
  }

}
