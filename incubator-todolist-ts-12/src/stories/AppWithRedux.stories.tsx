import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {ReduxStoreProviderDecorator} from './decorators/ReduxStoreProviderDecorator';
import AppWithRedux from '../AppWithRedux';

export default {
    title: 'Todolists/AppWithRedux stories',
    component: AppWithRedux,
    decorators: [ReduxStoreProviderDecorator]
};

export const AppWithReduxBaseExample = (props: any) => {
    return (
        <AppWithRedux />
    )
}

