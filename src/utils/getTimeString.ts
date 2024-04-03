type DateConfigKeyT = keyof typeof DATE_CONFIG;

const DATE_CONFIG: { [key: string]: Intl.DateTimeFormatOptions } = {
  dayMonthYearHourConfig: {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "short",
    year: "numeric",
  },
  dayMonthYearConfig: {
    day: "2-digit",
    month: "short",
    year: "numeric",
  },
  dayMonthConfig: {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "short",
  },
  hourConfig: {
    hour: "2-digit",
    minute: "2-digit",
  },
  monthYearConfig: {
    month: "short",
    year: "numeric",
  },
};

export default function getTimeString(
  date: string,
  config?: DateConfigKeyT
): string {
  if (!date) return "";

  const currentTime = Date.now();
  const _12h = 1000 * 60 * 60 * 12;
  const dateMs = new Date(date).getTime();

  const currentYear = new Date().getFullYear();
  const dateYear = new Date(date).getFullYear();

  const passedYear = dateYear < currentYear;
  const passed12h = currentTime - dateMs > _12h;

  const internalizeDate = (config: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat("en-us", config).format(new Date(date));

  return config
    ? internalizeDate(DATE_CONFIG[config])
    : passedYear
    ? internalizeDate(DATE_CONFIG.dayMonthYearHourConfig)
    : passed12h
    ? internalizeDate(DATE_CONFIG.dayMonthConfig)
    : internalizeDate(DATE_CONFIG.hourConfig);
}
