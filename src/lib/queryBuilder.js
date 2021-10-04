const queryBuilder = (endpoint, queryValues) => {
  let query = []
  
  query.push(endpoint)
  query.push(queryValues.page && `?page=${queryValues.page}`)
  query.push(queryValues.search && `&search=${queryValues.search}`)

  return query.join('')
}

export default queryBuilder
