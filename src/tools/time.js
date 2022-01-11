export const convertToMS = (m = 0, s = 0) => {
  return (m * 60 + s) * 1000;
};

export const getDisplayTime = (ms) => {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);

  return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
};
