import React from 'react';
import { Handle, Position } from 'reactflow';

export const NodeBase = ({ id, title, children, leftHandles = [], rightHandles = [], style = {} }) => {
  return (
    <div className="vs-node" style={style}>
      {leftHandles.map((h, i) => (
        <Handle
          key={h.id || `${id}-left-${i}`}
          type="target"
          position={Position.Left}
          id={h.id || `${id}-left-${i}`}
          style={{ top: `${(i + 1) * (100 / (leftHandles.length + 1))}%` }}
        />
      ))}

      <div className="vs-node-header">{title}</div>
      <div className="vs-node-body">{children}</div>

      {rightHandles.map((h, i) => (
        <Handle
          key={h.id || `${id}-right-${i}`}
          type="source"
          position={Position.Right}
          id={h.id || `${id}-right-${i}`}
          style={{ top: `${(i + 1) * (100 / (rightHandles.length + 1))}%` }}
        />
      ))}
    </div>
  );
};

export default NodeBase;
