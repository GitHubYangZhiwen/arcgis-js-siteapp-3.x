define({
  "taskUrl": "Task-URL",
  "setTask": "Festlegen",
  "setTaskPopupTitle": "Task festlegen",
  "validate": "Festlegen",
  "inValidGPService": "Geben Sie einen gültigen Geoverarbeitungsservice an.",
  "noOutputParameterWithGeometryType": "Der ausgewählte Geoverarbeitungsservice muss mindestens einen Ausgabeparameter mit Angabe des Geometrietyps aufweisen. Wählen Sie einen anderen Geoverarbeitungsservice aus.",
  "invalidOutputGeometry": "Der Ausgabegeometrietyp des ausgewählten Geoverarbeitungsservice ist nicht mit den Projekteinstellungen kompatibel. Die Ergebnisse des Geoverarbeitungsservice können nicht gespeichert werden.",
  "GPFeatureRecordSetLayerERR": "Geben Sie einen Geoverarbeitungsservice an, der nur Eingaben vom Typ 'GPFeatureRecordSetLayer' enthält.",
  "invalidInputParameters": "Die Anzahl der Eingabeparameter ist kleiner als 1 oder größer als 3. Geben Sie einen gültigen Geoverarbeitungsservice an.",
  "projectSetting": {
    "title": "Projekteinstellungen",
    "note": "Hinweis: Projekteinstellungen sind optional. Nach der Konfiguration kann der Benutzer das Projekt in der gewünschten Webkarte zusammen mit dem Bereich des Netzwerkausfalls und den Eingabeparametern speichern. Der Benutzer kann andere Ausgabeparameter in der Registerkarte \"Ausgabe\" speichern.",
    "projectPolygonLayer": "Projekt-Polygon-Layer",
    "outputParameterName": "Name des Ausgabeparameters",
    "projectPointLayer": "Projekt-Punkt-Layer",
    "selectLabel": "Auswählen",
    "polygonLayerHelp": "<p>Polygon-Layer mit den folgenden Bedingungen werden angezeigt:<br/><ul><li>Layer muss die Bearbeitungsfunktionen \"Erstellen\", \"Löschen\" und \"Aktualisieren\" aufweisen</li><li>Layer muss 2 Felder mit genau dem folgendem Namen und Datentyp aufweisen:</li><ul><li>name (Feld vom Typ \"Zeichenfolge\")</li><li>globalid (Feld vom Typ \"GlobalID\")</li></ul></ul><p/>",
    "outputParameterHelp": "<p>Ausgabe-Polygon-Layer aus der Task-URL werden angezeigt<p/>",
    "pointLayerHelp": "<p>Punkt-Layer mit den folgenden Bedingungen werden angezeigt:<br/><ul><li>Layer muss die Bearbeitungsfunktionen \"Erstellen\", \"Löschen\" und \"Aktualisieren\" aufweisen</li><li>Layer muss 2 Felder mit genau dem folgendem Namen und Datentyp aufweisen:</li><ul><li>inputtype (Feld vom Typ \"Zeichenfolge\")</li><li>projectid (Feld vom Typ \"GUID\")</li></ul></ul><p/>"
  },
  "inputOutputTab": {
    "flag": "Flagge",
    "barrier": "Barriere",
    "skip": "Überspringen",
    "title": "Eingabe",
    "inputTooltip": "Quickinfo",
    "typeText": "Typ",
    "symbol": "Symbol",
    "summaryEditorText": "Text der Zusammenfassung",
    "summaryTextTitle": "Text für die Anzeige auf der Registerkarte \"Eingabe\" angeben"
  },
  "summaryTab": {
    "title": "Ausgabe",
    "summaryFieldsetText": "Einstellungen für Zusammenfassungen",
    "inputOutput": "Eingabe/Ausgabe",
    "field": "Feld",
    "operator": "Operator",
    "inputOperatorCountOption": "Anzahl",
    "outputOperatorCountOption": "Anzahl",
    "outputOperatorSkipCountOption": "Anzahl überspringen",
    "fieldOperatorSumOption": "Summe",
    "fieldOperatorMinOption": "Min.",
    "fieldOperatorMaxOption": "Max.",
    "fieldOperatorMeanOption": "Mittelwert",
    "expressionAddButtonText": "Hinzufügen",
    "expressionVerifyButtonText": "Überprüfen",
    "summaryEditorText": "Text der Zusammenfassung",
    "zoomText": "Nach der Verfolgung automatisch zoomen",
    "summarSettingTooltipText": "Eingabe-/Ausgabeanzahl hinzufügen",
    "symbol": "Symbol",
    "outputParametersText": "Ausgabeparameter",
    "skipText": "Überspringbar",
    "visibilityText": "Sichtbar",
    "exportToCsvText": "In CSV exportieren",
    "settitngstext": "Einstellungen",
    "saveToLayerText": "In Layer speichern (optional)",
    "inputLabel": "Beschriftung",
    "inputTooltip": "Quickinfo",
    "outputDisplay": "Anzeigetext",
    "addFieldTitle": "Feld hinzufügen",
    "setScale": "Maßstab festlegen",
    "enterDisplayText": "Anzeigetext eingeben",
    "saveToLayerHelp": "<p>Layer mit den folgenden Bedingungen werden angezeigt:<br/><ul><li>Layer muss die Bearbeitungsfunktionen \"Erstellen\", \"Löschen\" und \"Aktualisieren\" aufweisen</li><li>Layer muss zwei Felder mit folgendem Namens- und Datentyp aufweisen:</li><ul><li>parametername (Feld vom Typ \"Zeichenfolge\")</li><li>projectid (Feld vom Typ \"GUID\")</li></ul></ul><p/>",
    "exportToCsvDisplayText": "CSV",
    "summaryTextTitle": "Text der Zusammenfassung für die Anzeige auf der Registerkarte \"Ausgabe\" angeben",
    "addSummaryItemsTitle": "Zusammenfassungselemente hinzufügen"
  },
  "validationErrorMessage": {
    "webMapError": "Keine Layer in der Webkarte verfügbar. Wählen Sie eine gültige Webkarte aus.",
    "inputTypeFlagGreaterThanError": "Eingabe vom Typ \"Flag\" darf nur einmal vorhanden sein.",
    "inputTypeFlagLessThanError": "Es ist mindestens eine Eingabe vom Typ \"Flag\" erforderlich.",
    "inputTypeBarrierErr": "Eingabe vom Typ \"Barriere\" darf nur einmal vorhanden sein.",
    "inputTypeSkipErr": "Eingabe vom Typ \"Überspringen\" darf nur einmal vorhanden sein.",
    "displayTextForButtonError": "Der Anzeigetext für die Schaltfläche 'Ausführen' darf nicht leer sein.",
    "UnableToLoadGeoprocessError": "Geoverarbeitungsservice kann nicht geladen werden.",
    "invalidSummaryExpression": "Ungültiger Ausdruck.",
    "validSummaryExpression": "Erfolgreich abgeschlossen.",
    "invalidProjectSettings": "Ungültige Projekteinstellungen.<br/>Wählen Sie in '${projectSetting}' einen gültigen Wert aus."
  },
  "hintText": {
    "labelTextHint": "Hinweis: Geben Sie eine Anzeigebeschriftung für den Ergebnisbereich des Ausgabeparameters an.",
    "displayTextHint": "Hinweis: Dies wird im Bereich \"Details\" des Ausgabeparameters angezeigt.",
    "inputTextHint": "Hinweis: Erstellen Sie unten den Ausdruck unter Verwendung der Schaltfläche \"Zusammenfassungselemente hinzufügen\".",
    "expressionHint": "Hinweis: Wählen Sie Elemente aus, und klicken Sie auf \"Hinzufügen\", um einen Ausdruck zu erstellen."
  }
});