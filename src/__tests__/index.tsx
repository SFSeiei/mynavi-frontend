import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Page } from 'components';

let container: HTMLDivElement | null = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  if (container) {
    unmountComponentAtNode(container);
    container.remove();
  }
});

it('Toggle Component', () => {
  act(() => {
    render(<Page title="Jest" />, container);
  });
});
expect(document.title).toBe('Jest');
