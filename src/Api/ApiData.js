import BaseApi from './BaseApi';

// Must be function instead of Object as Generators don't work with complex structure...I guess.
const ApiData = () => {
    const _api = BaseApi.api;

    const dataRead = () => {
        return _api.get('data/');
    };

    const dataCreate = ({saveData}) => {
        return _api.post('data/', saveData.data);
    };

    return {
        dataRead,
        dataCreate
    }
};

export default ApiData();