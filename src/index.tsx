"use client";
import React from "react";
import { Popover, PopoverTrigger } from "./components/design/popover";

function ColorPicker() {
  return (
    <div>
      <button
        className="popover-trigger"
        style={{
          backgroundColor: "red",
          width: "24px",
          height: "24px",
          borderRadius: "100%",
        }}
        aria-haspopup="dialog"
      />
      <div>
        <div></div>
      </div>
    </div>
  );
}

export default ColorPicker;

/*  <PopoverContent
    //     className="p-2 w-[235px] translate-x-14 -translate-y-12"
    //     align="end"
    //   >
    //     <input type="hidden" {...props} />
    //     <div className="flex gap-1">
    //       <div
    //         ref={pickerRef}
    //         onMouseDown={(e) => {
    //           e.preventDefault();
    //           let mouse = {
    //             x: e.nativeEvent.offsetX,
    //             y: e.nativeEvent.offsetY,
    //           };
    //           const width = pickerRef.current.getBoundingClientRect().width;
    //           const height = pickerRef.current.getBoundingClientRect().height;

    //           const s = clamp((mouse.x / width) * 100, 0, 100);
    //           const v = clamp(((height - mouse.y) / height) * 100, 0, 100);
    //           // console.log(position);
    //           //  Do something with s and v here
    //           setPosition({
    //             s,
    //             v,
    //           });
    //         }}
    //         style={
    //           {
    //            "--color-bg": "blue",
    //           } as React.CSSProperties
    //         }
    //         className="w-[200px] h-[200px] color-picker rounded-lg"
    //       >
    //         <div
    //           style={{
    //             top: `calc(${
    //               100 - position.v
    //             } * (var(--picker-height, 200px)) / 100 )`,
    //             left: `calc(${position.s} * (var(--picker-width, 200px)) / 100)`,
    //           }}
    //           className="h-3 w-3 bg-white rounded-full absolute pointer-events-none"
    //         />
    //       </div>
    //       <div
    //         ref={sliderRef}
    //         onMouseDown={(e) => {
    //           e.preventDefault();
    //           let y = e.nativeEvent.offsetY;

    //           const height = pickerRef.current.getBoundingClientRect().height;

    //           const moveY = clamp(((height - y) / height) * 100, 0, 100);
    //           setMoveY(moveY);
    //         }}
    //         aria-label="hue picker"
    //         className="color-slider h-[200px] w-3 rounded-2xl"
    //       >
    //         <div
    //           style={{
    //             top: `calc(${
    //               100 - moveY
    //             } * (var(--picker-height, 200px)) / 100 )`,
    //           }}
    //           className="h-3 w-3 bg-white rounded-full pointer-events-none absolute"
    //         />
    //       </div>
         </div>
         <div className="mt-3">
          <input
            className="w-full uppercase text-center bg-slate-100"
             type="text"
            {...props}
          />
        </div>
        <button className="px-2 py-1 bg-slate-200 text-lg w-full mt-2 rounded-lg">
          HEX
         </button>
     </PopoverContent>
 */
