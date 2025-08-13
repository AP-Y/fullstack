const Languages = ({country}) => {
  const langs = Array.from(new Set(Object.values(country.languages)))

  return (
    <div>
      <h2>Languages</h2>
      <ul>
        {langs.map(lang => <li key={lang}>{lang}</li>)}
      </ul>
    </div>
  )
}

export default Languages