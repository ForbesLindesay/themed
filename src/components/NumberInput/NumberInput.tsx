import TextInput, {InputMode, InputType} from '../TextInput/TextInput';

export interface NumberInputProps {
  mode?: InputMode;
  label?: string;
  name: string;
  value: number | null;
  onChange: (e: {name: string; value: number | null}) => void;
}
export const NumberInput = (props: NumberInputProps) => {
  return TextInput({
    ...props,
    type: InputType.number,
    value:
      props.value != null && !Number.isNaN(props.value)
        ? props.value.toString(10)
        : '',
    onChange: e => {
      const value = e.value != null ? parseFloat(e.value) : null;
      props.onChange({
        ...e,
        value: value == null || Number.isNaN(value) ? null : value,
      });
    },
  });
};
export default NumberInput;
