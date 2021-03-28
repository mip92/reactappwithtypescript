import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchUsers} from '../actionCreators/userActionCreators';
import { useActions } from '../hooks/useActions';
import {useTypeSelector} from '../hooks/useTypeSelector';

const UserList: React.FC = () => {
    const {fetchUsers}=useActions()
    const {error, loading, users} = useTypeSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        fetchUsers()
    }, [])
    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            {users.map(user =>
                <div>{user.name}</div>
            )}
        </div>
    );
};

export default UserList