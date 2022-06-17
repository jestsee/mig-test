import React, {  } from "react";

export default function Modal({show, close, children, closable = true}) {
  const onModalClick = (e) => {
    e.stopPropagation()
  }

  const closeAction = () => {
    if (closable) {
      close()
    }
  }

  return (
    <>
      {show && (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" onClick={closeAction} // TODO klo klik inside jg ilang
          >
            <div>
              {/*content*/}
              <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
              onClick={onModalClick}>
                {children}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}