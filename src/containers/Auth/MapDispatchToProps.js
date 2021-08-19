export const mapDispatchToProps = (dispatch) => {
    return {
        updateUserData: (user) => { dispatch({ type: "UPDATE_USER_DATA", payload: user }) }
    }
}