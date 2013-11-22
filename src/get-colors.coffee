# Get colors from scope
# In descending priority:
#   colorTheme (string):  "solarized"
#   color (string):       "#c00"
#   colors (array):       ["#c00", "#d00", ... ]
getColors = (scope={}) ->
  colors = ['#c00']
  console.log scope.colors
  switch scope.colorTheme
    when 'solarized'
      colors = ['#b58900','#cb4b16','#dc322f','#d33682','#6c71c4','#268bd2',
        '#2aa198','#859900']

  if scope.color?
    colors = [scope.color]

  if scope.colors?
    try
      colors = JSON.parse scope.colors
    catch err
      console.log "unispark err: scope.colors should be a JSON array string like \"['#cfa', '#88a']\"", err

  colors

exports = module.exports = getColors
