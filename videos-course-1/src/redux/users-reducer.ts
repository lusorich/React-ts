import { Dispatch } from "redux"
import { usersAPI } from "../api/api"

type ChangeFollowedACType = {
    type: 'CHANGE_FOLLOWED',
    userId: string
}

type SetUsersACType = {
    type: 'SET_USERS',
    users: any
}

type SetCurrentPageACType = {
    type: 'SET_CURRENT_PAGE',
    currentPage: number
}

type SetUsersTotalCountACType = {
    type: 'SET_USERS_TOTAL_COUNT',
    totalCount: number
}

type ToggleIsFetchingACType = {
    type: 'SET_IS_FETCHING'
    isFetching: false,
}

type ToggleFollowingProgressACType = {
    type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
    isFollowing: boolean,
    userId: string
}


type ActionType =
    | ChangeFollowedACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetUsersTotalCountACType
    | ToggleIsFetchingACType
    | ToggleFollowingProgressACType;

type FollowingInProgressType = any;
type UserType = {
    followed: boolean,
    id: string,
    name: string,
    photos: {
        large: string | null,
        small: string | null,
        status: string | null,
        uniqueUrlName: string | null
    } | [],
    status: string | null,
    uniqueUrlName: string | null
}
export type UsersType = Array<UserType>;

type StateType = {
    followingInProgress: FollowingInProgressType,
    users: UsersType,
    currentPage: number,
    totalUsersCount: number,
    isFetching: boolean
}


const CHANGE_FOLLOWED = 'CHANGE_FOLLOWED';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'SET_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';


export const changeFollowed = (userId: string): ChangeFollowedACType => ({
    type: CHANGE_FOLLOWED,
    userId: userId
})

export const setUsers = (users: any): SetUsersACType => ({
    type: SET_USERS,
    users: users
})

export const setCurrentPage = (currentPage: number): SetCurrentPageACType => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
})

export const setUsersTotalCount = (totalCount: number): SetUsersTotalCountACType => ({
    type: SET_USERS_TOTAL_COUNT,
    totalCount: totalCount
})

export const toggleIsFetching = (fetching: any): ToggleIsFetchingACType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: fetching
})

export const toggleFollowingProgress = (isFollowing: boolean, userId: string): ToggleFollowingProgressACType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFollowing,
    userId
})

export const requestUsers = (page: any, pageSize: any) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(page, pageSize).then(data => {
        let users = data.items
        dispatch(setUsers(users));
        dispatch(setUsersTotalCount(data.totalCount));
        dispatch(toggleIsFetching(false));
    });
}

export const onPageChanged = (page: any, pageSize: any) => (dispatch: Dispatch) => {
    dispatch(setCurrentPage(page));
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(page, pageSize).then(data => {
        let users = data.items
        dispatch(setUsers(users));
        dispatch(toggleIsFetching(false));
    });
}

export const userFollow = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.followApi(userId)
        .then(response => {
            dispatch(toggleFollowingProgress(true, userId));
            if (response.resultCode === 0) {
                dispatch(changeFollowed(userId))
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
}

export const userUnfollow = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.unfollowApi(userId)
        .then(response => {
            dispatch(toggleFollowingProgress(true, userId));
            if (response.resultCode === 0) {
                dispatch(changeFollowed(userId))
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
}

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state: StateType = initialState, action: ActionType): StateType => {
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
            return { ...state, users: action.users };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };
        case SET_USERS_TOTAL_COUNT:
            return { ...state, totalUsersCount: action.totalCount }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFollowing
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((i: any) => i !== action.userId)
            }
        }
        default: return state;
    }
}

export default usersReducer;