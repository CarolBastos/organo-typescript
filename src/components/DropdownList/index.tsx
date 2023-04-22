import "./DropdownList.css";

interface DropdownListProps {
  onChanged: (value: string) => void;
  label: string;
  value: string;
  required: boolean;
  itens: string[];
}

const DropdownList = (props: DropdownListProps) => {
  return (
    <div className="dropdown-list">
      <label>{props.label}</label>
      <select
        onChange={(event) => props.onChanged(event.target.value)}
        value={props.value}
        required={props.required}
      >
        <option value=""></option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default DropdownList;
