import React from 'react';
import StyledModal from './styled/StyledModal'

import { ReactComponent as SpinnerIcon } from './ui/Spinner2.svg'

const Spinner = () => {
  return (
    <StyledModal>
      <SpinnerIcon />
    </StyledModal>
  );
};

export default Spinner;