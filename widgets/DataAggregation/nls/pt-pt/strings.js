define({
  "_widgetLabel": "Agregação de Dados",
  "startPage": {
    "defaultStartPageInstructions": "Este widget irá contribuir para o processamento e submissão de dados de um ficheiro para a layer selecionada no mapa.<br/> <br/>Os valores incluídos no ficheiro devem de ser delimitados por vírgulas, separadores, pontos e vírgula, ou barras verticais.",
    "dragDrop": "Arrastar e Soltar",
    "browse": "Navegar para Ficheiro",
    "or": "OU",
    "userPrivilege": "A sua conta não tem permissão para criar ou modificar dados.",
    "userCredits": "${widgetName} requer créditos para usar o localizador ${locator}.",
    "contactAdmin": "Contacte o administrador da organização para solicitar créditos adicionais.",
    "contactAdminEdit": "Contacte o administrador da organização para solicitar permissão de edição.",
    "canUseLocator": "O localizador ${locator} será usado para localizar features.",
    "notEnoughCredits": "Créditos insuficientes.",
    "locationAndField": "Localização e Informação de Campo",
    "locationAndFieldHint": "Selecione os valores do ficheiro que deverão ser usados para atualizar a layer alvo.",
    "cannotUseLocator": "Não foi possível usar ${widgetName}",
    "noAnonymousEdit": "A layer ${layerName} não suporta edição anónima.",
    "pleaseLogin": "Inicie sessão na organização ${org} ou contacte o administrador da organização para ativar edição anónima.",
    "invalidEdit": "Permissão Inválida",
    "unableToAccess": "Não foi possível aceder a ${layerName}",
    "appropriateCredentials": "Verifique que tem sessão iniciada com as credenciais adequadas.",
    "shared": "Contacte o administrador da organização para solicitar acesso à layer ${layerName}.",
    "targetLayerLabel": "Layer Alvo",
    "homeButtonLabel": "Início"
  },
  "mapping": {
    "schemaMapping": "Informação do Campo",
    "schemaMappingHint": "Selecione campos do ficheiro que se correlacionam com os campos na camada.",
    "locationMapping": "Informação de Localização",
    "locationMappingHint": "Selecione o tipo de endereço ou informações de coordenadas que deverão encontrar-se no ficheiro."
  },
  "locationMapping": {
    "locationMappingPageHint": "Selecionar tipo de local",
    "useAddress": "Localizar utilizando um endereço",
    "useAddressHint": "Os dados contêm informações de endereços",
    "useCoordinates": "Localizar utilizando coordenadas",
    "useCoordinatesHint": "Os dados contêm valores de coordenadas X/Y"
  },
  "address": {
    "addressPageHint": "Selecionar tipo de endereço",
    "singleField": "Campo único",
    "singleFieldHint": "Selecione o campo com as informações de endereço",
    "multiField": "Múltiplos campos",
    "multiFieldHint": "Selecione os campos com as informações de endereço"
  },
  "coordinates": {
    "coordinatesPageHint": "Selecione os campos com os dados de coordenadas"
  },
  "fieldMapping": {
    "fieldMappingPageHint": "Selecione o campo de origem que cartografa para o campo-alvo",
    "sourceField": "A Corresponder Campo de Origem",
    "targetField": "Campo de Destino"
  },
  "buttons": {
    "addToMap": "Adicionar ao Mapa",
    "submit": "Enviar",
    "download": "Descarregar"
  },
  "review": {
    "matched": "Encontrado(a)",
    "reviewMatched": "Localizações Encontradas",
    "reviewMatchedHint": "Rever localizações encontradas.",
    "unMatched": "não Encontrado(a)",
    "reviewUnMatched": "Localizações não Encontradas",
    "reviewUnMatchedHint": "Rever localizações não encontradas. Itens não corrigidos não serão submetidos.",
    "duplicate": "Duplicar",
    "reviewDuplicate": "Duplicar Localizações",
    "reviewDuplicateHint": "Rever localizações existentes na layer. Itens não abordados não serão submetidos.",
    "reviewLabelWithCount": "${totalMatchedFeatures} ${headerString} ${headerStringHint}",
    "use": "Usar:",
    "fromLayer": "Informações de destino",
    "target": "Destino",
    "source": "Fonte",
    "fromFile": "Informações da fonte",
    "locationControlHint": "Rever informações de endereço",
    "duplicateAction": "Selecionar uma ação",
    "item": "Registo:",
    "locateFeature": "Localizar Elemento",
    "removeFeature": "Remover Elemento",
    "featureLocated": "Localização Encontrada",
    "valuesDoNotMatch": "Não corresponde ao valor existente",
    "sync": "Sincronizar informações de endereço com informações de campo",
    "noFeaturesSaved": "Nenhuma feature guardada com sucesso",
    "someFeaturesSaved": "${num} features(s) guardada(s) com sucesso.",
    "someFeaturesNotSaved": "${num} features(s) não foi(foram) guardada(s) com sucesso.",
    "feature": "Rever Informações da Feature",
    "locationInfo": "Rever Informações da Localização",
    "selectValue": "Selecionar um Valor",
    "reviewData": "Rever Dados",
    "reviewDataHint": "Rever os seus dados antes de submeter à layer.",
    "reviewFeatureHint": "Reveja ou edite as informações da sua feature e localização.",
    "duplicateModify": "Duplicar, necessita de alterações",
    "duplicateSave": "Guardar como nova feature"
  },
  "warningsAndErrors": {
    "invalidCSV": "Erro ao obter itens de CSV; verifique se foi selecionado um ficheiro CSV válido.",
    "noLayersWarning": "Nenhuma layer alvo válida configurada; verifique a configuração.",
    "loadWarning": "Este widget requer uma fonte de dados de Serviço da Feature Configure o widget para definir uma fonte de dados.",
    "saveError": "Erro ao guardar elementos.",
    "consumesCredits": "Esta ferramenta consome créditos quando utilizada com o ArcGIS Online World Geocoding Service",
    "noValue": "Selecionar um campo",
    "mappingTitle": "",
    "locationMappingComplete": "Cartografia de Localização Completa",
    "fieldMappingComplete": "Cartografia de Ficheiro Completa",
    "settingsCleared": "As definições serão apagadas.",
    "proceed": "Pretende continuar?",
    "itemMoveMatch": "O item foi localizado e movido para a lista de localizações encontradas",
    "itemMoveUnMatched": "Não foi possível localizar item. Movido para a lista de localizações não encontradas.",
    "itemWillBeLocated": "O item será removido da lista de localizações duplicadas.",
    "cannotLocate": "Não foi possível localizar item. Verifique as informações da localização.",
    "invalidMessage": "Valor Inválido.",
    "rangeMessage": "O valor deve inferior a ${num} caracteres.",
    "locatorError": "Localizador Inválido ou Inacessível.",
    "notConfigured": "localizador não configurado para opções de localização atuais",
    "noMoreLocators": "nenhum localizador adicional configurado"
  },
  "featureToolbar": {
    "locate": "Localizar",
    "save": "Guardar registo",
    "cancel": "Cancelar edições",
    "cancelTitle": "Cancelar Edições",
    "cancelMessage": "Cancelar as edições ao registo atual?"
  }
});