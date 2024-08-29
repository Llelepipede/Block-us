import React, { useEffect, useRef, useState } from 'react';
import * as Blockly from 'blockly';
import 'blockly/blocks';
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import Workspace from "./../../components/Workspace";
import { blocklyReactParser } from '../../interpreter/blocklyReactParser/blocklyReactParser';
import { reactBlocksGenerator } from '../../interpreter/blocks/reactBlocks';

const Index = () => {
  const blocklyDiv = useRef(null);
  const workspaceRef = useRef(null);
  const [workspaceContent, setWorkspaceContent] = useState(Workspace);

  useEffect(() => {
    const workspaceBlock = Blockly.inject(blocklyDiv.current, {
      toolbox: `
        <xml>
          <block type="react_button"></block> <!-- Your custom block -->
          <block type="react_text"></block> <!-- Your custom block -->
          <block type="react_div"></block> <!-- Your custom block -->
        </xml>
      `,
    });
    workspaceRef.current = workspaceBlock;
    // setWorkspaceContent(<Button/>)
    // Initialize custom block generators

    return () => {
      if (workspaceRef.current) {
        workspaceRef.current.dispose();
      }
    };
  }, []);

  const generateCode = () => {
    const blocksContent = blocklyReactParser(Blockly.serialization.workspaces.save(workspaceRef.current));
    console.log(workspaceContent);
    console.log(blocksContent);

    const newChildren = React.cloneElement(workspaceContent.props.children,...blocksContent)
    console.log(newChildren);
    setWorkspaceContent(React.cloneElement(workspaceContent,newChildren.props));
    // setWorkspaceContent(newChildren);
    // blocksContent.forEach(composant => {
      
    //   // workspaceContent.props.children = [...workspaceContent.props.children,composant]
      
    // });
    console.log(workspaceContent);
    // this.forceUpdate()

  };

  return (
    <div>
    <Header />
      <div
        ref={blocklyDiv}
        style={{ height: '480px', width: '100%' }}
      >
      </div>
      <button onClick={generateCode}>Generate Code</button>
      {workspaceContent}
      <Footer />
    </div>
  );
};

export default Index;
