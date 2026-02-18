import NodeBase from './NodeBase';
import { useState } from 'react';

export const DateNode = ({ id, data }) => {
  const [label, setLabel] = useState(data?.label || 'Date');

  return (
    <NodeBase id={id} title={'Date'} rightHandles={[{ id: `${id}-out` }]} style={{ width: 200, height: 90 }}>
      <div>
        <label>
          Label:
          <input value={label} onChange={(e) => setLabel(e.target.value)} />
        </label>
      </div>
    </NodeBase>
  );
};

export default DateNode;
