import React, {useContext} from 'react'
import { StyleSheet} from 'react-native';
import {Button, Input} from 'react-native-elements';
import Spacer from './Spacer';
import {Context as LocationContext} from '../context/LocationContext';
import useSaveTrack from '../hook/useSaveTrack';

const TrackForm = () => {
    const {
        state: {name, recording, locations}, 
        startRecording, 
        stopRecording, 
        changeName
    } = useContext(LocationContext);

    const [saveTrack] = useSaveTrack();

    //console.log(locations.length);
    return (
        <>
            <Spacer>
                <Input 
                    label='Track Name' 
                    placeholder="Enter name"
                    onChangeText={changeName}
                    value={name}
                />
            </Spacer>
            <Spacer>
                {recording
                    ? <Button title="Stop Recording" onPress={stopRecording}/>
                    : <Button title="Start Recording" onPress={startRecording}/>
                }
            </Spacer>
            <Spacer>
                {
                    !recording && locations.length ? (
                        <Button title="Save track" onPress={saveTrack}/>)
                    : (<Button title="Save track"  disabled={true} />)
                }
            </Spacer>
        </>
    );
}

const styles = StyleSheet.create({});

export default TrackForm;