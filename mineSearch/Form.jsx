import React, { useState } from "react";

const Form = () => {
  const [ver, setVer] = useState(10); //세로
  const [hor, setHor] = useState(10); //가로
  const [mine, setMine] = useState(3);

  //row
  const onChangeVer = (e) => {
    setVer(e.currentTarget.value);
  };

  const onChangeHor = (e) => {
    setHor(e.currentTarget.value);
  };

  const onChangeMine = (e) => {
    setMine(e.currentTarget.value);
  };

  return (
    <>
      <input
        type="number"
        placeholder="세로길이"
        value={ver}
        onChange={onChangeVer}
      />
      <input
        type="number"
        placeholder="가로길이"
        value={hor}
        onChange={onChangeHor}
      />
      <input
        type="number"
        placeholder="지뢰수"
        value={mine}
        onChange={onChangeMine}
      />
    </>
  );
};

export default Form;
