import React from 'react';
import { waitForElementToBeRemoved, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../src/App';

describe('App', () => {
  it('application', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('application 2', async () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
    // asdf();

    const addButton = screen.getByTestId('item-add');
    userEvent.click(addButton);
    // ***********
    // console.log(addButton);
    const fr = asFragment();
    // console.log(Object.keys(fr));
    // console.log(screen.getByTestId('input-body'));
    // ***************
    expect(fr).toMatchSnapshot();

    const addingSubmitButton = screen.getByText('submit');
    const addingFormInput = screen.getByTestId('input-body');
    userEvent.type(addingFormInput, 'first task!');
    userEvent.click(addingSubmitButton);
    await waitForElementToBeRemoved(addingSubmitButton);
    expect(asFragment()).toMatchSnapshot();

    const renameLink = screen.getByTestId('item-rename');
    userEvent.click(renameLink);
    expect(asFragment()).toMatchSnapshot();

    const renamingFormInput = screen.getByTestId('input-body');
    const renamingSubmitButton = screen.getByText('submit');
    userEvent.type(renamingFormInput, 'changed name!');
    userEvent.click(renamingSubmitButton);
    await waitForElementToBeRemoved(renamingSubmitButton);
    expect(asFragment()).toMatchSnapshot();

    const removeLink = screen.getByTestId('item-remove');
    userEvent.click(removeLink);
    expect(asFragment()).toMatchSnapshot();

    const removingSubmitButton = screen.getByText('remove', { selector: 'input' });
    userEvent.click(removingSubmitButton);
    expect(asFragment()).toMatchSnapshot();
  });
});
