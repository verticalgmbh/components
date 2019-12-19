import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "limitCount"
})
export class LimitCountPipe implements PipeTransform {
  transform(value: number) {
    return value > 99 ? '99+' : value == 0 ? null : isNaN(value) ? null : Math.trunc(+value);
  }
}