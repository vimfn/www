import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  format,
  isBefore,
  isToday,
} from "date-fns";

export function formatDate(date: string) {
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);
  if (isToday(targetDate)) {
    let todayDate = format(currentDate, "MMMM d, yyyy");
    return `${todayDate} (Today)`;
  }

  let yearsDiff = differenceInYears(targetDate, currentDate);
  let monthsDiff = differenceInMonths(targetDate, currentDate);
  let daysDiff = differenceInDays(targetDate, currentDate);

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

  let fullDate = format(targetDate, "MMMM d, yyyy");

  return `${fullDate} (${formattedDate})`;
}
