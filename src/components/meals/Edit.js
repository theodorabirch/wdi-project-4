import React from 'react';
import axios from 'axios';
import { authorizationHeader } from '../../lib/auth';


export default class MealEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/api/user/${this.props.match.params.id}`, authorizationHeader())
      .then(result => this.setState(result.data), () => {
        console.log(this.state);
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.put(`/api/meal/${this.state._id}`, this.state, authorizationHeader())
      .then(result =>
        this.props.history.push(`/meal/${result.data._id}`)
      );
  }

  handleChange({ target: {name, value }}) {
    this.setState({ [name]: value });
  }

  render() {
    return(
      <section>
        <div className="form-container">
          <form onSubmit={this.handleSubmit} id="signup">
            <div className="header">
              <h3>Edit Meal Information</h3>
            </div>

            <div className="sep"></div>

            <div className="inputs">
              <div className='mulipleInput'>
                <input className="input" type="date" name="date" placeholder="DD / MM / YYYY" onChange={this.handleChange} value={this.state.date || ''}/>
              </div>

              <input className="input" type="name" name="name" placeholder="Breakfast" onChange={this.handleChange} value={this.state.name || ''}/>

              <button id="submit" className="button is-primary">Edit</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
