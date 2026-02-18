// llmNode.js

import NodeBase from './NodeBase';

export const LLMNode = ({ id, data }) => {
  const leftHandles = [{ id: `${id}-system` }, { id: `${id}-prompt` }];
  const rightHandles = [{ id: `${id}-response` }];

  return (
    <NodeBase id={id} title={'LLM'} leftHandles={leftHandles} rightHandles={rightHandles} style={{ width: 280, height: 120 }}>
      <div>This is a LLM node. Pass system + prompt inputs.</div>
    </NodeBase>
  );
};

export default LLMNode;
