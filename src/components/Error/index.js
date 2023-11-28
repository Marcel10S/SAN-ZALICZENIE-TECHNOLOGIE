import React from "react";
import gif from "../../assets/gif/error.gif";

export default function Error() {
  return (
    <>
      <div style={{paddingBottom: "10px", textAlign: "center",}}>No niestety wystąpił błąd, na pewno kiedyś go
        naprawimy!
      </div>
      <img src={gif}/>
    </>
  );
}