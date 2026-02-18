// textNode.js

import { useState, useEffect } from 'react';
import NodeBase from './NodeBase';

export const TextNode = ({ id, data, selected }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [width, setWidth] = useState(220);
  const [height, setHeight] = useState(80);

  useEffect(() => {
    const len = currText.length || 1;
    const lines = (currText.match(/\n/g) || []).length + 1;
    setWidth(Math.min(480, Math.max(160, len * 8)));
    setHeight(Math.min(400, Math.max(60, 24 + lines * 20)));
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // find variables like {{varName}}
  const varRegex = /{{\s*([a-zA-Z_$][\w$]*)\s*}}/g;
  const vars = [];
  let m;
  while ((m = varRegex.exec(currText))) {
    if (!vars.includes(m[1])) vars.push(m[1]);
  }

  const leftHandles = vars.map((v) => ({ id: `${id}-${v}`, label: v }));
  const rightHandles = [{ id: `${id}-out`, label: 'out' }];

  return (
    <NodeBase id={id} title={'Text'} leftHandles={leftHandles} rightHandles={rightHandles} style={{ width, height }}>
      <textarea
        value={currText}
        onChange={handleTextChange}
        style={{ width: '100%', height: '100%', resize: 'none', boxSizing: 'border-box' }}
      />
    </NodeBase>
  );
};

export default TextNode;
