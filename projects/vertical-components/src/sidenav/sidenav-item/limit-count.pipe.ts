import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "limitCount"
})
export class LimitCountPipe implements PipeTransform {
  transform(value: number) {
    // Only return if input is a number. Numbers higher than 99 will be shortened to "99+". Decimal numbers are not valid (any decimal places will be cut of).
    return value > 99 ? '99+' : value == 0 ? null : isNaN(value) ? null : Math.trunc(+value);
  }
}