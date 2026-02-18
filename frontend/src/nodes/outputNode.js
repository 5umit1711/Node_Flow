// outputNode.js

import { useState } from 'react';
import NodeBase from './NodeBase';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setOutputType(e.target.value);

  const leftHandles = [{ id: `${id}-value` }];

  return (
    <NodeBase id={id} title={'Output'} leftHandles={leftHandles} style={{ width: 240, height: 100 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <label>
          Name:
          <input type="text" value={currName} onChange={handleNameChange} />
        </label>
        <label>
          Type:
          <select value={outputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </NodeBase>
  );
};

export default OutputNode;
