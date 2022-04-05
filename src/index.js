import './style.css';
import './header.css';
import List from './list';

const users = [{
        id: 1,
        name: "John"
    },
    {
        id: 2,
        name: "Pete"
    },
    {
        id: 3,
        name: "Mary"
    },
    {
        id: 2,
        name: "Bob"
    },
    {
        id: 3,
        name: "Sam"
    },
];

document.getElementById("root").appendChild(List({ userList: users }));
