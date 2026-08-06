# Meretniemi — sivusto

Staattinen sivusto. Ei riippuvuuksia, ei rakennusvaihetta, ei kuukausimaksuja.
Kaksi tiedostoa hoitaa ulkoasun: `tyyli.css` ja `sivu.js`.

## Sivut

| Tiedosto | Mikä |
|---|---|
| `index.html` | Etusivu |
| `laulut.html` | Julkaisujen listasivu |
| `kauneinta-mita-sus-on.html` | Singlen oma sivu |
| `pyhakoulu.html` | Tekstien hakemisto |
| `teksti-viinerit.html` | Yksittäinen teksti — kopioi tämä uusille |
| `kuvat/` | Kaikki kuvat |
| `tarina.html` | Punainen polkuauto |
| `medialle.html` | Aineistot toimittajille (ei hakukoneindeksissä) |
| `tilaa.html` | Kylmä laskeutumissivu uutiskirjeelle — tämä Instagramin bioon |
| `biiseja-muille.html` | Biisintekijän krediitit |

## Käyttöönotto GitHub Pagesiin

1. Luo GitHubiin uusi repo, esimerkiksi `meretniemi-sivut`.
2. Raahaa kaikki tämän kansion tiedostot repoon (Add file → Upload files).
3. Settings → Pages → Source: `Deploy from a branch`, haara `main`, kansio `/ (root)`.
4. Odota minuutti. Sivusto on osoitteessa `käyttäjänimi.github.io/meretniemi-sivut`.

### Oma verkkotunnus

Mukana on `CNAME`-tiedosto, jossa lukee `meretniemimusic.fi`. Kun repo on
pystyssä, mene verkkotunnuksen DNS-asetuksiin ja lisää:

- **A-tietue** `@` → `185.199.108.153`
- **A-tietue** `@` → `185.199.109.153`
- **A-tietue** `@` → `185.199.110.153`
- **A-tietue** `@` → `185.199.111.153`
- **CNAME-tietue** `www` → `käyttäjänimi.github.io`

Sitten Settings → Pages → Custom domain → `meretniemimusic.fi`, ja rastita
**Enforce HTTPS**. Varmennus voi kestää tunnin.

Tarkista nykyiset DNS-tietueet ennen kuin poistat Squarespace-tilauksen.
Jos verkkotunnus on ostettu Squarespacen kautta, se pitää siirtää toiselle
rekisteröijälle ennen tilauksen päättymistä.

## Mitä pitää täyttää

- **Kuvat ovat jo paikoillaan** `kuvat/`-kansiossa. Jos vaihdat jonkin,
  korvaa tiedosto samalla nimellä, niin HTML:ää ei tarvitse koskea.
- **Kit-lomake.** Katso alempaa oma lukunsa.
- **Threadsin osoite** vaihtuu: alatunnisteessa on nyt `@jarkkotuukka`,
  ja kun tunnus muuttuu muotoon `meretniemimusic`, korvaa se kaikilta
  sivuilta kerralla (etsi ja korvaa `threads.net/@jarkkotuukka`).
- **Spotify-soitin** singlen sivulla, julkaisun jälkeen. Kommentoitu rivi
  odottaa `<div class="embed">`-lohkon sisällä.
- **Mistä laulu syntyi** -osio singlen sivulla, hakasulkeissa oleva teksti.
- **Aineistopaketin latauslinkki** Medialle-sivulla.
- **Loput Pyhäkoulun tekstit.** `pyhakoulu.html`-listassa on seitsemän
  otsikkoa, joista vain viinerit on kirjoitettu omaksi sivukseen.

## Julkaisun jälkeen 21.8.

Kahdessa kohdassa lukee "Julkaistaan 21. elokuuta 2026" ja napissa
"Tallenna ennakkoon". Vaihda ne muotoon "Ilmestyi 21. elokuuta 2026" ja
"Kuuntele". Muuta ei tarvitse tehdä — sivustolla ei ole päivämääriä eikä
uutisosiota, joten se ei vanhene siinä välissä kun seuraavaa laulua tehdään.

## Seuraava single

Kolme vaihetta:

