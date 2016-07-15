const Immutable = require('immutable');
var toolbox = Immutable.Map({});

/**
 * Register global tools function.
 * @param {Object} tools
 */
function registerTools(tools) {
  if (typeof tools !== 'object'){
    throw invalidParameterException('object', tools);
  }
  for (let toolName in tools){
    if (tools.hasOwnProperty(toolName)){
      addToolIfPossible(toolName, tools[toolName])
    }
  }
}

function registerToolBox(name, tools){
  if (typeof tool !== 'string'){
    throw invalidParameterException('string',name);
  }
  if (typeof tool !== 'object'){
    throw invalidParameterException('object', tools);
  }
  newToolBox = {};
  newToolBox[name] = tools;
  addToolIfPossible(newToolBox);
}

/**
 * Export the toolbox as an object.
 */
function toObjectToolBox(){
  return toolbox.toJS();
}

/**
 * Adds a tool to the toolbox if there's no tool with the name toolName
 * @param {String} toolName name of the new tool
 * @param {Function|Object} 
 */
function addToolIfPossible(toolName, tool){
  toolbox = toolbox.set(toolName, tool);
}

/**
 * @return {String} Returns an error message when the user uses a bad parameter.
 */
function invalidParameterException(paramName, badValue){
  return  "The value " + badValue.toString + " is not a valid " + paramName;
}

// Exports
module.exports = {
  toolbox: toObjectToolBox,
  registerToolBox: registerToolBox,
  registerTools: registerTools
};
