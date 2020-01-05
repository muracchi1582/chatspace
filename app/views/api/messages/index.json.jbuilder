json.array! @messages do |message|
  binding.pry
  json.content message.content
  json.image_url message.image.url
  json.created_at message.created_at.strftime("%Y/%m/%d(%a) %H:%M:%S")
  json.name message.user.name
  json.id message.id
end