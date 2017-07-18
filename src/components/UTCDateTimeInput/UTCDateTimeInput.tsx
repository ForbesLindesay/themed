import * as React from 'react';
import TextInput, {InputMode, InputType} from '../TextInput/TextInput';

export interface UTCDateTimeProps {
  mode?: InputMode;
  label?: string;
  name: string;
  value: string | null;
  hasError?: boolean;
  errorMessage?: string;
  prefix?: string;
  suffix?: string;
  onChange: (e: {name: string; value: string | null}) => void;
}

export const UTCDateTimeInput = (props: UTCDateTimeProps) => {
  return (
    <TextInput
      {...props}
      type={InputType.localDateTime}
      value={toLocalDateTime(props.value)}
      onChange={e => props.onChange({...e, value: toUtcDateTime(e.value)})}
    />
  );
};
export default UTCDateTimeInput;

export function toLocalDateTime(value: string | null): string | null {
  if (!value) {
    return null;
  }
  const match = /^(\d\d\d\d)\-(\d\d)\-(\d\d)T(\d\d)\:(\d\d)\:(\d\d)(?:\.\d\d\d)?Z$/.exec(
    value,
  );
  if (!match) {
    throw new Error(
      'DateTime value must be in UTC in ISO8601 format (e.g. "2017-07-17T13:09:09Z"), but got ' +
        JSON.stringify(value),
    );
  }
  const [, year, month, day, hours, minutes, seconds] = match;
  const dt = new Date(
    Date.UTC(
      parseInt(year, 10),
      parseInt(month, 10) - 1,
      parseInt(day, 10),
      parseInt(hours, 10),
      parseInt(minutes, 10),
      parseInt(seconds, 10),
    ),
  );
  const date =
    leftPad(dt.getFullYear(), 4) +
    '-' +
    leftPad(dt.getMonth() + 1, 2) +
    '-' +
    leftPad(dt.getDate(), 2);
  const time =
    leftPad(dt.getHours(), 2) +
    ':' +
    leftPad(dt.getMinutes(), 2) +
    ':' +
    leftPad(dt.getSeconds(), 2);
  return date + 'T' + time;
}

export function toUtcDateTime(value: string | null): string | null {
  if (!value) {
    return null;
  }
  const match = /^(\d\d\d\d)\-(\d\d)\-(\d\d)T(\d\d)\:(\d\d)(?:\:(\d\d)(?:\.\d\d\d)?)?$/.exec(
    value,
  );
  if (!match) {
    throw new Error(
      'DateTime value must be in local date time in ISO8601 format (e.g. "2017-07-17T13:09:09"), but got ' +
        JSON.stringify(value),
    );
  }
  const [, year, month, day, hours, minutes, seconds] = match;
  const dt = new Date(
    parseInt(year, 10),
    parseInt(month, 10) - 1,
    parseInt(day, 10),
    parseInt(hours, 10),
    parseInt(minutes, 10),
    parseInt(seconds || '00', 10),
  );
  const date =
    leftPad(dt.getUTCFullYear(), 4) +
    '-' +
    leftPad(dt.getUTCMonth() + 1, 2) +
    '-' +
    leftPad(dt.getUTCDate(), 2);
  const time =
    leftPad(dt.getUTCHours(), 2) +
    ':' +
    leftPad(dt.getUTCMinutes(), 2) +
    ':' +
    leftPad(dt.getUTCSeconds(), 2);
  return date + 'T' + time + '.000Z';
}

function leftPad(number: number, length: number) {
  let str = number + '';
  while (str.length < length) {
    str = '0' + str;
  }
  return str;
}
