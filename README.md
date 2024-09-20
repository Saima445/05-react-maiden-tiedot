# Countries Information App

Tässä koulutyössä käytetään **Reactia** näyttämään tietoja eri maista ja antamaan niiden pääkaupunkien säätiedot. Käytössä on REST-API, jonka avulla haetaan tiedot kaikista maista sekä OpenWeatherMapin API, jolla haetaan säätiedot valitun maan pääkaupungista.

## Sovelluks livenä:

[Countries Information Demo](https://saima445.github.io/05-react-maiden-tiedot/)

## Yleiskuvaus

Sovellus tarjoaa seuraavat ominaisuudet:
- Mahdollisuus etsiä maita nimellä.
- Näyttää listan maista, jotka vastaavat hakukriteereitä.
- Klikkaamalla "Show"-nappia käyttäjä voi tarkastella tarkempia tietoja valitusta maasta.
- Näyttää maan pääkaupungin säätiedot (lämpötila, tuulen nopeus ja sääikoni).

### Ominaisuudet

- **Haku ja suodatus**: Voit hakea maita syöttämällä maan nimen hakukenttään. Jos tuloksia on alle 10, ne näytetään listana. Jos tuloksia on vain yksi, näytetään valitun maan tarkemmat tiedot ja säätiedot.
- **Maan tiedot**: Valitun maan tiedot, kuten nimi, pääkaupunki, pinta-ala, kielet ja lippu.
- **Säätiedot**: Maan pääkaupungin lämpötila, tuulen nopeus ja säätiedot haetaan OpenWeatherMap API:n kautta.

## Käytetyt teknologiat

- **React**: Käyttöliittymän rakentamiseen ja tilanhallintaan.
- **Axios**: HTTP-pyyntöjen lähettämiseen RestCountries- ja OpenWeatherMap API:ihin.
- **CSS**: Ulkoasun ja responsiivisuuden hallintaan.

## Komponentit

1. **App**: Sovelluksen pääkomponentti, joka sisältää hakulogiikan ja hallinnoi tilaa.
2. **Filter**: Hakukenttä, joka suodattaa maat hakutulosten perusteella.
3. **Countries**: Näyttää listan maista, jotka vastaavat hakuehtoja.
4. **CountryInfo**: Näyttää valitun maan tiedot, kuten pääkaupunki, kielet ja säätiedot.
5. **Country**: Yksittäisen maan tiedot listassa.
6. **countryService**: Palvelu, joka vastaa maiden ja säätietojen hakemisesta API:sta.
