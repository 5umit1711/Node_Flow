import NodeBase from './NodeBase';

export const SentimentNode = ({ id }) => {
  return (
    <NodeBase id={id} title={'Sentiment'} leftHandles={[{ id: `${id}-in` }]} rightHandles={[{ id: `${id}-out` }]} style={{ width: 220, height: 90 }}>
      <div>Simple sentiment classifier node (demo)</div>
    </NodeBase>
  );
};

export default SentimentNode;
