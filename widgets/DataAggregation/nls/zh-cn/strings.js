define({
  "_widgetLabel": "数据聚合",
  "startPage": {
    "defaultStartPageInstructions": "此微件将帮助处理文件中的数据并将其提交到地图中的所选图层。<br/> <br/> 文件中的值必须用逗号、制表符、分号或竖线分隔。",
    "dragDrop": "拖放",
    "browse": "浏览至文件",
    "or": "OR",
    "userPrivilege": "您的帐户不具备创建或修改数据的权限。",
    "userCredits": "${widgetName} 需要配额才能使用 ${locator} 定位器。",
    "contactAdmin": "请联系组织的管理员以申请额外配额。",
    "contactAdminEdit": "请联系组织的管理员以申请编辑权限。",
    "canUseLocator": "${locator} 定位器将用于定位要素。",
    "notEnoughCredits": "配额不足。",
    "locationAndField": "位置和字段信息",
    "locationAndFieldHint": "从应该用于更新目标图层的文件中选择值。",
    "cannotUseLocator": "无法使用 ${widgetName}",
    "noAnonymousEdit": "${layerName} 图层不支持匿名编辑。",
    "pleaseLogin": "请登录到 ${org} 组织或联系组织管理员以请求启用匿名编辑。",
    "invalidEdit": "权限无效",
    "unableToAccess": "无法访问 ${layerName}",
    "appropriateCredentials": "请验证您是否使用了相应凭据进行登录。",
    "shared": "请联系组织管理员以申请 ${layerName} 图层的访问权限。",
    "targetLayerLabel": "目标图层",
    "homeButtonLabel": "主页"
  },
  "mapping": {
    "schemaMapping": "字段信息",
    "schemaMappingHint": "从与图层中的字段相关联的文件中选择字段。",
    "locationMapping": "位置信息",
    "locationMappingHint": "从文件中选择所需的地址或坐标信息类型。"
  },
  "locationMapping": {
    "locationMappingPageHint": "选择位置类型",
    "useAddress": "使用地址定位",
    "useAddressHint": "数据包含地址信息",
    "useCoordinates": "使用坐标定位",
    "useCoordinatesHint": "数据包含 X/Y 坐标值"
  },
  "address": {
    "addressPageHint": "选择地址类型",
    "singleField": "单个字段",
    "singleFieldHint": "选择一个包含地址信息的字段",
    "multiField": "多个字段",
    "multiFieldHint": "选择多个包含地址信息的字段"
  },
  "coordinates": {
    "coordinatesPageHint": "选择多个包含坐标数据的字段"
  },
  "fieldMapping": {
    "fieldMappingPageHint": "选择映射到目标字段的源字段",
    "sourceField": "匹配源字段",
    "targetField": "目标字段"
  },
  "buttons": {
    "addToMap": "添加到地图",
    "submit": "提交",
    "download": "下载"
  },
  "review": {
    "matched": "已找到",
    "reviewMatched": "已找到位置",
    "reviewMatchedHint": "请查看已找到的位置。",
    "unMatched": "未找到",
    "reviewUnMatched": "未找到任何位置",
    "reviewUnMatchedHint": "请查看未找到的位置。 将不会提交未进行校正的项目。",
    "duplicate": "重复",
    "reviewDuplicate": "位置重复",
    "reviewDuplicateHint": "请查看图层中已找到的位置。 将不会提交未解决的项目。",
    "reviewLabelWithCount": "${totalMatchedFeatures} ${headerString} ${headerStringHint}",
    "use": "使用：",
    "fromLayer": "目标信息",
    "target": "目标",
    "source": "源",
    "fromFile": "源信息",
    "locationControlHint": "查看地址信息",
    "duplicateAction": "选择操作",
    "item": "记录：",
    "locateFeature": "定位要素",
    "removeFeature": "移除要素",
    "featureLocated": "已找到位置",
    "valuesDoNotMatch": "与现有值不匹配",
    "sync": "包含字段信息的同步地址信息",
    "noFeaturesSaved": "未成功要素保存",
    "someFeaturesSaved": "已成功保存 ${num} 个要素。",
    "someFeaturesNotSaved": "${num} 个要素未成功保存。",
    "feature": "查看要素信息",
    "locationInfo": "查看位置信息",
    "selectValue": "选择值",
    "reviewData": "查看数据",
    "reviewDataHint": "在提交到图层之前，请查看您的数据。",
    "reviewFeatureHint": "请查看或编辑您的要素和位置信息。",
    "duplicateModify": "重复，需要进行更改",
    "duplicateSave": "另存为新要素"
  },
  "warningsAndErrors": {
    "invalidCSV": "从 CSV 提取项目时出错，请检查是否已选择有效的 CSV 文件。",
    "noLayersWarning": "未配置任何有效的目标图层，请检查配置。",
    "loadWarning": "此微件需要要素服务数据源。 请配置此微件以定义数据源。",
    "saveError": "保存要素时出错。",
    "consumesCredits": "此工具在与 ArcGIS Online 世界地理编码服务一起使用时会消耗配额。",
    "noValue": "选择字段",
    "mappingTitle": "",
    "locationMappingComplete": "位置映射完成",
    "fieldMappingComplete": "字段映射完成",
    "settingsCleared": "设置将被清除。",
    "proceed": "是否要继续?",
    "itemMoveMatch": "该项目已定位并已移至找到的位置列表",
    "itemMoveUnMatched": "无法定位项目。 已移至未找到的位置列表。",
    "itemWillBeLocated": "该项目将从重复位置列表移除。",
    "cannotLocate": "无法定位项目。 请验证位置信息。",
    "invalidMessage": "无效值。",
    "rangeMessage": "值必须小于 ${num} 个字符。",
    "locatorError": "定位器无效或无法访问。",
    "notConfigured": "未针对当前定位选项对定位器进行配置",
    "noMoreLocators": "未配置任何其他定位器"
  },
  "featureToolbar": {
    "locate": "定位",
    "save": "保存记录",
    "cancel": "取消编辑",
    "cancelTitle": "取消编辑",
    "cancelMessage": "是否取消对当前记录的编辑？"
  }
});