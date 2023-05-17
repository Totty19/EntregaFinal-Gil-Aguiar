import { Item } from '../Item'

const ItemList = ({props }) => {
    return (
        <div>
            {props.map(props => <Item key={Item.id} Item={props}/>)}
        </div>  
    )
}

export { ItemList } 