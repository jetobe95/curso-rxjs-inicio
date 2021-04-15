import { of, pipe } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, pluck } from "rxjs/operators";

const url = "https://api.github.com/users?per_page=5";

ajax(url)
  .pipe(
    pluck("response"),
    catchError((error) => {
      console.warn("error ", error);
      return of([])
    })
  )
  .subscribe((usuarios) => console.log("usuarios: ", usuarios));
