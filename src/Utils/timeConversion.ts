export const convertTo12HourFormat = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  const ampm = hours >= 12 ? "PM" : "AM";
  const adjustedHours = hours % 12 || 12; // Convert "00" to "12" for 12 AM
  return `${adjustedHours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
};
