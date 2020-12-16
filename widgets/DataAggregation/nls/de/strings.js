define({
  "_widgetLabel": "Datenaggregation",
  "startPage": {
    "defaultStartPageInstructions": "Dieses Widget unterstützt die Verarbeitung von Daten und deren Übermittlung von einer Datei an den ausgewählten Layer in der Karte.<br/> <br/> Werte innerhalb der Datei müssen durch ein Komma, einen Tabulator, ein Semikolon oder einen vertikalen Balken getrennt sein.",
    "dragDrop": "Drag & Drop",
    "browse": "Zur Datei navigieren",
    "or": "OR",
    "userPrivilege": "Ihrem Konto sind keine Berechtigungen zum Erstellen oder Ändern von Daten zugewiesen.",
    "userCredits": "Für \"${widgetName}\" sind Credits erforderlich, um den Locator \"${locator}\" verwenden zu können.",
    "contactAdmin": "Wenden Sie sich an den Administrator der Organisation, um zusätzliche Credits anzufordern.",
    "contactAdminEdit": "Wenden Sie sich an den Administrator der Organisation, um Bearbeitungsberechtigungen anzufordern.",
    "canUseLocator": "Der Locator \"{locator}\" wird zum Verorten von Features verwendet.",
    "notEnoughCredits": "Nicht genügend Credits verfügbar.",
    "locationAndField": "Positions- und Feldinformationen",
    "locationAndFieldHint": "Wählen Sie die Werte aus der Datei aus, die zum Aktualisieren des Ziel-Layers verwendet werden sollen.",
    "cannotUseLocator": "\"${widgetName}\" kann nicht verwendet werden.",
    "noAnonymousEdit": "Der Layer \"${layerName}\" unterstützt keine anonyme Bearbeitung.",
    "pleaseLogin": "Melden Sie sich bei der Organisation \"${org}\" an, oder wenden Sie sich an den Administrator der Organisation, um die Aktivierung der anonymen Bearbeitung anzufordern.",
    "invalidEdit": "Ungültige Berechtigungen",
    "unableToAccess": "Zugriff auf \"${layerName}\" nicht möglich.",
    "appropriateCredentials": "Überprüfen Sie, ob Sie sich mit den richtigen Anmeldeinformationen angemeldet haben.",
    "shared": "Wenden Sie sich an den Administrator der Organisation, um Zugriff auf den Layer \"${layerName}\" anzufordern.",
    "targetLayerLabel": "Ziel-Layer",
    "homeButtonLabel": "Startseite"
  },
  "mapping": {
    "schemaMapping": "Feldinformationen",
    "schemaMappingHint": "Wählen Sie Felder aus der Datei aus, denen die Felder im Layer entsprechen.",
    "locationMapping": "Positionsinformationen",
    "locationMappingHint": "Wählen Sie den zu erwartenden Adresstyp oder die zu erwartenden Koordinateninformationen aus der Datei aus."
  },
  "locationMapping": {
    "locationMappingPageHint": "Positionstyp auswählen",
    "useAddress": "Suchen anhand einer Adresse",
    "useAddressHint": "Daten enthalten Adresseninformationen",
    "useCoordinates": "Suchen anhand von Koordinaten",
    "useCoordinatesHint": "Daten enthalten X-/Y-Koordinatenwerte"
  },
  "address": {
    "addressPageHint": "Addresstyp auswählen",
    "singleField": "Einzelnes Feld",
    "singleFieldHint": "Wählen Sie das Feld aus, das die Adresseninformationen enthält.",
    "multiField": "Mehrere Felder",
    "multiFieldHint": "Wählen Sie die Felder aus, die die Adresseninformationen enthalten."
  },
  "coordinates": {
    "coordinatesPageHint": "Wählen Sie die Felder aus, die die Koordinatendaten enthalten."
  },
  "fieldMapping": {
    "fieldMappingPageHint": "Wählen Sie das Quellfeld aus, das dem Zielfeld zugeordnet ist.",
    "sourceField": "Entsprechendes Quellfeld",
    "targetField": "Zielfeld"
  },
  "buttons": {
    "addToMap": "Zur Karte hinzufügen",
    "submit": "Senden",
    "download": "Herunterladen"
  },
  "review": {
    "matched": "Gefunden",
    "reviewMatched": "Positionen gefunden",
    "reviewMatchedHint": "Überprüfen Sie die gefundenen Positionen.",
    "unMatched": "nicht gefunden",
    "reviewUnMatched": "Positionen nicht gefunden",
    "reviewUnMatchedHint": "Überprüfen Sie die nicht gefundenen Positionen. Nicht korrigierte Elemente werden nicht gesendet.",
    "duplicate": "Duplikat",
    "reviewDuplicate": "Doppelte Positionen",
    "reviewDuplicateHint": "Überprüfen Sie Positionen, die bereits im Layer gefunden wurden. Nicht bearbeitete Elemente werden nicht gesendet.",
    "reviewLabelWithCount": "${totalMatchedFeatures} ${headerString} ${headerStringHint}",
    "use": "Verwendung:",
    "fromLayer": "Zielinformationen",
    "target": "Ziel",
    "source": "Quelle",
    "fromFile": "Quellinformationen",
    "locationControlHint": "Adresseninformationen überprüfen",
    "duplicateAction": "Aktion auswählen",
    "item": "Datensatz:",
    "locateFeature": "Feature verorten",
    "removeFeature": "Feature entfernen",
    "featureLocated": "Position gefunden",
    "valuesDoNotMatch": "Entspricht nicht dem vorhandenen Wert",
    "sync": "Adresseninformationen mit Feldinformationen sychronisieren",
    "noFeaturesSaved": "Keine Features erfolgreich gespeichert.",
    "someFeaturesSaved": "${num} Feature(s) erfolgreich gespeichert.",
    "someFeaturesNotSaved": "${num} Feature(s) nicht erfolgreich gespeichert.",
    "feature": "Feature-Informationen überprüfen",
    "locationInfo": "Positionsinformationen überprüfen",
    "selectValue": "Einen Wert auswählen",
    "reviewData": "Daten überprüfen",
    "reviewDataHint": "Überprüfen Sie die Daten vor dem Senden an den Layer.",
    "reviewFeatureHint": "Überprüfen oder bearbeiten Sie die Feature- und Positionsinformationen.",
    "duplicateModify": "Duplikat, Änderung erforderlich",
    "duplicateSave": "Als neues Feature speichern"
  },
  "warningsAndErrors": {
    "invalidCSV": "Fehler beim Abrufen von Elementen aus der CSV-Datei. Überprüfen Sie, ob eine gültige CSV-Datei ausgewählt ist.",
    "noLayersWarning": "Kein gültiger Ziel-Layer konfiguriert. Überprüfen Sie die Konfiguration.",
    "loadWarning": "Für dieses Widget ist eine Feature-Service-Datenquelle erforderlich. Konfigurieren Sie das Widget für die Definition einer Datenquelle.",
    "saveError": "Fehler beim Speichern der Features.",
    "consumesCredits": "Dieses Werkzeug verbraucht Credits, wenn es mit dem ArcGIS Online World Geocoding Service verwendet wird.",
    "noValue": "Feld auswählen",
    "mappingTitle": "",
    "locationMappingComplete": "Positionszuordnung abgeschlossen",
    "fieldMappingComplete": "Feldzuordnung abgeschlossen",
    "settingsCleared": "Die Einstellungen werden gelöscht.",
    "proceed": "Möchten Sie den Vorgang fortsetzen?",
    "itemMoveMatch": "Das Element wurde verortet und in die Liste der gefundenen Positionen verschoben.",
    "itemMoveUnMatched": "Element konnte nicht verortet werden. In die Liste der nicht gefundenen Positionen verschoben.",
    "itemWillBeLocated": "Das Element wird aus der Liste der doppelten Positionen entfernt.",
    "cannotLocate": "Element kann nicht verortet werden. Überprüfen Sie die Postionsinformationen.",
    "invalidMessage": "Ungültiger Wert.",
    "rangeMessage": "Der Wert muss weniger als ${num} Zeichen enthalten.",
    "locatorError": "Der Locator ist ungültig, oder es kann nicht darauf zugegriffen werden.",
    "notConfigured": "Für die aktuellen Verortungsoptionen ist kein Locator konfiguriert.",
    "noMoreLocators": "Keine weiteren Locators konfiguriert"
  },
  "featureToolbar": {
    "locate": "Suchen",
    "save": "Datensatz speichern",
    "cancel": "Änderungen abbrechen",
    "cancelTitle": "Änderungen abbrechen",
    "cancelMessage": "Änderungen am aktuellen Datensatz abbrechen?"
  }
});