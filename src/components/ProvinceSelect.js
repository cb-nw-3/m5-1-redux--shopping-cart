import React, { useState } from "react";
import styled from "styled-components";

export default function ProvinceSelect() {
  const [selectStatus, setSelectStatus] = useState(true);
  return (
    <Wrapper>
      <label htmlFor="cars">Choose a province: </label>
      <select
        disabled={selectStatus}
        name="province"
        id="provice"
        onChange={(e) => {
          e.preventDefault();
          setSelectStatus(true);
        }}
      >
        <option value="5">Albera</option>
        <option value="12">British Columbia</option>
        <option value="12">Manitoba</option>
        <option value="15">New-Bruinswick</option>
        <option value="15">Newfoundland/Labrador</option>
        <option value="5">Northwest Territories</option>
        <option value="15">Nova Scotia</option>
        <option value="5">Nunavut</option>
        <option value="13">Ontario</option>
        <option value="15">PEI</option>
        <option value="14.975" selected="selected">
          Quebec
        </option>
        <option value="11">Saskatchewan</option>
        <option value="5">Yukon</option>
      </select>
      <button
        onClick={(e) => {
          e.preventDefault();
          setSelectStatus(false);
          
        }}
      >
        X
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  padding: 10px 0;
  max-width: 95%;
`;
