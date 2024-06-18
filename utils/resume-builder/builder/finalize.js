export const updateDataValue = (id, newValue, setData, label) => {
  setData((previous) =>
    previous.map((data) => {
      if (data.id !== id) {
        return data;
      } else {
        return { ...data, [String(label)]: newValue };
      }
    })
  );
};
