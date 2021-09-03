import inarow from "./inarow.png"
import snakegame from "./snakegame.png"
import supermarket from "./supermarket.png"
import chess from "./chess.png"




interface projects {
    name: string,
    image: string,
    description: string,
    link: string
}

const ProjectsData: projects[] = [
    {
        name: "in a row",
        image: inarow,
        description: "A modern adaptation of the childhood classic 'Connect 4' made as a part of my first-year group project with my tutor group. I was in charge of the front-end and it was created on ReactJS.",
        link: "https://github.com/v8runn/in-a-row"
    },
    {
        name: "the snake game",
        image: snakegame,
        description: "A fun classic recreated using the Python Tkinter module.",
        link: "https://github.com/v8runn/snake-game"
    },
    {
        name: "supermarket billing system",
        image: supermarket,
        description: "A supermarket billing system created on Turbo C++ using the OOP methods.",
        link: "https://github.com/v8runn/SupermarketBillingSystem"
    },
    {
        name: "chess",
        image: chess,
        description: "The game of chess created on Java.",
        link: "https://github.com/v8runn/java-chess-game"
    }

]

export default ProjectsData;