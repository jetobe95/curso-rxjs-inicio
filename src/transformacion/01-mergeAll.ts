import { ajax } from "rxjs/ajax";
import { fromEvent, Observable } from "rxjs";
import { debounceTime, map, mergeAll, pluck } from "rxjs/operators";
import { GithubUser } from "../interfaces/githubUser.interface";
/**
 * MergeAll:Por cada cada evento del source se subscribe y lo manda 
 */
const input = document.createElement("input");
const orderedList = document.createElement("ol");
document.body.append(input, orderedList);

// Helpers
function mostrarUsuarios(usuarios: GithubUser[]) {
  orderedList.innerHTML = "";
  console.log(usuarios)
  for (const usuario of usuarios) {
      const li = document.createElement('li')
      const img = document.createElement('img')
      
      img.src = usuario.avatar_url
      
      const anchor = document.createElement('a')
      anchor.text = 'Ver página'
      anchor.target = '_blank'
      anchor.href = usuario.html_url

      li.append(img,usuario.login + '',anchor)
      orderedList.append(li)
      

  }
}

const input$ = fromEvent(input, "keyup");

input$
  .pipe(
    debounceTime(500),
    pluck("target", "value"),
    map<string, Observable<any>>((value) => {
      return ajax.getJSON(`https://api.github.com/search/users?q=${value}`);
    }),
    mergeAll(),
    pluck<any, GithubUser[]>("items")
  )
  .subscribe(mostrarUsuarios);
