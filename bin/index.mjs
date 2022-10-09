#! /usr/bin/env node
// this is a shebang line or a bang line.
import yargs from "yargs";
import { Message } from "../message.mjs";

const y = yargs();
const message = new Message();

console.debug(
  "-------------------------Sua Mensagem Será Enviada em 5minutos----------------------------"
);

y.command({
  command: "text",
  describe: "enviar mensagem de texto",
  builder: {
    body: {
      describe: "content",
      demandOption: false,
      type: "string",
    },
  },
  handler(argv) {
    message.sendText(argv.body);
  },
});

y.command({
  command: "image",
  describe: "enviar mensagem com imagem",
  builder: {
    body: {
      describe: "image",
      demandOption: false,
      type: "string",
    },
  },
  handler(argv) {
    message.sendFile();
  },
});

y.parse(process.argv.slice(2));
