
type changeFollowed = {
    type: 'CHANGE_FOLLOWED',
    userId: string
}

const CHANGE_FOLLOWED = 'CHANGE_FOLLOWED';

export const changeFollowedCreator = (userId: string): changeFollowed => ({
    type: CHANGE_FOLLOWED,
    userId: userId
})

const initialState = {
    users: [
        {
            id: 1, photoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fru.hellomagazine.com%2Fthumb%2F640x465_5%2Fimages%2F2018%2Fjanuary%2Fmarina%2Fnagiev11012018-zahod.jpg&imgrefurl=https%3A%2F%2Fru.hellomagazine.com%2Fkino-i-televidenie%2Fserialy%2F37880-dmitriy-nagiev-o-novom-seriale-so-svoim-uchastiem-rabote-s-synom-kirillom-i-perezhitom-karantine.html&tbnid=RCJqUHMsA7Vf6M&vet=12ahUKEwihztOLuP_rAhVTgosKHY2eBzUQMygDegUIARDTAQ..i&docid=gvz_h56GVSK33M&w=640&h=465&q=%D0%BD%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2&ved=2ahUKEwihztOLuP_rAhVTgosKHY2eBzUQMygDegUIARDTAQ',
            followed: true, fullName: 'Mark', status: 'I am a boss', location: { city: 'Ufa', country: 'Russia' }
        },
        {
            id: 2, photoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fru.hellomagazine.com%2Fthumb%2F640x465_5%2Fimages%2F2018%2Fjanuary%2Fmarina%2Fnagiev11012018-zahod.jpg&imgrefurl=https%3A%2F%2Fru.hellomagazine.com%2Fkino-i-televidenie%2Fserialy%2F37880-dmitriy-nagiev-o-novom-seriale-so-svoim-uchastiem-rabote-s-synom-kirillom-i-perezhitom-karantine.html&tbnid=RCJqUHMsA7Vf6M&vet=12ahUKEwihztOLuP_rAhVTgosKHY2eBzUQMygDegUIARDTAQ..i&docid=gvz_h56GVSK33M&w=640&h=465&q=%D0%BD%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2&ved=2ahUKEwihztOLuP_rAhVTgosKHY2eBzUQMygDegUIARDTAQ',
            followed: true, fullName: 'John', status: 'I am a noob', location: { city: 'Orenburg', country: 'Russia' }
        },
        {
            id: 3, photoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fru.hellomagazine.com%2Fthumb%2F640x465_5%2Fimages%2F2018%2Fjanuary%2Fmarina%2Fnagiev11012018-zahod.jpg&imgrefurl=https%3A%2F%2Fru.hellomagazine.com%2Fkino-i-televidenie%2Fserialy%2F37880-dmitriy-nagiev-o-novom-seriale-so-svoim-uchastiem-rabote-s-synom-kirillom-i-perezhitom-karantine.html&tbnid=RCJqUHMsA7Vf6M&vet=12ahUKEwihztOLuP_rAhVTgosKHY2eBzUQMygDegUIARDTAQ..i&docid=gvz_h56GVSK33M&w=640&h=465&q=%D0%BD%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2&ved=2ahUKEwihztOLuP_rAhVTgosKHY2eBzUQMygDegUIARDTAQ',
            followed: true, fullName: 'Keira', status: 'I am a girl', location: { city: 'Moscow', country: 'Russia' }
        }
    ]
}

const usersReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case CHANGE_FOLLOWED:
            let copyState = {
                ...state, users: state.users.map((user: any) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: !user.followed };
                    }
                    return user;
                })
            };
            console.log(copyState);
            return copyState;
        default: return state;
    }
}

export default usersReducer;