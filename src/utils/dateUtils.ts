import dayjs from 'dayjs';

import isToday from 'dayjs/plugin/isToday';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(isToday);
dayjs.extend(relativeTime);
dayjs.extend(duration);

export const formatDateTime = (date: string | undefined) => {
	if (!date) return;
	return dayjs(date).format('DD/MM/YYYY HH:mm A');
};

export const formatDate = (date: string | undefined) => {
	if (!date) return;
	return dayjs(date).format('DD-MM-YYYY');
};
