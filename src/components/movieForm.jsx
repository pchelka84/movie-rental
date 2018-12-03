import React from "react";
import Form from "./common/form";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      // Id of a specigic genre. Not the entire object!
      genreId: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    genres: [],
    errors: {}
  };

  render() {
    const { match, history } = this.props;

    return (
      <div>
        <h1>Movie Form {match.params.id}</h1>
        <button
          className="btn btn-primary"
          onClick={() => history.push("/movies")}
        >
          Save
        </button>
      </div>
    );
  }
}

export default MovieForm;
