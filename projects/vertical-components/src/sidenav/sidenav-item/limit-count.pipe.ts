import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "limitCount"
})
export class LimitCountPipe implements PipeTransform {
  transform(value: number) {
    // Only return if input is a number. Numbers higher than 99 will be shortened to "99+". Decimal numbers are not valid (any decimal places will be cut of).
    if (value > 99) {
      return '99+';
    }
    else if (value == 0) {
      return null;
    }
    else if (isNaN(value)) {
      return null;
    }
    else {
      return Math.trunc(+value);
    }
  }
}