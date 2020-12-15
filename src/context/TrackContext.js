import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

const trackReducer = (state, action) => {
    switch(action.type){
        default:
            return state;
    }
}

const fetchTracks = dispatch => () => {

}

const createTrack = dispatch => async (name, locations) => {
    console.log('antes');
    await trackerApi.post('/tracks', {name,locations});
    console.log('depois');
}

export const { Context, Provider } = createDataContext (
    trackReducer,
    {fetchTracks, createTrack },
    { newTrack: null , tracks: [] }
);