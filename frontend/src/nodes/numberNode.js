import NodeBase from './NodeBase';
import { useState } from 'react';

export const NumberNode = ({ id, data }) => {
  const [label, setLabel] = useState(data?.label || 'Number');

  return (
    <NodeBase id={id} title={'Number'} rightHandles={[{ id: `${id}-out` }]} style={{ width: 200, height: 90 }}>
      <div>
        <label>
          Label:
          <input value={label} onChange={(e) => setLabel(e.target.value)} />
        </label>
      </div>
    </NodeBase>
  );
};

export default NumberNode;
