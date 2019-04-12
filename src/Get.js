import React, { Component } from 'react';
import axios from 'axios';

export default class Get extends Component {

    constructor(props) {
        super(props);
        this.state = { serverports: [] };
        this.delete = this.delete.bind(this);
    }

    delete(_id) {
        axios.delete(`http://localhost:1000/api/delete/${_id}`)
            .then(alert('Deleted'))
            .catch(err => console.log(err))
        window.location.reload();
    }

    componentDidMount() {
        axios.get('http://localhost:1000/api')
            .then(response => {
                //below code is an example of transformation, we can use it for pagination
                //not implemented fully,restricting no of data displayed to user as 4
                const posts = response.data
                const updposts = posts.map(
                    post => {
                        return {
                            ...post,
                            author: 'kathir'
                        }
                    }
                )
                //  this.setState({ serverports: response.data }); //gets all the data
                this.setState({ serverports: updposts });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    // // tabRow(){
    // //     return this.state.serverports.map(function(object, i){
    // //         return <TableRow obj={object} key={i} />;
    // //     });
    // }


    render() {
        return (
            <table border='1'>
                <thead>
                    <tr>
                        <td>Product Name</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.serverports.map(object =>

                        <tr key={object._id}>
                            <td>{object.productname}</td>
                            <td>{object.price}</td>
                            <td> <button className="btn btn-danger" onClick={() => this.delete(object._id)} > x</button></td>
                        </tr>

                    )}
                </tbody>
            </table>
        );
    }
}