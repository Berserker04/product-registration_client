export const formatTime = (dateString: string) => {
  const date = new Date(dateString);
  const hours = getHours(date);
  const minutes = getMinutes(date);
  const seconds = getSeconds(date);
  return `${hours}:${minutes}:${seconds}`;
};

export const formatTimeWithoutSeconds = (dateString: string) => {
  const date = new Date(dateString);
  const hours = getHours(date);
  const minutes = getMinutes(date);
  return `${hours}:${minutes}`;
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const year = date.getUTCFullYear().toString().padStart(4, "0");
  return `${day}/${month}/${year}`;
};

const getHours = (date: Date) => date.getHours().toString().padStart(2, "0");

const getMinutes = (date: Date) =>
  date.getMinutes().toString().padStart(2, "0");

const getSeconds = (date: Date) =>
  date.getSeconds().toString().padStart(2, "0");
