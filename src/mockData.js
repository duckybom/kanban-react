import { v4 as uuidv4 } from 'uuid'

const mockData = [
    {
        id: uuidv4(),
        title: ' Tab 1 ',
        tasks: [
            {
                id: uuidv4(),
                title: 'Testing 1'
            },
            {
                id: uuidv4(),
                title: 'Testing 2'
            },
        ]
    },
    {
        id: uuidv4(),
        title: ' Tab 2 ',
        tasks: [
            {
                id: uuidv4(),
                title: 'Testing 3'
            },
            {
                id: uuidv4(),
                title: 'Testing 4'
            },
        ]
    },
    {
        id: uuidv4(),
        title: ' Tab 3 ',
        tasks: [
            {
                id: uuidv4(),
                title: 'Test 6'
            }
        ]
    }
]

export default mockData