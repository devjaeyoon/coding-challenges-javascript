const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(/\r?\n/);

const [N, L, F] = input.shift().split(' ');

function parseLoanPeriodToMinutes(loanPeriodStr) {
  const [daysStr, timeStr] = loanPeriodStr.split('/');
  const [hoursStr, minutesStr] = timeStr.split(':');

  const days = Number(daysStr);
  const hours = Number(hoursStr);
  const minutes = Number(minutesStr);

  return days * 1440 + hours * 60 + minutes;
}

const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];

function convertToTotalMinutes(dateStr, timeStr) {
  const [_, month, day] = dateStr.split('-').map(Number);
  const [hour, minute] = timeStr.split(':').map(Number);

  let totalDays = 0;
  for (let i = 1; i < month; i++) {
    totalDays += daysInMonth[i];
  }
  totalDays += day - 1;

  return totalDays * 1440 + hour * 60 + minute;
}

const allowedMinutes = parseLoanPeriodToMinutes(L);
const finePerMinute = Number(F);

const rentalRecords = {};
const fines = {};

for (const log of input) {
  const [dateStr, timeStr, partName, nickname] = log.split(' ');
  const rentalKey = `${nickname} ${partName}`;
  const currentTimeInMinutes = convertToTotalMinutes(dateStr, timeStr);

  if (rentalRecords[rentalKey] !== undefined) {
    const borrowTimeInMinutes = rentalRecords[rentalKey];
    const rentalDurationMinutes = currentTimeInMinutes - borrowTimeInMinutes;

    if (rentalDurationMinutes > allowedMinutes) {
      const lateMinutes = rentalDurationMinutes - allowedMinutes;
      const penalty = lateMinutes * finePerMinute;
      fines[nickname] = (fines[nickname] || 0) + penalty;
    }

    delete rentalRecords[rentalKey];
  } else {
    rentalRecords[rentalKey] = currentTimeInMinutes;
  }
}

const finedUsers = Object.keys(fines).sort();

if (finedUsers.length === 0) {
  console.log(-1);
} else {
  const output = finedUsers.map((user) => `${user} ${fines[user]}`);
  console.log(output.join('\n'));
}
