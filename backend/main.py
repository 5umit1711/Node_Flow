from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Edge(BaseModel):
    id: str | None = None
    source: str
    target: str


class PipelinePayload(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Edge]


@app.get('/')
def read_root():
    return {'Ping': 'Pong'}


@app.post('/pipelines/parse')
def parse_pipeline(payload: PipelinePayload):
    num_nodes = len(payload.nodes or [])
    num_edges = len(payload.edges or [])

    adj = {n.get('id'): [] for n in payload.nodes}
    for e in payload.edges:
        if e.source in adj:
            adj[e.source].append(e.target)
        else:
            adj[e.source] = [e.target]

    visited = set()
    visiting = set()

    def has_cycle(node_id):
        if node_id in visiting:
            return True
        if node_id in visited:
            return False
        visiting.add(node_id)
        for nbr in adj.get(node_id, []):
            if has_cycle(nbr):
                return True
        visiting.remove(node_id)
        visited.add(node_id)
        return False

    is_dag = True
    for nid in list(adj.keys()):
        if has_cycle(nid):
            is_dag = False
            break

    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag}
