import BotWhatsapp from '@bot-whatsapp/bot';
import greetings from './greetings';

export default BotWhatsapp.createFlow(
    [
        greetings
    ]
)