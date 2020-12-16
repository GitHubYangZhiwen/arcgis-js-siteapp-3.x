define({
  "_widgetLabel": "Aineiston koonti",
  "startPage": {
    "defaultStartPageInstructions": "Tämä pienoisohjelma avustaa aineiston käsittelyssä ja lähetyksessä tiedostosta kartasta valittuun karttatasoon.<br/> <br/> Tiedoston arvojen on oltava eroteltu pilkuin, sarkaimin, puolipistein tai pystyviivoin.",
    "dragDrop": "Vedä ja pudota",
    "browse": "Etsi tiedosto selaamalla",
    "or": "TAI",
    "userPrivilege": "Tililläsi ei ole tietojen luonti- tai muokkausoikeuksia.",
    "userCredits": "Pienoisohjelma ${widgetName} edellyttää krediittejä paikantimen ${locator} käyttöön.",
    "contactAdmin": "Pyydä lisäkrediittejä organisaation pääkäyttäjältä.",
    "contactAdminEdit": "Pyydä muokkausoikeuksia organisaation pääkäyttäjältä.",
    "canUseLocator": "Paikanninta ${locator} käytetään kohteiden paikantamiseen.",
    "notEnoughCredits": "Krediittejä ei ole riittävästi.",
    "locationAndField": "Sijainti- ja kenttätiedot",
    "locationAndFieldHint": "Valitse arvot tiedostosta, jota käytetään kohdekarttatason päivittämiseen.",
    "cannotUseLocator": "Pienoisohjelmaa ${widgetName} ei voi käyttää",
    "noAnonymousEdit": "Karttataso ${layerName} ei tue anonyymia muokkausta.",
    "pleaseLogin": "Kirjaudu organisaatioon ${org} tai pyydä anonyymin muokkauksen käyttöönottoa organisaation pääkäyttäjältä.",
    "invalidEdit": "Virheelliset oikeudet",
    "unableToAccess": "Karttatasoa ${layerName} ei voi käyttää",
    "appropriateCredentials": "Vahvista, että olet kirjautunut asianmukaisilla tunnistetiedoilla.",
    "shared": "Pyydä organisaation pääkäyttäjältä karttatason ${layerName} käyttöoikeutta.",
    "targetLayerLabel": "Kohdekarttataso",
    "homeButtonLabel": "Koti"
  },
  "mapping": {
    "schemaMapping": "Kentän tiedot",
    "schemaMappingHint": "Valitse kentät tiedostosta, joka vastaa karttatason kenttiä.",
    "locationMapping": "Sijaintitiedot",
    "locationMappingHint": "Valitse osoitteen tyyppi tai koordinaattitiedot, joita odotat tiedoston sisältävän."
  },
  "locationMapping": {
    "locationMappingPageHint": "Valitse sijaintityyppi",
    "useAddress": "Paikanna osoitteen perusteella",
    "useAddressHint": "Aineisto sisältää osoitetiedot",
    "useCoordinates": "Paikanna koordinaattien perusteella",
    "useCoordinatesHint": "Aineisto sisältää X-/Y-koordinaattiarvot"
  },
  "address": {
    "addressPageHint": "Valitse osoitetyyppi",
    "singleField": "Yksi kenttä",
    "singleFieldHint": "Valitse kenttä, joka sisältää osoitetiedot",
    "multiField": "Useita kenttiä",
    "multiFieldHint": "Valitse kentät, jotka sisältävät osoitetiedot"
  },
  "coordinates": {
    "coordinatesPageHint": "Valitse kentät, jotka sisältävät koordinaattitiedot"
  },
  "fieldMapping": {
    "fieldMappingPageHint": "Valitse lähdekenttä, joka vastaa kohdekenttää",
    "sourceField": "Vastaava lähdekenttä",
    "targetField": "Kohdekenttä"
  },
  "buttons": {
    "addToMap": "Lisää karttaan",
    "submit": "Lähetä",
    "download": "Lataa"
  },
  "review": {
    "matched": "Löytyi",
    "reviewMatched": "Sijainteja löytyi",
    "reviewMatchedHint": "Tarkista löytyneet sijainnit.",
    "unMatched": "ei löytynyt",
    "reviewUnMatched": "Sijainteja ei löytynyt",
    "reviewUnMatchedHint": "Tarkista sijainnit, joita ei löytynyt. Kohteita, joita ei korjata, ei lähetetä.",
    "duplicate": "Tee kopio",
    "reviewDuplicate": "Sijaintien kaksoiskappaleet",
    "reviewDuplicateHint": "Tarkista sijainnit, jotka jo löytyivät karttatasosta. Kohteita, joita ei käsitellä, ei lähetetä.",
    "reviewLabelWithCount": "${totalMatchedFeatures} ${headerString} ${headerStringHint}",
    "use": "Käyttö:",
    "fromLayer": "Kohteen tiedot",
    "target": "Kohde",
    "source": "Lähde",
    "fromFile": "Lähteen tiedot",
    "locationControlHint": "Tarkista osoitetiedot",
    "duplicateAction": "Valitse toiminto",
    "item": "Tietue:",
    "locateFeature": "Paikanna kohde",
    "removeFeature": "Poista kohde",
    "featureLocated": "Sijainti löytyi",
    "valuesDoNotMatch": "Ei vastaa olemassa olevaa arvoa",
    "sync": "Synkronoi osoitetiedot kentän tietojen kanssa",
    "noFeaturesSaved": "Yhdenkään kohteen tallennus ei onnistunut",
    "someFeaturesSaved": "${num} kohteen tallennus onnistui.",
    "someFeaturesNotSaved": "${num} kohteen tallennus ei onnistunut.",
    "feature": "Tarkista kohteen tiedot",
    "locationInfo": "Tarkista sijaintitiedot",
    "selectValue": "Valitse arvo",
    "reviewData": "Tarkista aineisto",
    "reviewDataHint": "Tarkista aineisto ennen sen lähettämistä karttatasoon.",
    "reviewFeatureHint": "Tarkista kohde- ja sijaintitiedot tai muokkaa niitä.",
    "duplicateModify": "Kopio, edellyttää muutosta",
    "duplicateSave": "Tallenna uutena kohteena"
  },
  "warningsAndErrors": {
    "invalidCSV": "Virhe kohteiden noudossa CSV-tiedostosta. Tarkista, onko valittu CSV-tiedosto kelvollinen.",
    "noLayersWarning": "Yhtään kelvollista kohdekarttatasoa ei ole määritetty. Tarkista konfiguraatio.",
    "loadWarning": "Tämä pienoisohjlem edellyttää kohdepalvelun aineistolähdettä. Määritä aineistolähde määrittämällä pienoisohjelma.",
    "saveError": "Virhe tallennettaessa kohteita.",
    "consumesCredits": "Tämä työkalu kuluttaa krediittejä, kun sitä käytetään ArcGIS Online World Geocoding Service -palvelun kanssa",
    "noValue": "Valitse kenttä",
    "mappingTitle": "",
    "locationMappingComplete": "Sijainnin vastaavuusmääritys on valmis",
    "fieldMappingComplete": "Kentän vastaavuusmääritys on valmis",
    "settingsCleared": "Asetukset tyhjennetään.",
    "proceed": "Haluatko jatkaa?",
    "itemMoveMatch": "Kohde on paikannettu ja siirretty löydettyjen sijaintien luetteloon",
    "itemMoveUnMatched": "Kohdetta ei voi paikantaa. Siirretty niiden sijaintien luetteloon, joita ei löydetty.",
    "itemWillBeLocated": "Kohde poistetaan sijaintien kaksoiskappaleiden luettelosta.",
    "cannotLocate": "Kohdetta ei voi paikantaa. Vahvista sijaintitiedot.",
    "invalidMessage": "Virheellinen arvo.",
    "rangeMessage": "Arvon on oltava alle ${num} merkkiä.",
    "locatorError": "Paikannin on virheellinen, tai se ei ole käytettävissä.",
    "notConfigured": "paikanninta ei ole määritetty nykyisille paikannusvaihtoehdoille",
    "noMoreLocators": "yhtään lisäpaikanninta ei ole määritetty"
  },
  "featureToolbar": {
    "locate": "Paikanna",
    "save": "Tallenna tietue",
    "cancel": "Peruuta muokkaukset",
    "cancelTitle": "Peruuta muokkaukset",
    "cancelMessage": "Peruutetaanko nykyisen tietueen muokkaukset?"
  }
});