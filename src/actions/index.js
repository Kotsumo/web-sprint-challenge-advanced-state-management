import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const FETCH_SMURF_START = "FETCH_SMURFS_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_SMURFS_FAILURE";
export const fetchData = () => {
    return (dispatch) => {
        dispatch({type: FETCH_SMURF_START})
        axios
        .get()
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    };
};