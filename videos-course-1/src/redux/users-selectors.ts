export const getUsers = (state: any) => state.usersPage.users;

export const getPageSize = (state: any) => state.usersPage.pageSize;

export const getTotalUsersCount = (state: any) => state.usersPage.totalUsersCount;

export const getCurrentPage = (state: any) => state.usersPage.currentPage;

export const getIsFetching = (state: any) => state.usersPage.isFetching;

export const getFollowingInProgress = (state: any) => state.usersPage.followingInProgress;