const List = (props) => {
    const { tech, food, yaho }=props;
    return (
        <li style={{listStyle: 'none'}}>
            {tech}
        </li>
    )
}
export default List