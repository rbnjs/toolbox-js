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
      toolbox = toolbox.set(toolName, tools[toolName]);
    }
  }
}

function registerToolBox(name, tools){
  if (typeof name !== 'string'){
    throw invalidParameterException('string',name);
  }
  if (typeof tools !== 'object'){
    throw invalidParameterException('object', tools);
  }
  toolbox = toolbox.set(name, tools);
}

/**
 * Export the toolbox as an object.
 */
function toObjectToolBox(){
  return toolbox.toJS();
}

/**
 * @return {String} Returns an error message when the user uses a bad parameter.
 */
function invalidParameterException(paramName, badValue){
  return  "The value " + badValue.toString() + " is not a valid " + paramName;
}

// Exports
module.exports = {
  tools: toObjectToolBox,
  registerToolBox: registerToolBox,
  registerTools: registerTools
};
