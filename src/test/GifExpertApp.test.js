import React from 'react';

import { shallow } from 'enzyme';
import { GifExpertApp } from "../GifExpertApp"

describe('Pruebas en <GifExpertApp />', () => {
    
    test('Debe mostrarse correctamente', () => {
        
        const wrapper = shallow(<GifExpertApp />)
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar una lista de categorias', () => {
        
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp dafeaultCategories= { categories }/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })   
})
