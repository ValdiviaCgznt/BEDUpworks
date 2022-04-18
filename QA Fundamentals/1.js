[4:22 PM] Morales Barrera, Miguel (Cognizant) (Guest)
const {castPascalCaseToSnakeCase, castSnakeCaseToPascalCase, castPascalCaseToCamelCase} = require("./StringOperations");
const testCastPascalCaseToSnakeCase = () => {
executeTest("EstoEsUnEjemplo", "esto_es_un_ejemplo", castPascalCaseToSnakeCase);
executeTest("otroEjemplo", "otro_ejemplo", castPascalCaseToSnakeCase);
executeTest("otroejemplo", "otroejemplo", castPascalCaseToSnakeCase);
}const testCastSnakeCaseToPascalCase = () => {
executeTest("esto_es_un_ejemplo", "EstoEsUnEjemplo", castSnakeCaseToPascalCase);
executeTest("otro_ejemplo", "OtroEjemplo", castSnakeCaseToPascalCase);
// Caso de prueba que falla
executeTest("otroejemplo", "Otroejemplo", castSnakeCaseToPascalCase);
}const testCastPascalCaseToCamelCase = () => {
executeTest("EstoEsUnEjemplo", "estoEsUnEjemplo", castPascalCaseToCamelCase);
executeTest("OtroEjemplo", "otroEjemplo", castPascalCaseToCamelCase);
executeTest("Otroejemplo", "otroEjemplo", castPascalCaseToCamelCase);
}const executeTest = (input, expectedOutput, functionToExecute) => {
const actualOutput = functionToExecute(input) if (actualOutput !== expectedOutput) {
console.log(`Test fail. Expected output: ${expectedOutput} actual output: ${actualOutput}`)
} else {
console.log("Test pass")
}
}
testCastPascalCaseToSnakeCase();
testCastSnakeCaseToPascalCase();
testCastPascalCaseToCamelCase();

[4:23 PM] Morales Barrera, Miguel (Cognizant) (Guest)
const castPascalCaseToSnakeCase = (pascalCaseString) => {
return pascalCaseString.split(/(?=[A-Z])/).join('_').toLowerCase();
}const castSnakeCaseToPascalCase = (snakeCaseString) => {
const words = snakeCaseString.split('_');
return words.map(word => word[0].toUpperCase() + word.substr(1)).join('');
}const castPascalCaseToCamelCase = (camelCaseString) => {
return camelCaseString.charAt(0).toLowerCase()+camelCaseString.slice(1);
//return camelCaseString.split(/(?=[A-Z])/).join('').toLowerCase();
//return camelCaseString;
}
module.exports = {castPascalCaseToSnakeCase, castSnakeCaseToPascalCase,castPascalCaseToCamelCase};

