
let rerenderEntireTree = (state: stateRootType) => {

}

export type dialogPersonType = {
    id: number,
    name: string
}

export type messageDataType = {
    id: number,
    message: string
}

export type postType = {
    id: number,
    message: string,
    likesCount: number
}

export type friendType = {
    id: number,
    name: string
}

export type stateRootType = {
    profilePage: {
        posts: Array<postType>,
        newPostText: string
    },
    messagePage: {
        messages: Array<messageDataType>,
        dialogs: Array<dialogPersonType>
    },
    sidebar: {
        friends: Array<friendType>
    }
}

export let state: stateRootType = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 10 },
            { id: 2, message: 'First', likesCount: 12 }
        ],
        newPostText: ''
    },
    messagePage: {
        messages: [
            { id: 1, message: 'Hello' },
            { id: 2, message: 'Hi' },
            { id: 3, message: 'Konichiwa' },
            { id: 4, message: 'Guten Tag' },
        ],
        dialogs: [
            { id: 1, name: 'Mark' },
            { id: 2, name: 'Tony' },
            { id: 3, name: 'Zuk' },
            { id: 4, name: 'Dick' }
        ]
    },
    sidebar: {
        friends: [
            { id: 1, name: "Tony" },
            { id: 2, name: "Molly" },
            { id: 3, name: "Sanny" }
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    updateNewPostText('');
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer: any) => {
    rerenderEntireTree = observer;
}