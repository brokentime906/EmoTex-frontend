import React from "react";
import { Paper, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
const DropInput = (props) => {
  const [className, setClassName] = useState("drop-zone-hide");
  const _onDragEnter = (e) => {
    setClassName({ className: "drop-zone-show" });
    e.stopPropagation();
    e.preventDefault();
    return false;
  };
  const _onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };
  const _onDragLeave = (e) => {
    setClassName({ className: "drop-zone-hide" });
    e.stopPropagation();
    e.preventDefault();
    return false;
  };
  const _onDrop = (e) => {
    e.preventDefault();
    let files = e.dataTransfer.files;
    console.log("Files dropped: ", files);
    // Upload files
    setClassName({ className: "drop-zone-hide" });
    return false;
  };
  useEffect(() => {
    window.addEventListener("mouseup", _onDragLeave);
    window.addEventListener("dragenter", _onDragEnter);
    window.addEventListener("dragover", _onDragOver);
    document
      .getElementById("dragbox")
      .addEventListener("dragleave", _onDragLeave);
    window.addEventListener("drop", _onDrop);
  }, []);
  return (
    <>
      <div>
        {props.children}
        <div id="dragbox" className={className}>
          Drop a file to Upload
        </div>
      </div>
    </>
  );
};
export default DropInput;
