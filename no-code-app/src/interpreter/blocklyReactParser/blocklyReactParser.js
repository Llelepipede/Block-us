import { debug } from "./debug";
import Workspace from "../../components/Workspace";
import Button from "../../components/createdComponents/Button";
import Text from "../../components/createdComponents/Text";


// ici y'auras tout le coeur du parser/interpreter, chaque block aura sont output précisé ici meme
// atm y'a que button et text, mais c'est ici qu'il y auras div par exemple, image, ou autre
export function blocklyReactParser(workspaceJson)  {
  var content = [Workspace]
    if (workspaceJson && workspaceJson.blocks && workspaceJson.blocks.blocks){
        workspaceJson.blocks.blocks.forEach((block, index) => {
            debug(block,index)  
            if (block.type == "react_button"){
              console.log("button");
              // console.log(block.fields["BUTTON_TEXT"]);
              content = [...content,  <Button text={block.fields["BUTTON_TEXT"]} onClick={null} />];
            }
            if (block.type == "react_text"){
              console.log("text");
              content = [...content,  <Text text={block.fields["TEXT_TEXT"]} />];
            }
          });
    }
    return content;
}

