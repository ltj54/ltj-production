# ltj-production

Statisk nettside med norsk og svensk innhold. Ingen byggetrinn er nødvendig.

## Lokal visning

Kjør `start-local-server.ps1` og åpne adressen som oppgis i terminalen.
Legg til `/sv/` i adressen for å se den svenske forsiden.

## Språkversjoner

| Norsk | Svensk |
| --- | --- |
| `/` | `/sv/` |
| `/nettsider.html` | `/sv/webbplatser.html` |
| `/nettsidesjekk.html` | `/sv/webbplatskontroll.html` |
| `/synlighet.html` | `/sv/synlighet.html` |
| `/personvern.html` | `/sv/integritet.html` |

Det er bevisst ingen språkvelger eller automatisk språkviderekobling.
De svenske sidene kan deles med direkte lenke og er oppført i sitemap.xml.
Hvert språk har egen canonical-adresse og gjensidige hreflang-lenker.

`style.css`, `site.js`, font og prosjektbilder er felles for begge språk.
Synlige tekster, metadata og skjemaetiketter ligger i HTML-filene.
Meldinger for innsending av skjema oversettes i `site.js` ut fra HTML-språket.
Begge språk bruker samme Formspree-mottaker. Svenske skjemaer har svensk
emne og et skjult `language=sv`-felt.

Svenske fra-priser er 1 990 svenske kroner, ikke en valutakonvertering av
den norske prisen. Eksempelrapporten er fortsatt på norsk og er merket
som det på den svenske siden. Prosjektnavn beholdes på originalspråket.

`og-image-sv.svg` er kilden til det svenske delingsbildet `og-image-sv.jpg`.
Ved oppdatering av kilden kan JPG-filen gjenskapes med ImageMagick:

```powershell
magick -background '#fbf7f4' og-image-sv.svg -quality 90 og-image-sv.jpg
```

Endringer publiseres først når nettstedets filer er lastet opp eller
publisert gjennom den eksisterende løsningen. Lokale tester publiserer ikke.
