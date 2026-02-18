import NodeBase from './NodeBase';
import { useState } from 'react';

export const TransformNode = ({ id, data }) => {
  const [expr, setExpr] = useState(data?.expr || 'x => x');

  return (
    <NodeBase id={id} title={'Transform'} leftHandles={[{ id: `${id}-in` }]} rightHandles={[{ id: `${id}-out` }]} style={{ width: 260, height: 100 }}>
      <div>
        <label>
          Fn:
          <input value={expr} onChange={(e) => setExpr(e.target.value)} />
        </label>
      </div>
    </NodeBase>
  );
};

export default TransformNode;
