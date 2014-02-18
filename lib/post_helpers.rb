module PostHelpers

  def simple_date(date)
    date.strftime("%b #{date.strftime('%e').to_i.ordinalize}, %Y")
  end

end
