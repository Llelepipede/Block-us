import React from 'react';
import { debug } from "./debug";
import Workspace from "../../components/Workspace";
import Button from "../../components/createdComponents/Button";
import Text from "../../components/createdComponents/Text";
import Initializer from './initializer';


// ici y'auras tout le coeur du parser/interpreter, chaque block aura sont output précisé ici meme
// atm y'a que button et text, mais c'est ici qu'il y auras div par exemple, image, ou autre
export function blocklyReactParser(workspaceJson,actualWorkspace)  {
  var content = [Workspace]
    if (workspaceJson && workspaceJson.blocks && workspaceJson.blocks.blocks){
        workspaceJson.blocks.blocks.forEach((block, index) => {
            let parent = Initializer();
            let children = Initializer();
            // debug(block,index)  
            console.log("parent",parent)
            if (block.type === "react_button"){
              console.log("button");
              // console.log(block.fields["BUTTON_TEXT"]);
              children = React.cloneElement(parent.props.children,null,<Button text={block.fields["BUTTON_TEXT"]} onClick={null} />)
              // content = [...content,  <Button text={block.fields["BUTTON_TEXT"]} onClick={null} />];
            }
            if (block.type === "react_text"){
              console.log("text");
              children = React.cloneElement(parent.props.children,null,<Text text={block.fields["TEXT_TEXT"]} />)
              // content = [...content,  <Text text={block.fields["TEXT_TEXT"]} />];
            }
            console.log("children",children);
            let final = React.cloneElement(parent,children.props)
            console.log("final",final)
            content = [...content,React.cloneElement(parent,children.props)];
          });
    }
    console.log("content end",content);
    console.log("prout",actualWorkspace)
    const newChildren = React.cloneElement(actualWorkspace.props.children,...content)
    console.log(newChildren);
    return React.cloneElement(actualWorkspace,newChildren.props);
}
