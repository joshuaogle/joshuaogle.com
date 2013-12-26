$ ->

  if $("#dribbble").length > 0
    renderDribbbleShots = (data) ->
      html = ''
      $.each data.shots, (i, shot) ->
        html += "<li>";
        html += "<a href='#{shot.url}'>"
        html += "<img src='#{shot.image_url}' "
        html += "alt='#{shot.title}'><h3>#{shot.title}</h3></a></li>"
      $('#dribbble').html html

    $.jribbble.getShotsByPlayerId 'joshuaogle', renderDribbbleShots,
      page: 1
      per_page: 12

  replaceSVG = do ->
    unless Modernizr.svg
      $("img.svg").each ->
        img = $(this)
        png_src = img.attr("src").replace(".svg", ".png")
        img.attr("src", png_src)
