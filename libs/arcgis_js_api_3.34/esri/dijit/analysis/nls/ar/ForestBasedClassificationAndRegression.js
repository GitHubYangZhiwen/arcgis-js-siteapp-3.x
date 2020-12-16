// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/ar/ForestBasedClassificationAndRegression",{modifiedTitle:"\u0627\u0644\u062a\u0635\u0646\u064a\u0641 \u0627\u0644\u0642\u0627\u0626\u0645 \u0639\u0644\u0649 \u0627\u0644\u063a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u0627\u0646\u062d\u062f\u0627\u0631 - ${goal}",train:"\u0642\u0637\u0627\u0631",trainAndPredict:"\u0627\u0644\u062a\u062f\u0631\u064a\u0628 \u0648\u0627\u0644\u062a\u0646\u0628\u0624",selectGoal:"\u0645\u0627 \u062a\u0648\u062f \u0641\u0639\u0644\u0647\u061f",
trainGoal:"\u062a\u062f\u0631\u064a\u0628 \u0646\u0645\u0648\u0630\u062c \u0644\u062a\u0642\u064a\u064a\u0645 \u0623\u062f\u0627\u0621 \u0627\u0644\u0646\u0645\u0648\u0630\u062c",trainAndPredictGoal:"\u062a\u062f\u0631\u064a\u0628 \u0646\u0645\u0648\u0630\u062c \u0648\u0627\u0644\u062a\u0646\u0628\u0624 \u0628\u0627\u0644\u0642\u064a\u0645",inFeaturesLabel:"\u0627\u062e\u062a\u064a\u0627\u0631 \u0637\u0628\u0642\u0629 \u0627\u0644\u062a\u062f\u0631\u064a\u0628",variablePredictLabel:"\u0627\u062e\u062a\u064a\u0627\u0631 \u062d\u0642\u0644 \u0644\u0644\u062a\u0646\u0628\u0624 \u0628\u0647",
categorical:"\u0641\u0626\u0648\u064a",chooseExplanatoryField:"\u0627\u062e\u062a\u064a\u0627\u0631 \u062d\u0642\u0644 \u062a\u0648\u0636\u064a\u062d\u064a \u0648\u0627\u062d\u062f \u0623\u0648 \u0623\u0643\u062b\u0631",chooseFeaturesToPredict:"\u0627\u062e\u062a\u064a\u0627\u0631 \u0637\u0628\u0642\u0629 \u0644\u0644\u062a\u0646\u0628\u0624 \u0628\u0627\u0644\u0642\u064a\u0645 \u0645\u0646 \u0623\u062c\u0644",chooseExplainMatch:"\u0627\u062e\u062a\u064a\u0627\u0631 \u0643\u064a\u0641\u064a\u0629 \u062a\u0637\u0627\u0628\u0642 \u0627\u0644\u062d\u0642\u0648\u0644 \u0627\u0644\u062a\u0648\u0636\u064a\u062d\u064a\u0629",
options:"\u062e\u064a\u0627\u0631\u0627\u062a",advancedForestOptions:"\u062e\u064a\u0627\u0631\u0627\u062a \u0627\u0644\u063a\u0627\u0628\u0627\u062a \u0627\u0644\u0645\u062a\u0642\u062f\u0645\u0629",numberOfTrees:"\u0639\u062f\u062f \u0627\u0644\u0623\u0634\u062c\u0627\u0631",minimumLeafSize:"\u0627\u0644\u062d\u062f \u0627\u0644\u0623\u062f\u0646\u0649 \u0644\u062d\u062c\u0645 \u0648\u0631\u0642\u0629 \u0627\u0644\u0646\u0628\u0627\u062a",maximumTreeDepth:"\u0623\u0642\u0635\u0649 \u0639\u0645\u0642 \u0644\u0644\u0634\u062c\u0631\u0629",
sampleSize:"\u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u062a\u0648\u0641\u0631\u0629 \u0644\u0643\u0644 \u0634\u062c\u0631\u0629 (%)",randomVariables:"\u0639\u062f\u062f \u0627\u0644\u0645\u062a\u063a\u064a\u0631\u0627\u062a \u0627\u0644\u0645\u0623\u062e\u0648\u0630\u0629 \u0643\u0639\u064a\u0646\u0629 \u0639\u0634\u0648\u0627\u0626\u064a\u0627\u064b",variableConstraintMsg:"\u064a\u062c\u0628 \u0623\u0646 \u062a\u0643\u0648\u0646 \u0628\u064a\u0646 1 \u0648\u0639\u062f\u062f \u0627\u0644\u0645\u062a\u063a\u064a\u0631\u0627\u062a \u0627\u0644\u062a\u0648\u0636\u064a\u062d\u064a\u0629.",
validationOptions:"\u0627\u062e\u062a\u064a\u0627\u0631\u0627\u062a \u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u0635\u062d\u0629",percentageForValidation:"\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u062f\u0631\u064a\u0628 \u0627\u0644\u0645\u0633\u062a\u0628\u0639\u062f\u0629 \u0644\u0644\u062a\u062d\u0642\u0642 \u0645\u0646\u0647\u0627 (%)",outputLayerName:"FBCR ${inFeaturesName}",itemDescription:"\u0637\u0628\u0642\u0629 \u0627\u0644\u0645\u0639\u0644\u0645 \u0627\u0644\u0645\u0646\u0634\u0623\u0629 \u0645\u0646 \u062a\u0634\u063a\u064a\u0644 \u062d\u0644\u0648\u0644 \u0627\u0644\u062a\u0635\u0646\u064a\u0641 \u0627\u0644\u0642\u0627\u0626\u0645 \u0639\u0644\u0649 \u0627\u0644\u063a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u0627\u0646\u062d\u062f\u0627\u0631 ${goal}.",
itemTags:"\u0646\u062a\u064a\u062c\u0629 \u0627\u0644\u062a\u062d\u0644\u064a\u0644\u060c \u0627\u0644\u062a\u0635\u0646\u064a\u0641 \u0627\u0644\u0642\u0627\u0626\u0645 \u0639\u0644\u0649 \u0627\u0644\u063a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u0627\u0646\u062d\u062f\u0627\u0631\u060c ${inFeaturesName}\u060c ${goal}",itemSnippet:"\u0637\u0628\u0642\u0629 \u0627\u0644\u0645\u0639\u0644\u0645 \u0627\u0644\u0645\u0646\u0634\u0623\u0629 \u0645\u0646 \u0627\u0644\u062a\u0635\u0646\u064a\u0641 \u0627\u0644\u0642\u0627\u0626\u0645 \u0639\u0644\u0649 \u0627\u0644\u063a\u0627\u0628\u0627\u062a \u0648\u0627\u0644\u0627\u0646\u062d\u062f\u0627\u0631 ${goal}"});