import * as Blockly from 'blockly';

// Define a custom block for a React Button component
Blockly.defineBlocksWithJsonArray([
  {
    "type": "react_button",
    "message0": "<Button> %1",
    "args0": [
      {
        "type": "field_input",
        "name": "BUTTON_TEXT",
        "text": "Click me"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Creates a React button component",
    "helpUrl": ""
  },
  {
    "type": "react_text",
    "message0": "<p> %1",
    "args0": [
      {
        "type": "field_input",
        "name": "TEXT_TEXT",
        "text": "lorem ipsum"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 200,
    "tooltip": "Creates a React button component",
    "helpUrl": ""
  },
  {
    "type": "react_div",
    "message0": "<div>",
    "args0": [],
    "message1": "%1",
    "args1": [
      {
        "type": "input_statement",
        "name": "DO"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 100,
    "tooltip": "Creates a React button component",
    "helpUrl": ""
  },
]);

export function reactBlocksGenerator(generator) {
  // Define the code generation logic for the custom block
  generator['react_button'] = function(block) {
    var buttonText = block.getFieldValue('BUTTON_TEXT');
    return `<button>${buttonText}</button>\n`;
  };

  generator['react_text'] = function(block) {
    var buttonText = block.getFieldValue('TEXT_TEXT');
    return `<button>${buttonText}</button>\n`;
  };

  generator['react_div'] = function(block) {
  };
}
