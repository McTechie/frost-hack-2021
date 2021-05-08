import Board from 'react-trello'

const data = {
    lanes: [
        {
            id: 'lane1',
            title: 'To Do',
            cards: []
        },
        {
            id: 'lane2',
            title: 'In Progress',
            cards: []
        },
        {
            id: 'lane3',
            title: 'Completed',
            cards: []
        }
    ]
}

const Workflow = () => {
    return (
        <div className="content">
            <h1>Workflow Planner</h1>
            <Board editable canAddLanes data={data} />
        </div>
    );
}

export default Workflow;