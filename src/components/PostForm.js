import React from 'react';



export default class PostForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {title: ''};
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        console.log('this.state.title :>> ', this.state.title);
    }

    onChangeInputPostHandler =  (event) => {
        event.persist();
        this.setState(prev => ({...prev, ...{[event.target.name]: event.target.value}}))
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="inputPost">Please enter your post</label>
                    <input type="text"
                        className="form-control"
                        id="inputPost"
                        aria-describedby="textHelp"
                        name="title"
                        value={this.state.title}
                        onChange={this.onChangeInputPostHandler}
                    >
                    </input>
                    <small id="textHelp" className="form-text text-muted">
                        please respect others while your post would be visible for everyone</small>
                </div>
                <button className="btn btn-success" type="submit">create</button>
            </form>
        )
    }
}