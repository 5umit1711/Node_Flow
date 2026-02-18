import NodeBase from './NodeBase';
import { useState } from 'react';

export const PromptNode = ({ id, data }) => {
  const [prompt, setPrompt] = useState(data?.prompt || 'Enter prompt');

  return (
    <NodeBase id={id} title={'Prompt'} leftHandles={[{ id: `${id}-in` }]} rightHandles={[{ id: `${id}-out` }]} style={{ width: 300, height: 120 }}>
      <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} style={{ width: '100%', height: '100%' }} />
    </NodeBase>
  );
};

export default PromptNode;
