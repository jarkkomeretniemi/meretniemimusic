# Meretniemi — sivusto

Staattinen sivusto GitHub Pagesissa. Ei kuukausimaksuja. GitHub kokoaa sivut
Jekyllillä automaattisesti joka kerta, kun muutokset viedään (Push). Mitään ei
tarvitse asentaa omalle koneelle.

## Mistä mitäkin muutetaan

| Mitä | Missä |
|---|---|
| Uusi julkaisu | `_data/julkaisut.yml` — lisää uusin ylimmäksi. Etusivu ja Laulut-sivu päivittyvät itse. |
| Uusi Pyhäkoulu-teksti listoihin | `_data/tekstit.yml` — uusin ylimmäksi. Pyhäkoulu-sivu ja etusivun kaksi esimerkkiä päivittyvät itse. |
| Valikko (Laulut, Tarina, Pyhäkoulu) | `_includes/valikko.html` |
| Alatunniste, somelinkit, sähköposti | `_includes/alatunniste.html` |
| Uutiskirjeen tilauslomake | `_includes/tilauslomake.html` |
| `<head>`: fontit, favicon, metatagien rakenne | `_layouts/sivu.html` |
| Sivun otsikko ja kuvaus (Google, some-esikatselu) | sivun alussa `---`-viivojen välissä: `title` ja `description` |
| Ulkoasu | `tyyli.css` |

Jokaisen sivun alussa on `---`-viivojen väliin kirjoitettu tietolohko:

- `title`, `description` — näkyvät Googlessa ja jakoesikatseluissa. Kirjoitetaan
  kerran; sivupohja täyttää niillä myös og- ja twitter-tagit.
- `kuva` — jakokuva, jos eri kuin `kuvat/kansi.jpg`
- `og_tyyppi` — jos eri kuin `website` (esim. `article`, `music.song`)
- `valikko` — mikä valikon kohta näkyy aktiivisena
- `kit: true` — sivulla on uutiskirjelomake
- `noindex: true` — piiloon hakukoneilta
- `jsonld` — Googlen rakenteinen tieto

Tekstiä `{% include tilauslomake.html %}` ei saa poistaa vahingossa — se on
paikka, johon lomake tulee. `kuuntelu/`-kansion sivu on tavallista HTML:ää
ilman tietolohkoa, ja Jekyll kopioi sen sellaisenaan.

Alla olevat vanhemmat ohjeet on kirjoitettu ennen Jekylliä. Kun ne puhuvat
"kaikista sivuista", muutos tehdään nyt yhteen `_includes`-tiedostoon.

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

## Etusivun hero on kampanjakohtainen

Etusivun ylin osio — luokkakuva, valokeila ja lause *Se mitä piilotat
muilta on kauneinta mitä sus on* — on tehty esikoissinglen kampanjaa
varten. Lause on kyseisen laulun kertosäettä.

Kun kampanja on ohi, hero kannattaa vaihtaa. Kaksi suuntaa:

- **Seuraavan julkaisun ympärille.** Uusi kuva ja uusi lause, sama
  rakenne. Valokeilan paikkaa ohjaavat `tyyli.css`:n arvot `--xn` ja
  `--yn`, ja ne toimivat vain luokkakuvan kanssa — muun kuvan kohdalla
  valokeila kannattaa poistaa kokonaan.
- **Pysyvämpään muotoon.** Lause, joka puhuu koko musiikista eikä yhdestä
  laulusta, esimerkiksi kaksiosaisena: väite ja sen kääntävä vastaus.

Sama lause on nyt myös biisisivun kertosäelohkossa. Kun hero vaihtuu,
kertosäe jää sinne yksin, mikä on sen oikea paikka.

## Seuraava single

Kaksi vaihetta:

1. **Uusi biisisivu** kopioimalla `kauneinta-mita-sus-on.html`. Vaihda
   tietolohkon `title`, `description` ja `jsonld` sekä sivun sisältö
   (kertosäe, tarina, sanat, Spotify-tunnus soittimessa ja jakonapin osoite).
2. **Uusi kohta** `_data/julkaisut.yml`-tiedoston alkuun. Etusivu ja
   Laulut-sivu päivittyvät siitä.

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
2. Vaihda tietolohkon `title`, `description` ja `jsonld` sekä leipäteksti.
3. Lisää uusi kohta `_data/tekstit.yml`-tiedoston alkuun. Se ilmestyy
   Pyhäkoulu-sivulle ja etusivun esimerkkeihin.

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
