module.exports = function warmup(temperature) {
  if (isNaN(temperature) || temperature === undefined || temperature === null || !temperature.toFixed) return undefined
  return temperature * 9 / 5 + 32
};
