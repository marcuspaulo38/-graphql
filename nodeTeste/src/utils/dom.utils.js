const getTextContent = (dom = {}, selector = '') => {
  if (dom.window === undefined)
    throw new Error('O DOM deve conter uma propriedade de windows')

  if (selector.length === 0) 
    throw new Error('Selector é obrigatório')

  return dom.window.document.querySelector(selector).textContent
}


module.exports = {
  getTextContent,
}