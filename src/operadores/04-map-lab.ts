import { fromEvent } from "rxjs";
import { filter, map, tap } from "rxjs/operators";

const texto = document.createElement("div");
texto.innerHTML = `
Esse adipisicing elit sit consectetur mollit non aute tempor occaecat. Mollit amet ipsum nostrud amet occaecat. Eiusmod in consequat minim magna nostrud fugiat ut reprehenderit laboris deserunt consequat nisi. Occaecat mollit in occaecat do mollit aliquip labore Lorem.
<br/><br/>
Do voluptate veniam sit ullamco consectetur. Laborum duis aute exercitation velit laboris aute veniam minim. Cupidatat in qui officia dolore ea cillum minim duis. Esse eu aliqua consectetur minim sunt ea cupidatat anim. Adipisicing esse commodo in qui pariatur ut sint velit mollit culpa. Velit consequat nisi tempor irure pariatur occaecat nulla minim consectetur cillum laboris. Quis non enim in magna irure voluptate nisi sint minim deserunt in esse.

<br/><br/>
Esse adipisicing elit sit consectetur mollit non aute tempor occaecat. Mollit amet ipsum nostrud amet occaecat. Eiusmod in consequat minim magna nostrud fugiat ut reprehenderit laboris deserunt consequat nisi. Occaecat mollit in occaecat do mollit aliquip labore Lorem.

<br/><br/>
Ullamco ut excepteur laborum est cillum nulla esse ea cillum fugiat labore adipisicing deserunt. Nisi et mollit enim labore officia anim. Do in velit laborum fugiat. Occaecat consequat irure ad aliqua elit aute eiusmod nostrud dolore. Excepteur deserunt Lorem est officia culpa. Deserunt elit anim irure consectetur adipisicing.

<br/><br/>
Sint duis mollit veniam ullamco adipisicing est nisi sunt enim cillum aliqua sunt est. Ut est occaecat consequat aliqua ad consectetur Lorem. Pariatur veniam ea quis ad ex irure pariatur quis sunt laboris veniam minim. Anim occaecat sunt sunt excepteur exercitation duis id in non est consectetur ea ex. Ullamco ea laborum culpa aliquip commodo aliqua eiusmod duis ex pariatur dolor quis.

<br/><br/>
Fugiat amet exercitation et consectetur anim ipsum do excepteur nisi. Aliqua ipsum ipsum reprehenderit veniam laboris nulla exercitation ullamco ad. Ut culpa irure labore sunt elit proident veniam tempor proident est do ea magna laborum. Pariatur sit anim ex ad dolore eiusmod anim irure occaecat consectetur. Sit sit aliquip cupidatat incididunt veniam sunt esse. Anim consectetur do quis sint et amet. Sunt enim id cupidatat duis cupidatat mollit duis.

<br/><br/>
Laboris commodo proident voluptate sunt mollit quis sint irure non eiusmod excepteur. Aute elit irure consequat Lorem eu. Amet tempor consequat culpa sunt ullamco irure duis aliquip Lorem est ullamco qui.
<br/><br/>
Laboris commodo proident voluptate sunt mollit quis sint irure non eiusmod excepteur. Aute elit irure consequat Lorem eu. Amet tempor consequat culpa sunt ullamco irure duis aliquip Lorem est ullamco qui.

<br/><br/>
Officia nisi mollit nulla esse elit do aliquip eiusmod commodo. Mollit anim dolor ullamco laboris mollit fugiat minim commodo quis tempor commodo voluptate. Lorem ut ad officia cillum aliquip laboris cillum ad esse ut aliquip.

<br/><br/>
Consequat esse do do culpa adipisicing aliquip magna. Minim nulla Lorem culpa cillum ullamco fugiat. Eiusmod excepteur ipsum amet est ullamco est cillum eiusmod ex. Ex ex veniam labore pariatur aute incididunt cillum qui elit consequat do reprehenderit labore. Quis officia occaecat ea deserunt eiusmod minim cillum ex sunt deserunt veniam est nulla enim. Laboris esse eiusmod dolore fugiat ea officia minim ullamco laboris.

<br/><br/>
Esse do incididunt sint nulla duis id eiusmod reprehenderit. Ea do ad sit do reprehenderit Lorem eu in non dolor consectetur aute occaecat tempor. Non sint duis nisi excepteur adipisicing velit. Tempor nostrud veniam mollit laboris consequat aliquip Lorem aliquip reprehenderit aliquip laboris.

<br/><br/>
Ex dolor ex duis dolore elit laborum id. Consequat est nulla aliqua deserunt nulla dolore velit anim cillum. Dolor ad sint ad occaecat ut est ad nisi eiusmod consectetur laboris. Anim officia occaecat in cillum officia aliquip reprehenderit voluptate est. Eu aliquip Lorem enim magna aliquip.

<br/><br/>
Velit reprehenderit est et sint sint ut commodo voluptate. Occaecat laboris voluptate aliqua ex ea ex non qui dolor fugiat. Amet officia eu nostrud ex adipisicing nostrud sint reprehenderit proident. Excepteur incididunt do qui exercitation sint ea aliquip non laborum amet anim ad do. Deserunt laboris dolore dolor sint do in incididunt. Ut cillum Lorem duis ea sit nisi aliquip commodo eu consequat commodo proident sint non.
<br/><br/>

Deserunt mollit cillum est eiusmod pariatur occaecat amet pariatur reprehenderit. Ex est reprehenderit nostrud ullamco elit commodo elit fugiat cillum minim qui. Id reprehenderit ex mollit deserunt consectetur nisi in duis consequat. Tempor officia irure irure consectetur proident est officia commodo est et aute adipisicing. Aute tempor culpa ullamco minim cupidatat qui sint dolore id sit cillum.

<br/><br/>
Veniam voluptate sint officia adipisicing labore incididunt veniam incididunt. Id fugiat commodo voluptate nisi irure veniam nulla amet eu enim. Eu excepteur aliqua do laborum magna elit ullamco sit anim officia proident enim cillum qui. Proident ad cillum culpa ullamco veniam duis magna non ut aliqua do duis ex. Do incididunt deserunt labore fugiat aute sint enim aliqua cupidatat proident cupidatat. Reprehenderit id pariatur reprehenderit cillum laborum aliquip dolore id enim mollit.

<br/><br/>
Est aute ullamco aute aliqua culpa nulla nisi ad ullamco magna. Est veniam ut amet in veniam excepteur magna. Deserunt aliqua mollit eu est do ea ex dolor adipisicing. Cillum sit commodo proident velit nostrud. Sint est proident aliquip velit est nostrud. Lorem amet nulla qui occaecat laborum est est sint sit voluptate et nisi esse veniam.
<br/><br/>

<br/><br/>
Consectetur voluptate in qui occaecat est ullamco sunt. Eu enim in mollit officia ullamco. Cupidatat magna sunt eiusmod culpa aliquip mollit adipisicing in enim ut aute id consectetur veniam. Mollit nulla deserunt consequat magna consectetur amet commodo non et cupidatat dolor officia commodo. Nulla cillum tempor nostrud sunt dolor aute aliqua consectetur magna veniam. Minim deserunt occaecat id ex incididunt cupidatat voluptate velit.
`;

document.body.append(texto);
const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");

document.body.append(progressBar);

// Streams

const scrollEvent$ = fromEvent(document, "scroll");
const calcularScrollPorcentaje = (event: any) => {
  const {
    clientHeight,
    scrollHeight,
    scrollTop,
  } = event.target.documentElement;
  return 100 * (scrollTop / (scrollHeight - clientHeight));
};

const progress$ = scrollEvent$.pipe(
  map(calcularScrollPorcentaje),
//   tap(console.log)
);

const showAlert$ = progress$.pipe(
    filter(porcentaje=> porcentaje === 100),
)

showAlert$.subscribe(()=>{console.log('mostrar alerta')})

progress$.subscribe((progress) => {
  progressBar.style.width = `${progress}%`;
});
