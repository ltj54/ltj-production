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

`og-image.svg` og `og-image-sv.svg` er kildene til delingsbildene på norsk
og svensk. De bruker samme tekstuttrykk og fjellsymbol som nettstedet.
JPG-filene kan gjenskapes med ImageMagick:

```powershell
magick -background '#fbf7f4' og-image.svg -quality 90 og-image.jpg
magick -background '#fbf7f4' og-image-sv.svg -quality 90 og-image-sv.jpg
```

Endringer publiseres først når nettstedets filer er lastet opp eller
publisert gjennom den eksisterende løsningen. Lokale tester publiserer ikke.

## Lokal revisjon av tilbud og prosjektvisning

Begge språkversjonene av forsiden tilbyr en gratis, uforpliktende skisse.
Nettsidetilbudet på undersidene beskriver fastpris 1 990 kr for en skriftlig
avgrenset grunnløsning. Norsk pris er i norske kroner, svensk pris i svenske kroner.
Lars presenteres én gang i den synlige teksten på hver forside. Antall sider,
endringsrunder og eventuelle driftsvilkår er ikke oppdiktet eller fastsatt her.
Eksterne abonnementer og videre arbeid avklares separat. Eksisterende
Formspree-oppsett er beholdt og skal ikke testes med en reell innsending
som del av denne revisjonen.

Prosjektene vises uten direktelenker til kundesidene. Eksisterende
prosjektbilder er beholdt og omtales ikke som skjermbilder. Nye desktop-/
mobilskjermbilder kan erstatte dem etter visuell gjennomgang. Overskriftene
«Utvalgte prosjekter» / «Utvalda projekt» viser at listen er et utvalg.
Forsidene har hvit bakgrunn, én hovedknapp og tre tekstlenker til tjenestene.
Prosjektlisten ligger i et lukket, innebygd details-element og kan åpnes uten
JavaScript. Kontaktinformasjonen står i bunnteksten. Forsidene har ingen
sticky navigasjon eller krympende introduksjon. Pris og vilkår står på undersidene.
De generiske prosessoverskriftene er fjernet; de konkrete trinnene har egne
overskrifter på nettside- og nettsidesjekksidene på begge språk.

## Språk og innhold

- Bruk nøkterne, konkrete beskrivelser av arbeidet og leveransen.
- Unngå klisjeer, selvskryt, barnlige forklaringer og formuleringer om
  «riktig retning» eller «fra idé til …».
- Ikke beskriv tilbudet som «enkelt», «småretting» eller «for små virksomheter».
- Presenter Lars med navn i kontaktfeltet fremfor en gjentatt introduksjon.
- Hold tilbud og vilkår samordnet på norsk og svensk, med riktig valuta.
- Behold skrifttypen, og ikke legg til genererte dekorbilder som erstatning
  for dokumentasjon av faktiske prosjekter.

Tjenestesidene har én samlet beskrivelse av pris og omfang. Tillegg,
løpende kostnader og videre arbeid skal fremgå uten gjentakelser i flere
seksjoner. Eksempelrapporten er tilgjengelig som PDF-lenke. Den er ikke
endret i denne revisjonen. Kontaktskjemaene bruker «Send melding» /
«Skicka meddelande» og har oversatte statusmeldinger.

Revisjonen er lokal inntil Lars uttrykkelig ber om publisering. Forsidene
og nettsidetilbudet på begge språk er kontrollert lokalt ved bredder på
320, 390, 768 og 1440 piksler. Prosjektlenker internt på siden, dialoger,
Escape og innsending med simulert svar er kontrollert. Ingen reelle
henvendelser ble sendt til Formspree under testen.
