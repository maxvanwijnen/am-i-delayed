export const getTestFlightObject = () => {
    return  [
        {
            "greatCircleDistance": {
                "meter": 1614949.94,
                "km": 1614.95,
                "mile": 1003.483,
                "nm": 872.003,
                "feet": 5298392.2
            },
            "departure": {
                "airport": {
                    "icao": "EHAM",
                    "iata": "AMS",
                    "name": "Amsterdam, Amsterdam Schiphol",
                    "shortName": "Schiphol",
                    "municipalityName": "Amsterdam",
                    "location": {
                        "lat": 52.3086,
                        "lon": 4.763889
                    },
                    "countryCode": "NL"
                },
                "scheduledTimeLocal": "2022-08-28 18:30+02:00",
                "actualTimeLocal": "2022-08-28 18:30+02:00",
                "scheduledTimeUtc": "2022-08-28 16:30Z",
                "actualTimeUtc": "2022-08-28 16:30Z",
                "terminal": "1",
                "checkInDesk": "2-3",
                "gate": "C18",
                "quality": [
                    "Basic",
                    "Live"
                ]
            },
            "arrival": {
                "airport": {
                    "icao": "LEAL",
                    "iata": "ALC",
                    "name": "Alicante",
                    "shortName": "Alicante",
                    "municipalityName": "Alicante",
                    "location": {
                        "lat": 38.2822,
                        "lon": -0.558156
                    },
                    "countryCode": "ES"
                },
                "scheduledTimeLocal": "2022-08-28 21:10+02:00",
                "actualTimeLocal": "2022-08-28 21:10+02:00",
                "scheduledTimeUtc": "2022-08-28 19:10Z",
                "actualTimeUtc": "2022-08-28 19:10Z",
                "terminal": "N",
                "quality": [
                    "Basic",
                    "Live"
                ]
            },
            "lastUpdatedUtc": "2022-08-28 00:23Z",
            "number": "HV 6153",
            "status": "Expected",
            "codeshareStatus": "IsOperator",
            "isCargo": false,
            "aircraft": {
                "reg": "LY-DUE",
                "modeS": "503D3E",
                "model": "Boeing 737-800"
            },
            "airline": {
                "name": "Transavia"
            }
        }
    ];
}