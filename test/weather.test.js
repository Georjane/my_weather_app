import { kelvinToCelsius, kelvinToFarenheit } from '../src/components/converters';

it('celsius', () => {
  expect(kelvinToCelsius(300)).toBe(27 + '°C')
})

it('farenheit', () => {
  expect(kelvinToFarenheit(300)).toBe(80 + '°F')
})
