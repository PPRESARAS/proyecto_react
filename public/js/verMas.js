$('.collapse').collapse()

$('#myCollapsible').collapse({
    toggle: false
})

$('#myCollapsible').on('hidden.bs.collapse', function () {
    // do something…
  })
