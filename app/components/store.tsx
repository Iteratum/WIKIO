import { atom } from "recoil";

export const responseState = atom({
    key: 'responseState',
    default: []
})

export const inputState = atom({
    key: 'inputState',
    default: false
})

export const editorContentState = atom({
    key: 'editorContentState',
    default: ''
})