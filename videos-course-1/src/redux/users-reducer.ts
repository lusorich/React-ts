
type changeFollowed = {
    type: 'CHANGE_FOLLOWED',
    userId: string
}

type setUsers = {
    type: 'SET_USERS',
    users: any
}

type setCurrentPage = {
    type: 'SET_CURRENT_PAGE',
    currentPage: number
}

type setUsersTotalCount = {
    type: 'SET_USERS_TOTAL_COUNT',
    totalCount: number
}

type toggleIsFetching = {
    type: 'SET_IS_FETCHING'
    isFetching: false,
}

const CHANGE_FOLLOWED = 'CHANGE_FOLLOWED';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'SET_IS_FETCHING';


export const changeFollowed = (userId: string): changeFollowed => ({
    type: CHANGE_FOLLOWED,
    userId: userId
})

export const setUsers = (users: any): setUsers => ({
    type: SET_USERS,
    users: users
})

export const setCurrentPage = (currentPage: number): setCurrentPage => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
})

export const setUsersTotalCount = (totalCount: number): setUsersTotalCount => ({
    type: SET_USERS_TOTAL_COUNT,
    totalCount: totalCount
})

export const toggleIsFetching = (fetching: any): toggleIsFetching => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: fetching
})

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

const usersReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case CHANGE_FOLLOWED:
            return {
                ...state, users: state.users.map((user: any) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: !user.followed };
                    }
                    return user;
                })
            };
        case SET_USERS:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_USERS_TOTAL_COUNT: 
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default: return state;
    }
}

export default usersReducer;