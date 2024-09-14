import "./BoxDraw.css";

export const BoxDraw: React.FC = () => {

    const count = 15;
    const durationIterator = 0.4;
    const colors = [
        'turquoise',
        'blue',
        'green',
        'lightgreen',
        'aqua',
        'yellow',
        'lightyellow',
        'orange',
        'tomato',
        'orangered',
        'red',
        'darkred',
        'thistle',
        'violet',
        'mediumorchid',
        'darkorchid',
        'fuchsia',

    ];

    const divs = Array.from({ length: count }, (_, index) => (
        <div className="circleBox">
            <div
                key={index}
                className="circle"
                style={{
                    animationDelay: `${index * 0.2}s`,
                    backgroundColor: colors[index],
                    animationDuration: `${durationIterator * 1.5}s`,
                }}
            ></div>
        </div>
    ))

    return (
        <div className="circleContainer">{divs}</div>
    )
}