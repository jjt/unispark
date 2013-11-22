qsarr = (sel) ->
  nodeList = document?.querySelectorAll(sel)
  if nodeList?
    return Array::slice.call nodeList
  return

exports = module.exports = qsarr
