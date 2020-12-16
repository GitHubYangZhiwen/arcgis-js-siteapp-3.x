define({
  "_widgetLabel": "Gegevensaggregatie",
  "startPage": {
    "defaultStartPageInstructions": "Deze widget helpt bij het verwerken en verzenden van gegevens van een bestand naar de geselecteerde laag op de kaart.<br/> <br/> Waarden in het bestand moeten worden gescheiden door een komma, tab, puntkomma of verticale streep.",
    "dragDrop": "Drag & drop",
    "browse": "Blader naar bestand",
    "or": "OF",
    "userPrivilege": "Uw account heeft geen machtigingen om gegevens te maken of te wijzigen.",
    "userCredits": "${widgetName} vereist credits voor het gebruik van de ${locator} locator.",
    "contactAdmin": "Neem contact op met de beheerder van de organisatie om extra credits aan te vragen.",
    "contactAdminEdit": "Neem contact op met de beheerder van de organisatie om wijzigingsrechten aan te vragen.",
    "canUseLocator": "De locator ${locator} wordt gebruikt om objecten te zoeken.",
    "notEnoughCredits": "Niet voldoende credits.",
    "locationAndField": "Informatie over locatie en veld",
    "locationAndFieldHint": "Kies waarden uit het bestand die gebruikt moeten worden om de doellaag bij te werken.",
    "cannotUseLocator": "${widgetName} kan niet worden gebruikt",
    "noAnonymousEdit": "De laag ${layerName} ondersteunt anoniem bewerken niet.",
    "pleaseLogin": "Meld u aan bij uw organisatie ${org} of neem contact op met de beheerder van de organisatie om het inschakelen van anoniem bewerken aan te vragen.",
    "invalidEdit": "Ongeldige machtigingen",
    "unableToAccess": "Geen toegang mogelijk tot ${layerName}",
    "appropriateCredentials": "Controleer of u aangemeld bent met de juiste gegevens.",
    "shared": "Neem contact op met de beheerder van de organisatie om toegang tot de laag ${layerName} aan te vragen.",
    "targetLayerLabel": "Doellaag",
    "homeButtonLabel": "Start"
  },
  "mapping": {
    "schemaMapping": "Veldinformatie",
    "schemaMappingHint": "Kies velden uit het bestand die overeenkomen met de velden in de laag.",
    "locationMapping": "Locatiegegevens",
    "locationMappingHint": "Kies het type adres of coördinaatinformatie die u van het bestand verwacht."
  },
  "locationMapping": {
    "locationMappingPageHint": "Kies locatietype",
    "useAddress": "Lokaliseer met behulp van een adres",
    "useAddressHint": "Gegevens bevatten adresinformatie",
    "useCoordinates": "Lokaliseer met behulp van coördinaten",
    "useCoordinatesHint": "Gegevens bevatten X/Y-coördinaatwaarden"
  },
  "address": {
    "addressPageHint": "Kies adrestype",
    "singleField": "Enkel veld",
    "singleFieldHint": "Kies het veld dat adresinformatie bevat",
    "multiField": "Meerdere velden",
    "multiFieldHint": "Kies de velden die adresinformatie bevatten"
  },
  "coordinates": {
    "coordinatesPageHint": "Kies de velden die coördinaatgegevens bevatten"
  },
  "fieldMapping": {
    "fieldMappingPageHint": "Kies het bronveld dat wordt toegewezen aan het doelveld",
    "sourceField": "Overeenkomend bronveld",
    "targetField": "Doelveld"
  },
  "buttons": {
    "addToMap": "Toevoegen aan kaart",
    "submit": "Verzenden",
    "download": "Downloaden"
  },
  "review": {
    "matched": "Gevonden",
    "reviewMatched": "Locaties gevonden",
    "reviewMatchedHint": "De gevonden locaties bekijken.",
    "unMatched": "niet gevonden",
    "reviewUnMatched": "Geen locaties gevonden",
    "reviewUnMatchedHint": "Bekijk de locaties die niet zijn gevonden. Items die niet gecorrigeerd zijn worden niet ingediend.",
    "duplicate": "Dupliceren",
    "reviewDuplicate": "Dubbele locaties",
    "reviewDuplicateHint": "Bekijk de locaties die al gevonden zijn in de laag. Items die niet geadresseerd zijn worden niet ingediend.",
    "reviewLabelWithCount": "${totalMatchedFeatures} ${headerString} ${headerStringHint}",
    "use": "Gebruik:",
    "fromLayer": "Doelinformatie",
    "target": "Doel",
    "source": "Bron",
    "fromFile": "Broninformatie",
    "locationControlHint": "Adresinformatie bekijken",
    "duplicateAction": "Kies een actie",
    "item": "Record:",
    "locateFeature": "Object zoeken",
    "removeFeature": "Object verwijderen",
    "featureLocated": "Locatie gevonden",
    "valuesDoNotMatch": "Komt niet overeen met bestaande waarde",
    "sync": "Adresinformatie synchroniseren met vedinformatie",
    "noFeaturesSaved": "Geen objecten succesvol opgeslagen",
    "someFeaturesSaved": "${num} object(en) succesvol opgeslagen.",
    "someFeaturesNotSaved": "${num} object(en) zijn niet succesvol opgeslagen.",
    "feature": "Objectinformatie bekijken",
    "locationInfo": "Locatie-informatie bekijken",
    "selectValue": "Selecteer een waarde",
    "reviewData": "Data bekijken",
    "reviewDataHint": "Bekijk uw data voordat u ze indient voor de laag.",
    "reviewFeatureHint": "Uw object- en locatie-informatie bekijken of bewerken.",
    "duplicateModify": "Dubbel, graag wijzigen",
    "duplicateSave": "Opslaan als een nieuw object"
  },
  "warningsAndErrors": {
    "invalidCSV": "Fout bij het ophalen van items uit CSV, controleer of een geldig CSV-bestand is geselecteerd.",
    "noLayersWarning": "Geen geldige doellaag geconfigureerd, controleer de configuratie.",
    "loadWarning": "Deze widget vereist een Feature Service-gegevensbron. Configureer de widget om een ​​gegevensbron te definiëren.",
    "saveError": "Fout bij het opslaan van objecten.",
    "consumesCredits": "Deze tool verbruikt credits wanneer hij gebruikt wordt met de ArcGIS Online World Geocoding Service",
    "noValue": "Selecteer een veld",
    "mappingTitle": "",
    "locationMappingComplete": "Locatie toewijzen voltooid",
    "fieldMappingComplete": "Veld toewijzen voltooid",
    "settingsCleared": "Instellingen worden gewist.",
    "proceed": "Wilt u doorgaan?",
    "itemMoveMatch": "Items is gevonden en verplaatst naar de lijst gevonden locaties",
    "itemMoveUnMatched": "Kan item niet vinden. Verplaatst naar de lijst locaties niet gevonden.",
    "itemWillBeLocated": "Item wordt verwijderd uit de lijst dubbele locaties.",
    "cannotLocate": "Kan item niet vinden. Controleer de locatie-informatie.",
    "invalidMessage": "Ongeldige waarde",
    "rangeMessage": "Waarde moet minder zijn dan ${num} tekens.",
    "locatorError": "Locator ongeldig of ontoegankelijk.",
    "notConfigured": "locator niet geconfigureerd voor huidige zoekopties",
    "noMoreLocators": "geen extra locators geconfigureerd"
  },
  "featureToolbar": {
    "locate": "Zoom naar",
    "save": "Record opslaan",
    "cancel": "Bewerkingen annuleren",
    "cancelTitle": "Bewerkingen annuleren",
    "cancelMessage": "Bewerkingen voor de huidige record annuleren?"
  }
});