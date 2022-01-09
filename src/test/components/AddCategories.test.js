import React from 'react';
import '@testing-library/jest-dom'

import { shallow } from 'enzyme'
import { AddCategories } from '../../components/AddCategories'

describe('Pruebas en <<AddCategories />', () => {
    
    const setCategories= jest.fn();
    let wrapper =  shallow(<AddCategories setCategories={setCategories} />)

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper =  shallow(<AddCategories setCategories={setCategories} />)

    })

    test('Debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo'

        input.simulate('change', {target: {value} });

        expect( wrapper.find('p').text().trim() ).toBe(value);
        
    })
    
    test('No debe de postear la información con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} })
        
        expect( setCategories ).not.toHaveBeenCalled();
    })

    test('Debe de llamar setCategories y limpiar la caja de texto', () => {
        
        const value = 'Hola Mundo';

        // 1. Simular el inputChange
        wrapper.find('input').simulate('change', { target: {value} });

        // 2. Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        //3. setCategories se debe de haber llamaldo
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenLastCalledWith( expect.any(Function));

        // 4. el valor del input debe de estar ''
        expect( wrapper.find('input').prop('value')).toBe('');

    })
    
    
    
    
   
})
