
const castPascalCaseToSnakeCase = (pascalCaseString) => {
return pascalCaseString.split(/(?=[A-Z])/).join('_').toLowerCase();
}
const castSnakeCaseToPascalCase = (snakeCaseString) => {
const words = snakeCaseString.split('_');
return words.map(word => word[0].toUpperCase() + word.substr(1)).join('');
}
const castPascalCaseToCamelCase = (camelCaseString) => {
return camelCaseString.charAt(0).toLowerCase()+camelCaseString.slice(1);
//return camelCaseString.split(/(?=[A-Z])/).join('').toLowerCase();
//return camelCaseString;
}
module.exports = {castPascalCaseToSnakeCase, castSnakeCaseToPascalCase,castPascalCaseToCamelCase};

