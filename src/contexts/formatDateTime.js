const formatDate = (dateTime) => {
  const splitDateTime = dateTime.split('T');
  const splitDate = splitDateTime[0].split('-');
  const formattedDate = splitDate.reverse().join('/');
  return formattedDate;
};

const formatTime = (dateTime) => {
  const splitDateTime = dateTime.split('T');
  const time = splitDateTime[1].slice(0, 5);
  // const time = splitDateTime[1].split('.');
  // const hoursMinutesSeconds = time[0].split(':');
  // const formattedTime = hoursMinutesSeconds[0] + hoursMinutesSeconds[1];
  return time;
};

export { formatDate, formatTime };
