const Line = ({country, field}) => {
  return (
    <p style={{ textTransform: "capitalize" }}>
      {field} {country[field]}
    </p>
  )
}

export default Line