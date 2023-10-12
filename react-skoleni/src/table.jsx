
export function Table(props) {

  const arrayOfRows = [...new Array(props.rows)];
  const arrayOfColumns = [...new Array(props.columns)];

  return <table>
    {arrayOfRows.map((_, index) => (
      <tr key={index}>
        {arrayOfColumns.map((_, index) => <td key={index}>Bunka</td>)}
      </tr>
    ))}
  </table>
}