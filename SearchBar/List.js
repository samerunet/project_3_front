import { React, useState } from 'react'
import {Button} from 'reactstrap'
import data from "./ListData.json"
import axios from 'axios'

function List(props) {

    const handleNew = (item) => {
        axios
            .post("https://lit-caverns-62565.herokuapp.com/create", item)
            .then(() => {
                axios
                    .get("https://lit-caverns-62565.herokuapp.com/")
                    .then((response) => {
                    });
            });
    };
    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     handleCreate(selectedKeyboard)
    // }
    // let emptyKeyboard = {
    //     brand: '',
    //     switches: '', 
    //     keycaps: '', 
    //     stabilizers: '',
    //     price: '', 
    //     size: '', 
    //     img: ''
    // }
    // let [keyboard, setKeyboard] = useState(emptyKeyboard)

    // const handleChange = (event) => {
    //     setKeyboard({ ...keyboard, [event.target.name]: event.target.value })
    // }

////////////////////////////////////////////////////////////////////////

    const filteredData = data.filter((L) => {
        if (props.input === '') {
            return ;
        }
        else {
            return (
                L.Assigned.toString().toLowerCase().includes(props.input) ||
                L.Priority.toString().toLowerCase().includes(props.input) ||
                L.Description.toString().toLowerCase().includes(props.input)
            );
            // return L.input?.toLowerCase().includes(props.input)
        }
    })
    return (
        <div>
        <ul className="listWrapper">
            {filteredData.map((item) => (
                <><li className="justify-content-center nav nav-masthead" key={item.id}>
                    <br />
                    Assigned: {item.Assigned}
                    <br />
                    Priority: {item.Priority}
                    <br />
                    Description: {item.Description}
                    <br />
                </li><form onSubmit={() => {handleNew(item)}}>
                    <Button color="primary" input type='submit'>STASH</Button>
                    </form></>
                
                
                ))}
        </ul>
        </div>
    )
}


export default List;