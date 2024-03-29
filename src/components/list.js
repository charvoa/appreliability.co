import React from "react"
import ListItem from "./listItem"

class List extends React.Component {
    render() {
        const listItems = [].concat(this.props.items).sort(function (a, b) { 
            return a.chronology - b.chronology 
        }).map((item, index, array) =>
            <ListItem
                name={item.name}
                chronology={item.chronology}
                category={item.category}
                level={item.level}
                comment={item.comment}
                key={index}
            />
        );

        return (
            <table className="table is-striped is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Chronology</th>
                        <th>Category</th>
                        <th>Level</th>
                        {/* <th>Principle</th> */}
                        <th>Comment / Details / Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {listItems}
                </tbody>
            </table>
        )
    }
}

export default List