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

API KEY: 78a9fb5495msh045e43a0f97431ap1dfa12jsn8cadd93e92f2

* ### Weather
Provider: https://api.checkwx.com

API KEY: cc13c7e73d2242d796c396c518

* ### FireBase
Provider: FireBase

REACT_APP_FB_API_KEY=AIzaSyBeEU00YIqGA11BOgdo7aSd9G7oSFRrcEU
REACT_APP_FB_AUTH_DOMAIN=where-is-my-plane-6e5e7.firebaseapp.com
REACT_APP_FB_DB_URL=https://where-is-my-plane-6e5e7-default-rtdb.europe-west1.firebasedatabase.app

REACT_APP_FB_PROJECT_ID=where-is-my-plane-6e5e7
REACT_APP_FB_STORAGE_BUCKET=where-is-my-plane-6e5e7.appspot.com
REACT_APP_FB_MESSAGING_SENDER_ID=156334592452
REACT_APP_FB_APP_ID=1:156334592452:web:cbf1b4c75d0302ad659491
REACT_APP_FB_MEASUREMENT_ID=G-PBGDK87Y2E


## Installatie

1. Pak de zip uit
2. Run `npm install` om de dependencies te installeren
3. Maak een .env file in de root van het project
4. Kopieer het format uit de .env.dist
5. Vul de variabelen in met gegevens uit het kopje API's hierboven.
6. Maak een nieuwe build met `npm run build`
7. Run `npm start` om de applicatie te starten
8. Ga naar http://localhost:3000 om de applicatie te bekijken

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

