// inputNode.js

import { useState } from 'react';
import NodeBase from './NodeBase';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setInputType(e.target.value);

  const rightHandles = [{ id: `${id}-value` }];

  return (
    <NodeBase id={id} title={'Input'} rightHandles={rightHandles} style={{ width: 240, height: 100 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <label>
          Name:
          <input type="text" value={currName} onChange={handleNameChange} />
        </label>
        <label>
          Type:
          <select value={inputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </NodeBase>
  );
};

export default InputNode;
