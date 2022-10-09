import request from "request";

let options = {
  method: "POST",
  url: "https://api.ultramsg.com/instance19674/messages/chat",
  headers: { "content-type": "application/x-www-form-urlencoded" },
  form: {
    token: "0rbpe1jnatf53qy3",
    to: "+551195817-1565",
    priority: "1",
  },
};

export class Message {
  sendText(text) {
    options.form.body = text;
    setInterval(() => {
      request(options, (error, body) => {
        if (error) throw new Error(error);
        console.log(body);
      });

      const data = new Date();
      console.debug("Mensagem Enviada!", data.getTime());
    }, 300000);
  }
  sendFile() {
    options.url = "https://api.ultramsg.com/instance19674/messages/image";
    options.form.image =
      "https://i0.wp.com/emotioncard.com.br/wp-content/uploads/2017/12/Colorful-Joker-And-Harley-Quinn-Art.jpg?resize=660%2C880&ssl=1";
    setInterval(() => {
      request(options, (error, body) => {
        if (error) throw new Error(error);
        console.log(body);
      });
    }, 10000);
  }
}
