import React, { useContext, useState } from "react";

export const ModalContext = React.createContext<any>("");

export function useModalContext() {
  const modalContext = useContext(ModalContext);
  if (!modalContext) {
    throw new Error("useModalContext must be used within a AuthProvider");
  }
  return modalContext;
}

export const ModalContextProvider: React.FC<{ children: any }> = ({
  children,
}) => {
  const [modalParameters, setModalParameters] = useState({
    cancelAction: () => { },
    confirmAction: () => { },
    value: "",
    type: "",
    isOpen: false,
    params: {},
  });

  type paramsType = {
    cancelAction?: () => void;
    confirmAction?: () => void;
    value?: string;
    type: string;
    isOpen: boolean;
    params: any;
  };


  const handleChangeModalParameters = (params: paramsType) => {
    setModalParameters((prevModalParameters) => ({
      ...prevModalParameters,
      ...params
    }));
  };

  return (
    <ModalContext.Provider
      value={{
        isAuth: false,
        handleChangeModalParameters: handleChangeModalParameters,
        modalParameters: modalParameters,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
