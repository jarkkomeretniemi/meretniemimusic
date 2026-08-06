# Ennen julkaisua

Kaksi asiaa on kesken. Kummankin voi tehdä ennen GitHubiin vientiä.

## 1. Kit-lomake — tehty

Lomake on kytketty seitsemälle sivulle: `index`, `pyhakoulu`, `tilaa` ja
neljä tekstisivua. Tunnukset ovat paikoillaan (lomake 9773072,
uid 2bdf57b642) ja Kitin skripti latautuu vain niillä sivuilla.

Testaa kertaalleen kun sivusto on pystyssä:

1. Avaa sivu yksityisessä selainikkunassa ja tilaa omalla osoitteella.
2. Sivun pitää pysyä paikallaan ja lomakkeen tilalle ilmestyä viesti
   *Kiitos, olet mukana. Tavataan pian sun postilaatikossasi.*
3. Tarkista että osoite näkyy Kitin tilaajalistassa ja että tilaaja
   päätyi automaatioon.
4. Vasta sitten poista Squarespacen vanha lomake.

Jos lomakkeen alle ilmestyy *Built with Kit* -merkki, sen saa pois
Kitin lomakeasetuksista. Sivuston tyyleissä se on jo piilotettu.

Jos onnistumisviesti ei ilmesty vaan selain siirtyy Kitin sivulle,
skripti ei ole latautunut. Tarkista selaimen konsoli.

## 2. Aineistolinkit — tehty

Medialle-sivulla on nyt:

- viisi painokelpoista kuvaa (4000 px pitkä sivu, 300 dpi), jotka
  latautuvat yksittäin klikkaamalla
- kansikuva 3000 × 3000 julkaisulohkosta
- koko paketti `kuvat/meretniemi-kuvat.zip`, 11 Mt, sisältää myös
  krediittitiedoston

Jos vaihdat kuvia, korvaa tiedosto samalla nimellä kansiossa
`kuvat/hires/` ja aja paketti uudelleen.

## 3. Verkkotunnus

Verkkotunnus on Domainhotellissa, joten Squarespacen voi irtisanoa
vapaasti. **Tee DNS-muutos vasta kun sivusto toimii GitHubissa.**

Domainhotellin DNS-asetuksiin:

- **A** `@` → `185.199.108.153`
- **A** `@` → `185.199.109.153`
- **A** `@` → `185.199.110.153`
- **A** `@` → `185.199.111.153`
- **CNAME** `www` → `käyttäjänimi.github.io`

Poista vanhat Squarespaceen osoittavat tietueet. Sitten GitHubissa
Settings → Pages → Custom domain → `meretniemimusic.fi` ja rasti
**Enforce HTTPS**. Varmenne voi tulla vasta tunnin päästä.

Tee tämä muutama päivä ennen 21.8., ei samana aamuna.

## 4. Julkaisupäivänä

Biisisivulla `kauneinta-mita-sus-on.html`:

- poista kommenttimerkit Spotify-soittimen ympäriltä ja lisää kappaleen
  tunnus
- "Laulu ilmestyy kaikkiin suoratoistopalveluihin 21. elokuuta 2026"
  → "Laulu on kuunneltavissa kaikissa suoratoistopalveluissa"
- nappi "Tallenna ennakkoon" → "Kuuntele"

Sama nappiteksti myös etusivulla ja `laulut.html`-sivulla.

## 5. Myöhemmin

- Threadsin osoite vaihtuu: etsi ja korvaa `threads.net/@jarkkotuukka`
- Spotify-profiilin linkki alatunnisteeseen kun se on julkinen
