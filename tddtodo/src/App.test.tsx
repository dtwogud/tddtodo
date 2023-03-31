import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

describe('<App />', () => {
    it('1. has input and a button', () => {
        render(<App/>);
        const input = screen.getByPlaceholderText('입력하세요');
        const button = screen.getByText('등록하기');  //getByTestId가 오류확률 조금 더 적음
        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });

    it('2. changes input', () => {
        render(<App/>);
        const input = screen.getByPlaceholderText('입력하세요');
        fireEvent.change(input, {  //userEvent도 마찬가지
            target: {
                value: 'TDD-TODO',
            },
        });
        expect(input).toHaveAttribute('value', 'TDD-TODO');
    });

    it('3. register', () => {
        render(<App/>);
        const input = screen.getByPlaceholderText('입력하세요');
        fireEvent.change(input, {
            target: {
                value: 'TDD-TODO',
            },
        });
        expect(input).toHaveAttribute('value', 'TDD-TODO');
        const form = screen.getByTestId('testForm');
        fireEvent.submit(form);
        const list = screen.getByText('TDD-TODO')
        expect(list).toBeInTheDocument()
    });

    it('4. check', () => {
        render(<App/>);
        const input = screen.getByPlaceholderText('입력하세요');
        fireEvent.change(input, {
            target: {
                value: 'TDD-TODO',
            },
        });
        expect(input).toHaveAttribute('value', 'TDD-TODO');
        const form = screen.getByTestId('testForm');
        fireEvent.submit(form);
        const list = screen.getByText('TDD-TODO')
        expect(list).toBeInTheDocument()
        const checkbox = screen.getByTestId('testCheckbox')
        fireEvent.click(checkbox)
        expect(checkbox).toHaveClass('checked')
    })
});
