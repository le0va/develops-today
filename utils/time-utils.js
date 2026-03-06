export function convertToSeconds(time) {
  const [minutes, seconds] = time.split(':').map(Number);
  return minutes * 60 + seconds;
}

export function sumDurations(times) {
  return times.map(convertToSeconds).reduce((total, value) => total + value, 0);
}
