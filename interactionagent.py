from langgraph.graph import StateGraph

def build_graph():

    graph = StateGraph()

    graph.add_node("extract")
    graph.add_node("classify")
    graph.add_node("followup")

    graph.set_entry_point("extract")

    graph.add_edge("extract","classify")
    graph.add_edge("classify","followup")

    return graph.compile()