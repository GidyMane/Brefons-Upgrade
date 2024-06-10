"use client"
import React, { ReactNode } from 'react'
import { store } from './Store'
import { Provider } from 'react-redux'

const ReduxUiProvider = ({ children }: { children: ReactNode }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxUiProvider