import telebot
import os
import json

bot = telebot.TeleBot('####')


@bot.message_handler(commands=["start"])
def start_command_handler(message):
    bot.send_message(message.chat.id, 'Hi')

@bot.message_handler()
def repeat_all_messages(message):
    url = message.text
    filepath = os.path.join('####', message.from_user.first_name + '.txt')
    with open(filepath, "w") as file:
        file.write(str(url))
    bot.send_message(message.chat.id, ('Ваш url обрабатывается, ожидайте :)'))
    while True:
        path = '####' + message.from_user.first_name + '.json'
        if os.path.exists(path):
            #with open(path, 'r', encoding='utf-8') as file:
            #    data = json.loads(file.read(), encoding='utf-8')
            doc = open(path, 'rb')
            bot.send_document(message.chat.id, doc)
            os.remove(path)
            break


if __name__ == '__main__':
    bot.polling(none_stop=True)

    


