define({
  "_widgetLabel": "Модель пригодности",
  "general": {
    "clear": "Сброс",
    "cancel": "Отмена",
    "save": "Запуск",
    "saveAs": "Экспорт"
  },
  "saveModel": {
    "save": "Экспорт",
    "title": "Заголовок: ",
    "summary": "Итоговая информация: ",
    "description": "Описание: ",
    "tags": "Теги: ",
    "folder": "Папка: ",
    "homeFolderPattern": "{username} (Home)",
    "failed": "Экспорт не удался."
  },
  "util": {
    "colorRamp": {
      "1": "Максимальное низкое",
      "2": "Очень низкое",
      "3": "Низкое",
      "4": "Средне-низкое",
      "5": "Среднее",
      "6": "Средне-высокое",
      "7": "Высокое",
      "8": "Очень высокое",
      "9": "Максимально высокое",
      "low": "Низкое",
      "high": "Высокое",
      "tipPattern": "{label} ({value})",
      "flipCaption": "Перевернуть"
    }
  },
  "wro": {
    "caption": "Модель пригодности",
    "browsePrompt": "Сервис взвешенного наложения",
    "selectLayersCaption": "Выбрать слои",
    "selectLayers": "Слои",
    "designModelCaption": "Модель дизайна",
    "designModel": "Модель дизайна",
    "transparency": "Прозрачность",
    "visible": "Видимый",
    "total": "Общий",
    "unableToLoad": "Не удалось загрузить модель.",
    "projectNotOpen": "Проект не открылся.",
    "readMore": "Читать еще...",
    "validation": {
      "validating": "Проверка...",
      "invalidItemCaption": "Предупреждение Сервиса взвешенного наложения",
      "notAnImageService": "Этот элемент не является сервисом изображений.",
      "notAWroService": "Этот элемент не является сервисом взвешенного наложения.",
      "undefinedUrl": "URL этого элемента не был определен.",
      "inaccessible": "Сервис недоступен.",
      "generalError": "Невозможно открыть элемент.",
      "missingFieldPattern": "{field} является обязательным.",
      "notAllowRasterFunction": "allowRasterFunction должна быть указана как true",
      "notNearestResampling": "defaultResamplingMethod должен быть Nearest",
      "notIsWeightedOverlayProp": "Ключевое свойство IsWeightedOverlay должно быть true",
      "invalidLink": "Некорректный URL. Не удалось открыть сайт для выбранного слоя.",
      "unexpectedError": "Произошла неожиданная ошибка.",
      "rangeMessage": "Значение должно быть между ${0} и ${1}",
      "rangeMessage100": "Значение должно быть между 0 и 100.",
      "maxLayers": "Максимум ${0} слоев допускается сервисом, вам нужно удалить слои перед добавлением новых.",
      "notFound": "Слой ${0} не найден в сервисе взвешенного наложения",
      "wroServiceNotDefined": "Для модели не определен сервис взвешенного наложения.",
      "overlayLayerOutputInvalid": "Слой наложения [${0}] в диапазоне [${1}] выходного значения утрачен или некорректен",
      "overlayLayerInputInvalid": "Слой наложения [${0}] в диапазоне [${1}] входного значения мин/макс утрачен или некорректен",
      "overlayLayerRangesMissing": "Слой наложения [${0}] потерял диапазоны классификации",
      "overlayLayerWeight": "Веса слоя наложения должны быть не более 100",
      "overlayLayerRequired": "Требуется как минимум один слой наложения",
      "overlayLayerNotDefined": "Слои наложения не определены",
      "requiresColormap": "Для этой функции растра необходима цветовая карта, но у модели нет корректного определения цветовой карты",
      "createModelError": "Ошибка создания модели",
      "invalidModel": "Модель некорректна",
      "imageServiceNotDefined": "Слой сервиса изображений не определен",
      "imageLayerNotDefined": "Слой сервиса изображений не определен",
      "histogramNotDefined": "Не определена функция гистограммы взвешенного наложения."
    },
    "colorRampLabel": {
      "Green Yellow Red": "Зеленый-Желтый-Красный",
      "Red Yellow Green": "Красный-Желтый-Зеленый",
      "Yellow to Dark Red": "От желтого к темно-красному",
      "Dark Red to Yellow": "От темно-красного к желтому",
      "Light Gray to Dark Gray": "От светло-серого к темно-серому",
      "Dark Gray to Light Gray": "От темно-серого к светло-серому",
      "Light Brown to Dark Brown": "От светло-коричневого к темно-коричневому",
      "Dark Brown to Light Brown": "От темно-коричневого к светло-коричневому",
      "Full Spectrum - Bright Red to Blue": "Полный спектр - От ярко-красного до синего",
      "Full Spectrum - Bright Blue to Red": "Полный спектр - От ярко-синего до красного",
      "Partial Spectrum - Yellow to Blue": "Частичный спектр - От желтого до синего",
      "Partial Spectrum - Blue to Yellow": "Частичный спектр - От синего до желтого",
      "Yellow-Green to Dark Blue": "От желтого к зеленому, затем к темно-синему",
      "Dark Blue to Yellow-Green": "От темно-синего к зеленому. затем желтому",
      "Cold to Hot Diverging": "Рассеивание от холодного к теплому",
      "Hot to Cold Diverging": "Рассеивание от горячего к холодному",
      "Surface - Low to High": "Поверхность - От низкой к высокой",
      "Surface - High to Low": "Поверхность - От высокой к низкой"
    }
  },
  "tabs": {
    "layers": "Слои",
    "model": "Модель",
    "chart": "Диаграмма"
  },
  "chart": {
    "prompt": "Пространственные объекты",
    "working": "Обновление...",
    "polygonTool": "Нарисовать полигон.",
    "freehandPolygonTool": "Нарисовать полигон произвольной формы",
    "selectTool": "Выбрать из слоя",
    "panTool": "Переместить",
    "clearButton": "Очистить",
    "noModelLayer": "Нет модели.",
    "noSubjectLayers": "На вашей карте нет полигональных слоев.",
    "tipPattern": "${category} - ${label}: ${percent}%",
    "tipPattern2": "${category}: ${percent}%",
    "labelPattern": "${category} - ${label}"
  }
});