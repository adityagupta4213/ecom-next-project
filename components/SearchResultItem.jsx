export default function SearchResultItem(props) {
  return (
    <div>
      {props.id || "No data"}
      <img src={props.path} alt="" />
    </div>
  );
}
