# Flight Finder

![img.png](img.png)

## Inleiding
Flight finder is een webapp om de status van je vlucht te bekijken.
Middels het invoerveld kan een vluchtnummer (van de huidige dag)ingevuld worden.
Aan de hand van dit vluchtnummer wordt de API van aerodata aangesproken om de vluchtgegevens op te halen. 
Ook wordt de API van de api.checkwx.com aangesproken om het weer op te halen van de lucht havens. Via de flighttracker pagina kan men alle vluchten bekijken die het vliegtuig die dag heeft aangedaan.




## API's

De externe API's die zijn gebruikt:

* ### FlightInfo

Provider: https://rapidapi.com/aedbx-aedbx/api/aerodatabox/

API KEY: -

* ### Weather
Provider: https://api.checkwx.com

API KEY: -

* ### FireBase
Provider: FireBase

REACT_APP_FB_API_KEY=--
REACT_APP_FB_AUTH_DOMAIN=-
REACT_APP_FB_DB_URL=-

REACT_APP_FB_PROJECT_ID=-
REACT_APP_FB_STORAGE_BUCKET=-
REACT_APP_FB_MESSAGING_SENDER_ID=-
REACT_APP_FB_APP_ID=-
REACT_APP_FB_MEASUREMENT_ID=-


## Installatie

1. Installeer NodeJs, hier te downloaden (https://nodejs.org/)
2. Pak de zip uit
3. Open een console en ga naar de root van de projectmap
4. Type `npm install` + `Enter` om de dependencies te installeren
5. Maak een .env file in de root van het project
6. Kopieer het format uit de .env.dist
7. Vul de variabelen in met gegevens uit het kopje API's hierboven.
8. De Variabele TEST_MODE kun je gebruiken om ipv een echte API een voorbeeld Object te gebruiken. Zet deze op true om een voorbeeld object te te gebruiken.
9. Maak een nieuwe build met `npm run build`
10. Run vervolgens `npm start` om de applicatie te starten
11. Ga naar http://localhost:3000 om de applicatie te bekijken
12. Wanneer je de TEST MODE aangepast hebt is een herstart van de app nodig. Gebruik hiervoor `ctrl + C` en vervolgens `npm start`

--

Om een nieuwe build te maken gebruik `NPM run build`

### Gebruik van de applicatie

#### Inloggen
Om in  te loggen  kun je een nieuw account aanmaken.
Het is ook mogelijk een bestaand account te gebruiken.
Gebruik hiervoor:
* Gebruikersnaam: flip@flightfinder.nl
* Wachtwoord: FL!ghtFind3r

#### Vluchten zoeken

Om een vlucht te zoeken heb je uiteraard een vluchtnummer nodig.
Een eindgebruiker krijgt zijn vluchtnummer toegestuurd vanuit de vliegmaatschappij. Om zelf te testen met echte vluchtnummers ga hiervoor naar: 
* https://www.schiphol.nl/nl/aankomst

![img_1.png](img_1.png)

Elk van deze vluchtnummer kan worden gebruikt.
Let op alleen vluchtnummers van de huidige dag kunnen worden gebruikt.

