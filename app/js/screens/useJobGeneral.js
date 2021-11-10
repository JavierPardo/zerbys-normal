import { useState } from "react";

export const FIELDS = {
  description: "description",
  price: "price",
  date: "date",
  time: "time",
};

export const LABELS = {
  [FIELDS.description]: "Descripcion",
  [FIELDS.date]: "Fecha",
  [FIELDS.price]: "Precio",
  [FIELDS.time]: "Hora",
};

function buildInitial() {
  const currentDate = new Date();
  return {
    [FIELDS.description]: "",
    [FIELDS.date]: currentDate,
    [FIELDS.price]: "",
    [FIELDS.time]: {
      hours: currentDate.getHours(),
      minutes: currentDate.getMinutes(),
    },
  };
}

export function jobGeneral() {
  const [general, setGeneral] = useState({ ...buildInitial() });

  function fieldChangeHandler(fieldName, fieldValue) {
    setGeneral({ ...general, [fieldName]: fieldValue });
  }

  return {
    general,
    onFieldChanged: fieldChangeHandler,
  };
}

function useJobGeneral() {
  const jobGeneralProps = jobGeneral();
  return {
    ...jobGeneralProps,
  };
}

export default useJobGeneral;
