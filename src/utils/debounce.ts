const debounce = (fn: () => void, interval: number) => {
  let timer: NodeJS.Timeout;

  return () => {
    clearTimeout(timer);

    timer = setTimeout(() => fn(), interval);
  };
};

export default debounce;
