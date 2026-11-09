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

En avtalt grunnløsning har fastpris 1 990 svenske kroner på den svenske
siden. Webbplatskontroll har fortsatt fra-pris 1 990 svenske kroner.
Eksempelrapporten er på norsk og er merket som det på den svenske siden.
Prosjektnavn beholdes på originalspråket.

`og-image-sv.svg` er kilden til det svenske delingsbildet `og-image-sv.jpg`.
Ved oppdatering av kilden kan JPG-filen gjenskapes med ImageMagick:

```powershell
magick -background '#fbf7f4' og-image-sv.svg -quality 90 og-image-sv.jpg
```

Endringer publiseres først når nettstedets filer er lastet opp eller
publisert gjennom den eksisterende løsningen. Lokale tester publiserer ikke.

## Lokal revisjon av tilbud og prosjektvisning

Begge språkversjonene av forsiden og nettsidetilbudet beskriver en gratis,
uforpliktende skisse og fastpris 1 990 kr for en skriftlig avgrenset
grunnløsning. Norsk pris er i norske kroner, svensk pris i svenske kroner.
Lars presenteres én gang i den synlige teksten på hver forside. Antall sider,
endringsrunder og eventuelle driftsvilkår er ikke oppdiktet eller fastsatt her.
Eksterne abonnementer og videre arbeid avklares separat. Eksisterende
Formspree-oppsett er beholdt og skal ikke testes med en reell innsending
som del av denne revisjonen.

På den norske forsiden lenkes tre publiserte prosjekter direkte: davidsson.no,
emidsoe.no og www.breathesenja.com. Eksisterende prosjektbilder er beholdt
og omtales ikke som skjermbilder. Nye desktop-/mobilskjermbilder kan erstatte
dem etter visuell gjennomgang. Prosjektlistene er merket som et utvalg.
Introduksjonen på begge forsider scroller normalt; bare navigasjonen er sticky.

Revisjonen er lokal inntil Lars uttrykkelig ber om publisering. Manuell
nettleserkontroll av desktop, mobil, tastatur og dialog gjenstår når en
kontrollert nettleser er tilgjengelig.
