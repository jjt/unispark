'use strict'

getColors = require('./get-colors')
scaleData = require('./scale-data')
$ = require('./qsarr')

class Unispark
  chars: [2581, 2582, 2583, 2585, 2586, 2587]
  defaults: () ->
    color: null
    colors: null
    colorRange: null
    colorTheme: null
    data: null
    range: [0,5]

  constructor: (sel = '.unispark', opts = {}) ->
    # No selector, just an options object
    if typeof sel == 'object'
      opts = sel
      sel = null
    @opts = @defaults
    @opts.k = v for own k, v in opts
    return this

  asHTML: () ->
    

  asData: () ->
    

unispark = (sel, opts) ->
  scope = scope || {}


  console.log $ '.unispark'


  htmlOutArr = for el, index in data
    color = colors[index % colors.length]
    # x2584 is wonky, so skip it. el is in [0,5], so floor(el/3) is 0 or 1
    charcode = 2581 + el + Math.floor(el/3)

    "<span style=\"color:#{color}\">&#x#{charcode};</span>"
    

exports = module.exports = unispark
