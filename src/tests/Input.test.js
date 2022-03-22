import React from 'react';
import { shallow } from 'enzyme';
import { AddForm } from './AddForm'
import { toBeChecked } from '@testing-library/jest-dom/dist/matchers';

describe('<AddForm/>', ()=>{
    it('has an input field',()=>{
        let wrapper=shallow(<AddForm />)
        console.log('----------------')
        console.log(wrapper.debug())
        console.log('----------------')
        const input=wrapper.find('.inputField')
        expect(input.props().value).toBe(undefined)
    })
})