# screen implosion — versión HTML

Reescritura del sitio de Gatsby (`../src`) en HTML plano. Sin build, sin
dependencias, sin Node. Lo que hay en esta carpeta es lo que se sirve.

## Estructura

```
docs/
├── index.html              /            (WELCOME FRIENDS!)
├── 404.html                /404.html
├── 404/index.html          /404/
├── arena/index.html        /arena/
├── surfize/index.html      /surfize/
├── desert/index.html       /desert/
├── downhill/index.html     /downhill/
├── output/index.html       /output/
├── devlog/index.html       /devlog/
├── presskit/index.html     /presskit/
├── blogPage/index.html     /blogPage/
├── ovni/                   /ovni/       (página del port a Mega Drive + ROM)
├── css/site.css            toda la hoja de estilos
├── images/                 25 imágenes
├── images_output/          44 fotogramas de OUTPUT
├── fonts/                  Helvetica Neue (Thin, Roman, Medium)
├── *.zip                   las tres descargas
└── CNAME                   screenimplosion.com
```

Las rutas son las mismas que generaba Gatsby, así que ningún enlace
externo al sitio se rompe.

## Ver en local

Los enlaces apuntan a directorios (`/arena/`), así que hace falta un
servidor; con `file://` no funcionan.

```bash
cd docs && python3 -m http.server 8000
# http://localhost:8000
```

## Publicar

Esta carpeta es el sitio entero. Dos formas:

Esta carpeta se llama `docs/` porque GitHub Pages solo admite como origen
la raíz del repositorio o una carpeta con ese nombre exacto — no una
carpeta cualquiera.

En **Settings → Pages**, elegir rama `master` y carpeta `/docs`. A partir
de ahí **publicar es hacer push**: no hay build, ni `gh-pages`, ni
dependencias. El `deploy` de `package.json` y el paquete `gh-pages` se
han retirado porque ya no hacen falta.

El `CNAME` está dentro de la carpeta, así que el dominio se mantiene en
ambos casos.

## Qué se conservó igual, y qué no

El texto visible de cada página es idéntico carácter por carácter al del
build de Gatsby, y las imágenes son las mismas en el mismo orden. El CSS
es la transcripción del que generaba styled-components, con nombres de
clase legibles en lugar de hashes.

Cambios deliberados, todos pequeños:

- **El menú marca la página actual.** Antes el blanco de `.selected`
  dependía de un estado de React que sólo se activaba al hacer clic.
- **Los enlaces de `/output` ahora funcionan.** En el original eran
  `styled.div` con atributo `href`, es decir divs: no se podía hacer clic
  en ninguno de los 39. Ahora son `<a>` con el mismo estilo, así que se
  ven igual y además llevan a algún sitio.
- **El 404 ya no duplica el layout.** `404.js` envolvía la página en
  `<Layout>` y encima `gatsby-plugin-layout` la envolvía otra vez, con lo
  que salían dos cabeceras y dos pies. Aquí sale uno.
- **El vídeo es un `<iframe>` de Vimeo** en lugar de `react-player`, con
  las mismas medidas que aquél calculaba (100% × 360px). Esto arregla de
  paso un fallo serio del sitio en producción: `VideoBox.jsx` pasaba
  `config={{ vimeo: { playerOptions: { width: 1200 } } }}`, y ese iframe de
  1200px no cabía en el contenedor de 900. Como `.centro` es un ítem flex
  con `min-width: auto`, no podía encogerse por debajo de su contenido, se
  iba a ~1195px y empujaba la columna derecha fuera de la pantalla. En
  screenimplosion.com las descripciones de arena, surfize, desert y
  downhill no se ven por esto; `/output/`, que no lleva vídeo, se ve bien.
  Aquí se ven las cuatro.
- **Todo el sitio va en Helvetica Neue.** El proyecto original mezclaba
  Cooper Hewitt (en `html` y en los `h3`), Helvetica Neue Medium y Thin, y
  "Playfair Display" para los títulos de juego de `/output/` — y ninguna
  llegaba a cargar: el `@font-face` pedía `format('embedded-opentype')`
  para archivos `.otf` y resolvía `url(../fonts/…)` contra la URL de la
  página en vez de contra la carpeta de fuentes, así que el navegador caía
  en su serif por defecto. Ahora se declara una sola familia,
  `'HelveticaNeue'`, con los tres cortes de `fonts/` mapeados a peso
  (100/200 Thin, 400 Roman, 500/700 Medium), de forma que los
  `font-weight` que el diseño ya usaba eligen el corte. La pila de reserva
  es `'Helvetica Neue', Helvetica, Arial, sans-serif`. Cooper Hewitt y
  Playfair Display ya no se usan en ningún sitio.
- **La lista de `/output/` va alineada a la izquierda.** La columna
  central centra todo su contenido, así que la lista de juegos salía
  centrada. El `text-align: left` está en `.games-list`, de modo que lo
  heredan el encabezado, los títulos y sus créditos, los separadores
  `◊◊◊◊`, "Screening Agenda" con sus fechas y las líneas de contacto.
- **La dirección de contacto de `/output/` va en una línea.** El enlace
  heredaba el `display: block` de `SimpleLink` y partía la frase en tres
  líneas; lleva un modificador `.inline`. El encabezado de la lista se
  envolvió en `.list-heading` para poder separarlo de la primera entrada:
  en el original era texto suelto dentro del grid y no se podía apuntar
  desde CSS.
- **La nav tiene algo más de cuerpo**: `font-weight: 400` (corte Roman) en
  lugar del `100` original.
- **El año del pie está escrito a mano** (2026). Antes lo calculaba
  JavaScript en tiempo de build, y por eso el sitio en producción decía
  2023.

## Cosas que seguían rotas y se han dejado igual

Son del sitio original; se marcan aquí porque ahora se ven de un vistazo.

- ~~Las tipografías no cargan.~~ **Resuelto**: ver abajo.
- **Seis páginas se llaman "Home".** `/`, `/arena/`, `/surfize/`,
  `/desert/`, `/devlog/` y `/presskit/` comparten `<title>Home | screen
  implosion</title>`, y `/blogPage/` lo tiene vacío. Es como estaba.
- ~~El formulario de suscripción no envía nada.~~ **Retirado**: está
  comentado en el pie de las once páginas. No tenía `action` ni manejador,
  así que enviaba por GET a la misma página y dejaba el nombre escrito en
  la URL y en el historial, sin llegar a ningún sitio. El marcado sigue en
  el comentario por si se reactiva con un destino real.
- **`/devlog/`, `/presskit/` y `/blogPage/` están sin contenido**, igual
  que antes: las dos primeras muestran la taza y "WELCOME FRIENDS!", y la
  tercera un "wtf".
- **Los títulos de juego de `/output/`** conservan el amarillo y la
  cursiva, pero ya no piden "Playfair Display": van en Helvetica Neue como
  el resto. La cursiva la sintetiza el navegador, porque no hay corte
  itálico entre los `.otf` del proyecto.

## Lo que se quedó fuera de Gatsby

`gatsby-image`, `gatsby-plugin-sharp` y `gatsby-transformer-remark` no se
usaban: cero consultas GraphQL en todo `src/`, cero archivos Markdown, y
el único componente que importaba `gatsby-image` (`src/components/image.js`)
no lo llamaba nadie. `react-helmet` se sustituye por las etiquetas `<meta>`
escritas en cada página.
