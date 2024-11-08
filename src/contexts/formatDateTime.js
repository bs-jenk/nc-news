const formatDate = (dateTime) => {
  const splitDateTime = dateTime.split('T');
  const splitDate = splitDateTime[0].split('-');
  const formattedDate = splitDate.reverse().join('/');
  return formattedDate;
};

const formatTime = (dateTime) => {
  const splitDateTime = dateTime.split('T');
  const time = splitDateTime[1].slice(0, 5);
  return time;
};

export { formatDate, formatTime };
