const options = {
  dateStyle: 'short',
  timeStyle: 'medium',
  hour12: true,
};

module.exports = (date) => {
  const time = new Intl.DateTimeFormat('pt-BR', options).format(date);
  return time.replace(/\//g, '-');
};