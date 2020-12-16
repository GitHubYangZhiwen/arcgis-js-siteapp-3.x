define({
  "_widgetLabel": "Sakupljanje podataka",
  "startPage": {
    "defaultStartPageInstructions": "Ovaj će widget pomoći s obradom i predajom podataka iz datoteke do odabranog sloja na mapi.<br/> <br/> Vrijednosti unutar datoteke moraju biti odvojene zarezom, tabom, točkom sa zarezom ili uspravnom crtom.",
    "dragDrop": "Povuci i ispusti",
    "browse": "Idi do datoteke",
    "or": "ILI",
    "userPrivilege": "Vaš račun nema dopuštenje za stvaranje ili mijenjanje podataka.",
    "userCredits": "${widgetName} zahtijeva kredite za uporabu ${locator} lokatora.",
    "contactAdmin": "Kontaktirajte administratora organizacije kako bi zatražili dodatne kredite.",
    "contactAdminEdit": "Kontaktirajte administratora organizacije kako biste zatražili mogućnost uređivanja.",
    "canUseLocator": "${locator} lokator će se upotrebljavati za lociranje značajki.",
    "notEnoughCredits": "Nema dovoljno kredita.",
    "locationAndField": "Informacije o lokaciji i polju",
    "locationAndFieldHint": "Odaberite vrijednosti iz datoteke koja se treba koristiti za ažuriranje ciljnog sloja.",
    "cannotUseLocator": "Nije moguće koristiti ${widgetName}",
    "noAnonymousEdit": "${layerName} sloj ne podržava anonimno uređivanje.",
    "pleaseLogin": "Prijavite se u ${org} organizaciju ili kontaktirajte administratora organizacije kako bi zatražili da se omogući anonimno editiranje.",
    "invalidEdit": "Nevažeće privilegije",
    "unableToAccess": "Nije moguće pristupiti ${layerName}",
    "appropriateCredentials": "Potvrdite da ste se prijavili s prikladnom vjerodajnicom.",
    "shared": "Kontaktirajte administratora organizacije kako bi zatražili pristup ${layerName} sloju.",
    "targetLayerLabel": "Ciljni sloj",
    "homeButtonLabel": "Početna"
  },
  "mapping": {
    "schemaMapping": "Informacije o polju",
    "schemaMappingHint": "Izaberite polja iz datoteke koji se podudaraju s poljima na sloju.",
    "locationMapping": "Informacije o lokaciji",
    "locationMappingHint": "Izaberite vrstu adrese ili koordinirajte informacije koje očekujete od datoteke."
  },
  "locationMapping": {
    "locationMappingPageHint": "Izaberite vrstu lokacije",
    "useAddress": "Pronađi pomoću adrese",
    "useAddressHint": "Podaci sadrže informacije o adresi",
    "useCoordinates": "Pronađi pomoću koordinata",
    "useCoordinatesHint": "Podaci sadrže vrijednosti X/Y koordinata"
  },
  "address": {
    "addressPageHint": "Izaberi vrstu adrese",
    "singleField": "Jedno polje",
    "singleFieldHint": "Odaberite polje koje sadrži informacije o adresi",
    "multiField": "Više polja",
    "multiFieldHint": "Izaberite polja koja sadrže informacije o adresi"
  },
  "coordinates": {
    "coordinatesPageHint": "Odaberite polja koja sadrže podatke o koordinatama"
  },
  "fieldMapping": {
    "fieldMappingPageHint": "Izaberite izvorno polje koje se mapira do ciljnog polja",
    "sourceField": "Uparivanje izvornog polja",
    "targetField": "Ciljno polje"
  },
  "buttons": {
    "addToMap": "Dodaj karti",
    "submit": "Pošalji",
    "download": "Preuzimanje"
  },
  "review": {
    "matched": "Pronađeno",
    "reviewMatched": "Pronađene lokacije",
    "reviewMatchedHint": "Pregledajte lokacije koje su pronađene.",
    "unMatched": "nije pronađeno",
    "reviewUnMatched": "Lokacije nisu pronađene",
    "reviewUnMatchedHint": "Lokacije za pregled nisu pronađene. Stavke koje nisu ispravljene neće biti predane.",
    "duplicate": "Dupliciraj",
    "reviewDuplicate": "Dvostruke lokacije",
    "reviewDuplicateHint": "Pregledajte lokacije koje su već pronađene u sloju. Stavke koje nisu adresirane neće biti predane.",
    "reviewLabelWithCount": "${totalMatchedFeatures} ${headerString} ${headerStringHint}",
    "use": "Upotrijebi:",
    "fromLayer": "Ciljna informacija",
    "target": "Cilj",
    "source": "Izvor",
    "fromFile": "Informacije o izvoru",
    "locationControlHint": "Pregledajte adresu informacije",
    "duplicateAction": "Odaberite radnju",
    "item": "Zapis:",
    "locateFeature": "Locirajte značajku",
    "removeFeature": "Uklonite značajku",
    "featureLocated": "Lokacija je pronađena",
    "valuesDoNotMatch": "Ne poklapa se s postojećom vrijednosti",
    "sync": "Sinkronizirajte informaciju adrese s informacijom polja",
    "noFeaturesSaved": "Nijedna značajka nije uspješno spremljena",
    "someFeaturesSaved": "${num} značajka(e) uspješno spremljena(e).",
    "someFeaturesNotSaved": "${num} značajka(e) nisu uspješno spremljene.",
    "feature": "Pregledajte informacije o značajki",
    "locationInfo": "Pregledajte informacije o lokaciji",
    "selectValue": "Odaberi vrijednost",
    "reviewData": "Pregledajte podatke",
    "reviewDataHint": "Pregledajte vaše podatke prije slanja na sloj.",
    "reviewFeatureHint": "Pregledajte ili uredite vaše informacije o značajki i lokaciji.",
    "duplicateModify": "Duplikat, treba izmjenu",
    "duplicateSave": "Spremi kao novu značajku"
  },
  "warningsAndErrors": {
    "invalidCSV": "Pogreška pri dohvaćanju stavki iz CSV-a, provjerite je li odabrana valjana CSV datoteka.",
    "noLayersWarning": "Valjani ciljni sloj nije konfiguriran, provjerite konfiguraciju.",
    "loadWarning": "Za ovaj widget potreban je izvor podataka usluge značajke. Konfigurirajte widget da definira izvor podataka.",
    "saveError": "Pogreška pri spremanju geoobjekata.",
    "consumesCredits": "Ovaj alat troši kredite kada se upotrebljava s uslugom ArcGIS Online World Geocoding",
    "noValue": "Odaberi polje",
    "mappingTitle": "",
    "locationMappingComplete": "Dovršeno kartiranje lokacije",
    "fieldMappingComplete": "Dovršeno kartiranje polja",
    "settingsCleared": "Postavke će se izbrisati.",
    "proceed": "Želite li nastaviti?",
    "itemMoveMatch": "Stavka je pronađena i premještena na listu pronađenih lokacija.",
    "itemMoveUnMatched": "Stavku nije moguće pronaći. Premješteno na listu lokacija koje nisu pronađene.",
    "itemWillBeLocated": "Stavka će biti uklonjena s liste lokacija duplikata.",
    "cannotLocate": "Stavku nije moguće pronaći. Potvrdite informaciju o lokaciji.",
    "invalidMessage": "Vrijednost nije važeća.",
    "rangeMessage": "Vrijednost mora biti manja od ${num} znakova.",
    "locatorError": "Lokator nije valjan ili je nedostupan.",
    "notConfigured": "lokator nije konfiguriran za trenutne opcije lokacije",
    "noMoreLocators": "dodatni lokatori nisu konfigurirani"
  },
  "featureToolbar": {
    "locate": "Pronađi",
    "save": "Spremi zapis",
    "cancel": "Otkaži uređivanja",
    "cancelTitle": "Otkaži uređivanja",
    "cancelMessage": "Otkaži uređivanja trenutnog zapisa?"
  }
});