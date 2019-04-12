import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {

    constructor(props) {

        super(props);

        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
     

        this.state = {
            productname: '',
            price: ''
        }
    }
  
    onChangeProductName(e) {
        this.setState({
            productname: e.target.value
        });
    }
    onChangePrice(e) {
        this.setState({
            price: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const serverport = {
            productname: this.state.productname,
            price: this.state.price
        }
        axios.post('http://localhost:1000/api/add', serverport)

            .then(function (response) {
                console.log(response.data);
                alert(response.data);
            });
        this.setState({
            productname: '',
            price: ''
        });
    }

    render() {

        return (
            <div style={{ marginTop: 50 }}>
                <h3>Add New Product:</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Product Name:  </label>
                        <input type="text" className="form-control" value={this.state.productname} onChange={this.onChangeProductName} />
                    </div>
                    <div className="form-group">
                        <label>Add Product Price: </label>
                        <input type="text" className="form-control" value={this.state.price} onChange={this.onChangePrice} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Product" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}