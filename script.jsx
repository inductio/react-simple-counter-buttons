var Button = React.createClass({

    LocalClickHandler: function () {
        this.props.PropClickHandler(this.props.increment);
    },

    render: function () {

        return (
            <button onClick={this.LocalClickHandler} className={'btn btn-primary'}>{this.props.name}</button>
        );

    }
});

var Result = React.createClass({
    render: function () {
        return (
            <div>
                <span className={'badge'}>
                    counter:  {this.props.Counter}
                </span>
            </div>
        );
    }
});

var Main = React.createClass({

    getInitialState: function () {
        return {counter: 0}
    },

    clickHandler: function (increment) {
        this.setState({counter: this.state.counter + increment});
    },

    countReset: function () {
        this.setState({counter: 0});
    },

    render: function () {
        return (

            <div className={'container bs-example'}>
                <Button PropClickHandler={this.countReset} name={'reset'}/>
                <Button PropClickHandler={this.clickHandler} increment={1} name={'+1'}/>
                <Button PropClickHandler={this.clickHandler} increment={5} name={'+5'}/>
                <Button PropClickHandler={this.clickHandler} increment={10} name={'+10'}/>
                <Button PropClickHandler={this.clickHandler} increment={100} name={'+100'}/>
                <Button PropClickHandler={this.clickHandler} increment={+2000} name={'+2000'}/>
                <Result Counter={this.state.counter}/>
            </div>

        );
    }
});

React.render(<Main/>, document.getElementById('main-wrp'));
