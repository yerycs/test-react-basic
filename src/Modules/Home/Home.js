import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import MaterialTable from "material-table";
import { creators as DataActions} from "Redux/Reducers/Data";
import axios from 'axios';
import {baseURL} from "Api/BaseUrl";

const displayName = 'Home';

const initialState = [{
    title: 'initial title',
    description: 'initial description'
}]

function Home(props) {
    const {data} = props;
    const [state, setStateValue] = useState(initialState);
    const [save, setSave] = useState(false);

    useEffect(() => {
        props.readData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(() => {
        if (save) {}
    }, [save]);

    useEffect(() => {
        if (data) {
            setStateValue(data);
        }
    }, [data]);

    return (
        <div>
            <MaterialTable
                title='List'
                columns={[
                    { title: 'Title', field: 'Title' },
                    { title: 'Description', field: 'description' }
                ]}
                data={state}
                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                resolve();
                                let data = [...state.myOwnGoalsMeasures];
                                data.push(newData);
                                setSave(false);
                                setStateValue(state);
                            }, 1000)
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                resolve();
                                let data = [...state];
                                data[data.indexOf(oldData)] = newData;
                                setSave(false);
                                setStateValue(state);
                            }, 1000)
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                resolve();
                                if (oldData.id) {
                                    axios.delete(baseURL + 'item/' + oldData.id + '/')
                                        .then((response) => {
                                            console.log('Deleted Successfully');
                                        } )
                                        .catch(err => console.log(err))
                                }

                                let data = [...state];
                                const index = data.indexOf(oldData);
                                data.splice(index, 1);
                                setSave(false);
                                setStateValue(state);
                            }, 1000)
                        }),
                }}
                options={{
                    actionsColumnIndex: -1
                }}
            />
        </div>
    );
}

Home.displayName = displayName;

const mapStateToProps = state => {
    return {
        data: state.data.data,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        readData: () => dispatch(DataActions.dataReadRequest()),
        saveData: (saveData = {}) => dispatch(DataActions.dataSaveRequest(saveData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
