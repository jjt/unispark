# Take the input domain and map it to the range (default [0,5])
scaleData = (scope={}, data=scope.data, range=5, domain=[0, range]) ->
  data or= []
  if scope.data?
    try
      data = JSON.parse scope.data
    catch err
      console.log "error in unispark: expected scope.data to be a JSON array string like \"[0,1,5,2,2,1,4,2,2,5,..]\"", err

  if scope.domain?
    try
      domain = JSON.parse scope.domain
    catch err
      console.log "error in unispark: expected scope.domain to be a JSON array string like \"[28,102]\"", err
      
  domainSize = Math.abs domain[0] - domain[1]
  data.map (el) ->
    Math.floor (el + (domainSize / (range * 2))) * range / domainSize

 exports = module.exports = scaleData
