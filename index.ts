import { Observable } from "rxjs";

Observable.from([2, 3, 5, 8, 10])
  .filter(item => item % 2 === 0)
  .forEach(even => console.log(even));
