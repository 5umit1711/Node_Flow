// submit.js

import { useStore } from './store';

export const SubmitButton = () => {
    const nodes = useStore((s) => s.nodes);
    const edges = useStore((s) => s.edges);

    const handleSubmit = async () => {
        try {
            const res = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nodes, edges }),
            });

            const json = await res.json();
            alert(`Nodes: ${json.num_nodes}\nEdges: ${json.num_edges}\nIs DAG: ${json.is_dag}`);
        } catch (err) {
            alert('Error submitting pipeline: ' + err.message);
        }
    };

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 12}}>
            <button type="button" onClick={handleSubmit}>Submit Pipeline</button>
        </div>
    );
}

export default SubmitButton;
