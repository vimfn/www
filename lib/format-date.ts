import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  format,
  isBefore,
  isToday,
} from "date-fns";

export function formatDate(date: string) {
  const currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  const targetDate = new Date(date);
  if (isToday(targetDate)) {
    const todayDate = format(currentDate, "MMMM d, yyyy");
    return `${todayDate} (Today)`;
  }

  const yearsDiff = differenceInYears(targetDate, currentDate);
  const monthsDiff = differenceInMonths(targetDate, currentDate);
  const daysDiff = differenceInDays(targetDate, currentDate);

  let formattedDate = "";

  if (isBefore(targetDate, currentDate)) {
    if (yearsDiff < 0) {
      formattedDate = `${yearsDiff * -1}y ago`;
    } else if (monthsDiff < 0) {
      formattedDate = `${monthsDiff * -1}mo ago`;
    } else if (daysDiff < 0) {
      formattedDate = `${daysDiff * -1}d ago`;
    }
  } else {
    if (yearsDiff > 0) {
      formattedDate = `${yearsDiff}y`;
    } else if (monthsDiff > 0) {
      formattedDate = `${monthsDiff}mo`;
    } else if (daysDiff > 0) {
      formattedDate = `${daysDiff}d`;
    }
    formattedDate += " remaining";
  }

  const fullDate = format(targetDate, "MMMM d, yyyy");

  return `${fullDate} (${formattedDate})`;
}