1. **Etusivun kenttä** vaihtuu kokonaan uuteen julkaisuun. Kenttä näyttää
   aina vain uusimman.
2. **Uusi biisisivu** kopioimalla `kauneinta-mita-sus-on.html`.
3. **Rivi lisää** `laulut.html`-sivulle, uusin ylimmäksi.

Vanhat biisisivut jäävät paikoilleen — niihin linkitetään Spotifysta ja
tiedotteista vielä vuosien päästä. Ainoa muutos vanhaan sivuun on se, että
"Julkaistaan 21. elokuuta" muuttuu muotoon "Ilmestyi 21.8.2026" ja nappi
ennakkotallennuksesta kuunteluksi.

Medialle-sivun julkaisulohko kasvaa listaksi, uusin ensin. Toimittaja
tarvitsee myös vanhat krediitit ja kansikuvat.

### Värit

Värijärjestelmä seuraa levynkansia: paperi ja yksi synteettinen väri.
Vaihda `tyyli.css`:n alusta kaksi arvoa, niin koko sivusto vaihtaa sävyä:

```css
--accent:      #E10079;   /* linkit, hiusviivat */
--accent-deep: #C4006A;   /* singlen värikenttä */
```

Aksenttiväri esiintyy vain yhdessä paikassa isona: singlen kentässä.
Kentän liukuvärit on johdettu näistä kahdesta arvosta, joten ne seuraavat
mukana. Vaihtoehtoinen lämmin suunta: `#C0341C` ja `#A32C15`.
Se on sivuston ainoa kylläinen pinta, ja siksi julkaisu on aina sivuston
äänekkäin asia ilman että missään lukee "uusi".

## Uusi teksti Pyhäkouluun

1. Kopioi `teksti-viinerit.html` uudeksi tiedostoksi, esim. `teksti-aiti.html`.
2. Vaihda otsikko, `<title>`, `description` ja leipäteksti.
3. Lisää rivi `pyhakoulu.html`-sivun listaan.
4. Nosta uusin teksti myös etusivulle.

Tekstissä ei ole päivämäärää. Se on tarkoituksellista: päivätty blogi
näyttää hylätyltä jos edellinen merkintä on maaliskuulta, päiväämätön
kokoelma ei näytä miltään.

## Ladonta

Teksti on ladottu rivi kerrallaan, `<p>`-elementteinä `.verse`-lohkon sisällä.
Luokka `gap` tekee isomman välin. Sama logiikka kuin painetuissa
miniesseissä: yksi ajatus kerrallaan, paljon ilmaa, ei mitään mikä kiirehtii.


## Kit-uutiskirjelomake

Lomake on jo koodattu valmiiksi kolmelle sivulle (`index.html`,
`pyhakoulu.html`, `tilaa.html`). Siitä puuttuu vain kaksi tunnistetta.

### Mistä tunnisteet löytyvät

1. Kitissä: **Grow → Landing Pages & Forms**
2. Avaa lomake ja paina oikean yläkulman **Embed**
3. Valitse **HTML** (älä JavaScript-vaihtoehtoa — se tuo mukanaan Kitin oman
   ulkoasun, joka ei sovi tähän sivustoon)
4. Koodista löytyy kaksi asiaa:
   - **Lomakkeen numero** rivillä `action="https://app.kit.com/forms/1234567/subscriptions"`
   - **UID**, eli merkkijono kohdassa `data-uid="a1b2c3d4e5"`

### Mitä tehdään

Etsi ja korvaa kaikissa kolmessa tiedostossa:

- `FORM_ID` → lomakkeen numero (esiintyy kahdesti per sivu)
- `UID` → data-uid-merkkijono (esiintyy kahdesti per sivu)

Muuta ei tarvita. Kentän ja napin ulkoasu tulee tiedostosta `tyyli.css`,
ja onnistuneen tilauksen jälkeinen viesti asetetaan Kitin puolella
lomakkeen asetuksista.

### Ennen kuin vanha lista poistetaan

Tilaa itse omalla osoitteella ja tarkista, että osoite ilmestyy Kitin
tilaajalistalle. Vasta sen jälkeen kannattaa sulkea Squarespacen vanha
lomake, jottei väliin jää hetkeä jolloin kumpikaan ei toimi.
