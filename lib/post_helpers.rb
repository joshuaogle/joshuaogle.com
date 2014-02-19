module PostHelpers

  def simple_date(date)
    date.strftime("%b #{date.strftime('%e').to_i.ordinalize}, %Y")
  end

  def figure(img, caption)
    img_title = caption ? " title='#{caption}'" : ""
    html  = "<figure>"
    html += "<img src='#{img}'#{img_title}>"
    html += "<figcaption>#{caption}</figcaption>" if caption
    html += "</figure>"
    html
  end

end
