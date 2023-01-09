import React from 'react';
import styled from 'styled-components';
import { Search, AtSign, ChevronDown, Pocket, Edit } from 'react-feather';

const icons = {
  search: Search,
  pocket: Pocket,
  edit: Edit,
  'at-sign': AtSign,
  'chevron-down': ChevronDown,
};

const Icon = ({ id, size, strokeWidth = 1, ...props }) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper
      style={{
        '--size': size + 'px',
        '--stroke-width': strokeWidth + 'px',
      }}
      {...props}
    >
      <Component color="currentColor" size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: var(--size);
  width: var(--size);
  & > svg {
    display: block;
    stroke-width: var(--stroke-width);
  }
`;

export default Icon;
