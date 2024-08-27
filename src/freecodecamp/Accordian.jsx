import { Data } from "./Data";
import { useState } from "react";
import "./Accordian.css";
export const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const handleClick = (data) => {
    setSelected(data === selected ? null : data);
    console.log(selected);
  };
  const handlemultiselect = (multi) => {
    let copymulti = [...multiple];
    const Findindex = copymulti.findIndex(multi);
    if (Findindex === -1) copymulti.push(multi);
    else copymulti.splice(Findindex, 1);
    setMultiple(copymulti);
  };
  return (
    <>
      <div>Accordian</div>
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Multi select
      </button>
      <div className="wrapper">
        <div className="accordian">
          {Data && Data.length > 0
            ? // eslint-disable-next-line react/jsx-key
              Data.map((data) => (
                <div key={data.id} className="item">
                  <div className="title" onClick={ enableMultiSelection?() => handlemultiselect(data.id) : () => handleClick(data.id)}>
                    <h3>{data.question}</h3>
                    <span>+</span>
                  </div>
                  {enableMultiSelection ? (
                    multiple.indexOf(data.id) !== -1 && (
                      <div className="content">{data.answer}</div>
                    )
                  ) : selected === data.id ? (
                    <div className="content">{data.answer}</div>
                  ) : null}{" "}
                </div>
              ))
            : "no Data"}
        </div>
      </div>
    </>
  );
};
