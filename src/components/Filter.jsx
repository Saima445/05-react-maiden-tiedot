import React, { useState, useEffect } from "react";

const Filter = ({ value, onChange }) => {
  return (
    <section>
      <label>Find countries:</label>
      <input
        type="text"
        onChange={onChange}
        value={value}
        placeholder="Search by name"
      />
    </section>
  );
};

export default Filter;
