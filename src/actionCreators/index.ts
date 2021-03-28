import * as UsersActionsCreators from "../actionCreators/userActionCreators"
import * as TodosActionsCreators from "../actionCreators/todoActionCreators"
export default{
    ...UsersActionsCreators,
    ...TodosActionsCreators
}