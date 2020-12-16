define({
  "taskUrl": "عنوان URL للمهمة",
  "setTask": "تعيين",
  "setTaskPopupTitle": "تعيين مهمة",
  "validate": "تعيين",
  "inValidGPService": "يرجى إدخال خدمة معالجة جغرافية.",
  "noOutputParameterWithGeometryType": "يجب أن تحتوي خدمة المعالجة الجغرافية المحددة على معلمة إخراج واحدة على الأقل بنوع شكل هندسي محدد. يرجى تحديد خدمة معالجة جغرافية مختلفة.",
  "invalidOutputGeometry": "نوع الشكل الهندسي للإخراج لخدمة المعالجة المحددة غير متوافق مع إعدادات المشروع. لا يمكن تخزين نتائج خدمة المعالجة الجغرافية.",
  "GPFeatureRecordSetLayerERR": "يرجى إدخال خدمة معالجة جغرافية بمدخلات من النوع \"GPFeatureRecordSetLayer\" فقط.",
  "invalidInputParameters": "عدد معلمات الإدخال إما أقل من 1 أو أكثر من 3. يرجى إدخال خدمة معالجة جغرافية صحيحة.",
  "projectSetting": {
    "title": "إعدادات المشروع",
    "note": "ملاحظة: تصبح إعدادات المشروع اختيارية، بمجرد أن يتمكن المستخدم من تخزين المشروع في طبقات خريطة الويب المرغوبة بمنطقة انقطاع الشبكة و معلمات الإدخال. يمكن للمستخدم تخزين معلمات إخراج أخرى من علامة التبويب \"المخرجات\".",
    "projectPolygonLayer": "طبقة مضلع المشروع",
    "outputParameterName": "اسم معلمة الإخراج",
    "projectPointLayer": "طبقة نقطة المشروع",
    "selectLabel": "تحديد",
    "polygonLayerHelp": "<p>ستُعرض طبقات المضلع ذات الشروط التالية:<br/><ul><li>يجب أن يكون للطبقة قدرات تحريرية، وهي \"إنشاء\" و\"حذف\" و\"تحديث\"</li><li>يجب أن تشتمل الطبقة على حقلين بنفس الاسم ونوع البيانات:</li><ul><li>الاسم (حقل نوع السلسلة)</li><li>globalid (حقل نوع GlobalID)</li></ul></ul><p/>",
    "outputParameterHelp": "<p>سيتم عرض طبقات مضلع الإخراج من URL المهمة<p/>",
    "pointLayerHelp": "<p>ستُعرض طبقات النقطة ذات الشروط التالية:<br/><ul><li>يجب أن يكون للطبقة قدرات تحريرية، وهي \"إنشاء\" و\"حذف\" و\"تحديث\"</li><li>يجب أن تشتمل الطبقة على حقلين بنفس الاسم ونوع البيانات:</li><ul><li>inputtype (حقل نوع السلسلة)</li><li>projectid (حقل نوع GUID)</li></ul></ul><p/>"
  },
  "inputOutputTab": {
    "flag": "علامة",
    "barrier": "Barrier",
    "skip": "تخطي",
    "title": "الإدخال",
    "inputTooltip": "تلميح الأدوات",
    "typeText": "النوع",
    "symbol": "رمز",
    "summaryEditorText": "نص الملخص",
    "summaryTextTitle": "إدخال نص لعرضه بعلامة تبويب الإدخال"
  },
  "summaryTab": {
    "title": "الناتج",
    "summaryFieldsetText": "إعدادات الملخص",
    "inputOutput": "الإدخال/الإخراج",
    "field": "حقل",
    "operator": "مُشغل",
    "inputOperatorCountOption": "العدد",
    "outputOperatorCountOption": "العدد",
    "outputOperatorSkipCountOption": "تخطي العد",
    "fieldOperatorSumOption": "مجموع",
    "fieldOperatorMinOption": "الحد الأدنى",
    "fieldOperatorMaxOption": "الحد الأقصى",
    "fieldOperatorMeanOption": "المتوسط",
    "expressionAddButtonText": "إضافة",
    "expressionVerifyButtonText": "تحقق من",
    "summaryEditorText": "نص الملخص",
    "zoomText": "التكبير/التصغير بعد التتبع",
    "summarSettingTooltipText": "إضافة عدد الإدخالات/الإخراجات",
    "symbol": "رمز",
    "outputParametersText": "معلمات الإخراج",
    "skipText": "يمكن تخطيه",
    "visibilityText": "مرئي",
    "exportToCsvText": "تصدير إلى CSV",
    "settitngstext": "إعدادات",
    "saveToLayerText": "حفظ على الطبقة (اختياري)",
    "inputLabel": "التسمية",
    "inputTooltip": "تلميح الأدوات",
    "outputDisplay": "نص العرض",
    "addFieldTitle": "إضافة حقل",
    "setScale": "تعيين مقياس",
    "enterDisplayText": "إدخال نص العرض",
    "saveToLayerHelp": "<p>سيتم عرض الطبقة ذات الشروط التالية :يجب أن يكون لطبقة <br/><ul><li>قدرات تحريرية أي \"الإنشاء\" و\"الحذف\" و\"التحديث\" يجب أن يكون لطبقة</li><li>حقلان باسم ونوع البيانات:</li><ul><li>اسم المعلمة (حقل نوع السلسلة)</li><li>معرف المشروع (حقل نوع الدليل)</li></ul></ul><p/>",
    "exportToCsvDisplayText": "CSV",
    "summaryTextTitle": "إدخال ملخص لعرضه بعلامة تبويب الإخراج",
    "addSummaryItemsTitle": "إضافة عناصر ملخص"
  },
  "validationErrorMessage": {
    "webMapError": "لا توجد طبقات متاحة في خريطة الويب. يرجى تحديد خريطة ويب صالحة.",
    "inputTypeFlagGreaterThanError": "لا يمكن أن يكون إدخال علم النوع أكثر من واحد.",
    "inputTypeFlagLessThanError": "يجب توافر علم نوع واحد من على الأقل.",
    "inputTypeBarrierErr": "لا يمكن أن يكون حاجز النوع أكثر من واحد.",
    "inputTypeSkipErr": "لا يمكن أن يكون تخطي النوع أكثر من واحد.",
    "displayTextForButtonError": "لا يمكن أن يكون نص العرض للزر \"تشغيل\" فارغًا.",
    "UnableToLoadGeoprocessError": "تعذر تحميل خدمة المعالجة الجغرافية.",
    "invalidSummaryExpression": "تعبير غير صالح.",
    "validSummaryExpression": "نجاح!",
    "invalidProjectSettings": "إعدادات مشروع غير صحيحة.<br/> يرجى تحديد قيمة صحيحة في '${projectSetting}'."
  },
  "hintText": {
    "labelTextHint": "تلميح: ينبغي تقديم علامة عرض للوحة نتيجة معلمة الإخراج.",
    "displayTextHint": "تلميح: سيتم عرض هذا في لوحة التفاصيل لمعلمة الإخراج هذه.",
    "inputTextHint": "تلميح: أنشئ تعبيرك أدناه باستخدام زر \"إضافة عناصر الملخص\".",
    "expressionHint": "تلميح: حدد البنود وانقر فوق إضافة لإنشاء التعبير."
  }
});