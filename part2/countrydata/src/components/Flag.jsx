const Flag = ({country}) => {
  return (
    <img
      src={country.flags.png}
      alt={country.flags.alt}
      style={{width: '200px'}} />
  )
}

export default Flag