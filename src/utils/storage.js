export const getStorage =  ( name ) => {
  return localStorage.getItem( name ) && JSON.parse(localStorage.getItem( name )) || []
}

export const saveStorage = ( name, value ) => {
  localStorage.setItem( name,JSON.stringify(value) )
}