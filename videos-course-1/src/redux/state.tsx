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

type stateRootType = {
    messages: Array<messageDataType>,
    dialogs: Array<dialogPersonType>,
    posts: Array<postType>
}

export let state: stateRootType = {
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
    ],
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 10 },
        { id: 2, message: 'First', likesCount: 12 }
    ]
}