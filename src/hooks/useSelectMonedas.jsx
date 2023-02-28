import React from 'react'
import styled from '@emotion/styled';

const Label = styled.label`
    color: #fff;
`

const useSelectMonedas = (label) => {
  
    const SelecteMonedas = () => (
    <>
        <Label>{label}</Label>
    </>
  )

  return [SelecteMonedas];
}

export default useSelectMonedas