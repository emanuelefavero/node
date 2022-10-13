const { DateTime, Duration, Interval } = require('luxon')

const now = DateTime.now() // Current date and time, no arguments
const today = DateTime.local() // Current date, takes arguments (year, month, day, hour, minute, second, millisecond)
const tomorrow = DateTime.local().plus({ days: 1 }) // Tomorrow's date, no time

// Create from JS Date
const fromJSDate = DateTime.fromJSDate(new Date())

// Create from an object
const fromObject = DateTime.fromObject(
  { day: 22, hour: 12 },
  { zone: 'America/Los_Angeles', numberingSystem: 'beng' }
)

// Parse from ISO 8601 - the format used by JSON.stringify(new Date())
const fromISO = DateTime.fromISO('2022-10-13T23:41:58.533+02:00')

// DATE TIME INSTANCE
const toString = DateTime.now().toString() // 2022-10-13T23:41:58.533+02:00

// Get the year, month, day, hour, minute, second, millisecond
const year = DateTime.now().year
const month = DateTime.now().month
const day = DateTime.now().day
const hour = DateTime.now().hour
const minute = DateTime.now().minute
const second = DateTime.now().second
const millisecond = DateTime.now().millisecond

const zoneName = DateTime.now().zoneName // Europe/Rome
const offset = DateTime.now().offset // 120
const daysInMonth = DateTime.now().daysInMonth // 31 (how many days this month)

// FORMAT YOUR DATE TIME
const toFormat = DateTime.now().toFormat('yyyy-MM-dd') // 2022-10-13
const toLocaleString = DateTime.now().toLocaleString() // 10/13/2022, 11:41:58 PM

// TRANSFORM YOUR DATE TIME
// Math
const plus = DateTime.now().plus({ days: 1 }) // Tomorrow
const minus = DateTime.now().minus({ days: 1 }) // Yesterday
const startOf = DateTime.now().startOf('month') // First day of the month
const endOf = DateTime.now().endOf('month') // Last day of the month

// Set
const set = DateTime.now().set({ day: 1 }) // Set the day to 1

// TIME ZONES
const toUTC = DateTime.now().toUTC() // Convert to UTC
const toLocal = DateTime.now().toLocal() // Convert to local time
const zoneAmerica = DateTime.fromObject({}, { zone: 'America/Los_Angeles' }) // now, but expressed in LA's local time
const zoneAmerica2 = DateTime.now().setZone('America/Los_Angeles') // same

// DURATION
const duration = Duration.fromObject({ hours: 2, minutes: 7 }) //  "2 hours and 7 minutes".

// NOTE: the duration is not tied to a specific date or time

// duration.hours // 2
// duration.minutes // 7
// duration.seconds // 0
// duration.milliseconds // 0
// duration.toObject() // { hours: 2, minutes: 7, seconds: 0, milliseconds: 0 }
// duration.toISO() // "PT2H7M"
// duration.as('seconds)

// TIP: You can add or subtract durations from DateTime instances
const nowPlusDuration = DateTime.now().plus(duration)

// INTERVAL
const now2 = DateTime.now()
const later = DateTime.local(2024, 10, 12)
const i = Interval.fromDateTimes(now2, later)

i.length() // 31363094476
i.length('years') // 1.99
i.contains(DateTime.local(2023)) // true
i.contains(DateTime.local(2019)) // false

i.toISO() // 2022-10-14T00:04:09.162+02:00/2024-10-12T00:00:00.000+02:00
i.toString() // [2022-10-14T00:04:15.635+02:00 – 2024-10-12T00:00:00.000+02:00)
