const options = {
  dateStyle: 'short',
  timeStyle: 'medium',
  hour12: true,
};

module.exports = () => {
  const time = new Intl.DateTimeFormat('pt-BR', options).format(new Date());
  return time.replace(/\//g, '-');
};