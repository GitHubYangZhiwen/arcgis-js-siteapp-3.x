define({
  "taskUrl": "Adres URL zadania",
  "setTask": "Zestaw",
  "setTaskPopupTitle": "Skonfiguruj zadanie",
  "validate": "Zestaw",
  "inValidGPService": "Wprowadź prawidłową usługę geoprzetwarzania.",
  "noOutputParameterWithGeometryType": "Wybrana usługa geoprzetwarzania musi mieć co najmniej jeden parametr wynikowy o określonym typie geometrii. Wybierz inną usługę geoprzetwarzania.",
  "invalidOutputGeometry": "Wynikowy typ geometrii wybranej usługi geoprzetwarzania nie jest zgodny z ustawieniami projektu. Nie można zapisać wyników usługi geoprzetwarzania.",
  "GPFeatureRecordSetLayerERR": "Wprowadź usługę geoprzetwarzania z danymi wejściowymi tylko typu 'GPFeatureRecordSetLayer'.",
  "invalidInputParameters": "Liczba parametrów wejściowych jest mniejsza niż 1 lub większa niż 3. Wprowadź prawidłową usługę geoprzetwarzania.",
  "projectSetting": {
    "title": "Ustawienia projektu",
    "note": "Uwaga: Ustawienia projektu są opcjonalne, po ich skonfigurowaniu użytkownik może zapisać projekt na żądanych warstwach mapy internetowej z obszarem awarii sieci i parametrami wejściowymi. Użytkownik może zapisać pozostałe parametry wyjściowe z karty “Dane wynikowe”.",
    "projectPolygonLayer": "Warstwa poligonowa projektu",
    "outputParameterName": "Nazwa parametru wynikowego",
    "projectPointLayer": "Warstwa punktowa projektu",
    "selectLabel": "Zaznacz",
    "polygonLayerHelp": "<p>Zostaną wyświetlone warstwy poligonowe spełniające następujące warunki:<br/><ul><li>Warstwa musi mieć funkcje edycji: Tworzenie, Usuwanie i Aktualizacja</li><li>Warstwa musi mieć 2 pola o dokładnie tych nazwach i typach danych:</li><ul><li>name (pole typu znakowego)</li><li>globalid (pole typu GlobalID)</li></ul></ul><p/>",
    "outputParameterHelp": "<p>Zostaną wyświetlone wynikowe warstwy poligonowe z adresu URL zadania<p/>",
    "pointLayerHelp": "<p>Zostaną wyświetlone warstwy punktowe spełniające następujące warunki:<br/><ul><li>Warstwa musi mieć funkcje edycji: Tworzenie, Usuwanie i Aktualizacja</li><li>Warstwa musi mieć 2 pola o dokładnie tych nazwach i typach danych:</li><ul><li>inputtype (pole typu znakowego)</li><li>projectid (pole typu GUID)</li></ul></ul><p/>"
  },
  "inputOutputTab": {
    "flag": "Flaga",
    "barrier": "Bariera",
    "skip": "Pomiń",
    "title": "Dane wejściowe",
    "inputTooltip": "Etykieta narzędzia",
    "typeText": "Typ",
    "symbol": "Symbol",
    "summaryEditorText": "Tekst podsumowania",
    "summaryTextTitle": "Wprowadź tekst, który będzie wyświetlany na karcie wejściowej"
  },
  "summaryTab": {
    "title": "Dane wynikowe",
    "summaryFieldsetText": "Ustawienia podsumowania",
    "inputOutput": "Dane wejściowe/Dane wynikowe",
    "field": "Pole",
    "operator": "Operator",
    "inputOperatorCountOption": "Liczba",
    "outputOperatorCountOption": "Liczba",
    "outputOperatorSkipCountOption": "SkipCount",
    "fieldOperatorSumOption": "Suma",
    "fieldOperatorMinOption": "Min",
    "fieldOperatorMaxOption": "Maks",
    "fieldOperatorMeanOption": "Średnia",
    "expressionAddButtonText": "Dodaj",
    "expressionVerifyButtonText": "Sprawdź",
    "summaryEditorText": "Tekst podsumowania",
    "zoomText": "Automatycznie powiększaj po wykonaniu trasowania",
    "summarSettingTooltipText": "Dodaj liczbę elementów wejściowych/wynikowych",
    "symbol": "Symbol",
    "outputParametersText": "Parametry wynikowe",
    "skipText": "Z możliwością pominięcia",
    "visibilityText": "Widoczne",
    "exportToCsvText": "Export to CSV",
    "settitngstext": "Ustawienia",
    "saveToLayerText": "Zapisz do warstwy (opcjonalne)",
    "inputLabel": "Etykieta",
    "inputTooltip": "Etykieta narzędzia",
    "outputDisplay": "Tekst wyświetlany",
    "addFieldTitle": "Dodaj pole",
    "setScale": "Ustaw skalę",
    "enterDisplayText": "Wprowadź tekst wyświetlany",
    "saveToLayerHelp": "<p>Zostaną wyświetlone warstwy spełniające poniższe warunki:<br/><ul><li>Warstwa musi mieć możliwość edycji, a więc atrybut Tworzenie, Usuwanie i Aktualizacja</li><li>Warstwa musi mieć dwa pola z nazwą i typem danych:</li><ul><li>parametername (pole typu znakowego)</li><li>projectid (pole typu Guid)</li></ul></ul><p/>",
    "exportToCsvDisplayText": "CSV",
    "summaryTextTitle": "Wprowadź tekst podsumowania, który będzie wyświetlany na karcie wynikowej",
    "addSummaryItemsTitle": "Dodaj elementy podsumowania"
  },
  "validationErrorMessage": {
    "webMapError": "Brak dostępnych warstw na mapie internetowej. Wybierz prawidłową mapę internetową.",
    "inputTypeFlagGreaterThanError": "Danych wejściowych typu flaga nie może być więcej niż jedna.",
    "inputTypeFlagLessThanError": "Wymagana jest przynajmniej jedna dana wejściowa typu flaga.",
    "inputTypeBarrierErr": "Danych wejściowych typu bariera nie może być więcej niż jedna.",
    "inputTypeSkipErr": "Danych wejściowych typu pomiń nie może być więcej niż jedna.",
    "displayTextForButtonError": "Tekst wyświetlany dla przycisku 'Uruchom' nie może być pusty.",
    "UnableToLoadGeoprocessError": "Nie można wczytać usługi geoprzetwarzania.",
    "invalidSummaryExpression": "Nieprawidłowe wyrażenie.",
    "validSummaryExpression": "Sukces!",
    "invalidProjectSettings": "Nieprawidłowe ustawienia projektu.<br/>Wybierz prawidłową wartość w polu '${projectSetting}'."
  },
  "hintText": {
    "labelTextHint": "Wskazówka: Udostępnia wyświetlaną etykietę dla panelu wyników parametrów wynikowych.",
    "displayTextHint": "Wskazówka: Będzie ona wyświetla na panelu szczegółów dla tego parametru wynikowego.",
    "inputTextHint": "Wskazówka: utwórz poniżej wyrażenie przy użyciu przycisku Dodaj elementy podsumowania.",
    "expressionHint": "Wskazówka: Wybierz elementy i kliknij przycisk dodawania, aby zbudować wyrażenie."
  }
});