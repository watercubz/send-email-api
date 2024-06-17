import brevo from "@getbrevo/brevo";

const defaultClient = brevo.ApiClient.instance;

const apikey = defaultClient.authentications["api-key"];
apikey.apiKey = "your api key";

const apiInstance = new brevo.TransactionalEmailsApi();
const sendSmtpEmail = new brevo.SendSmtpEmail();

async function main(user) {
  try {
    sendSmtpEmail.subject = `hello ${user.name}`;
    sendSmtpEmail.to = [{ email: user.email, name: user.name }];
    sendSmtpEmail.htmlContent = `<html><body><h1>Hola ${user.name}</h1><p>Gracias por tu registro, sigue explorando nuesra web 💚</p><p><strong>No olvide seguirme en GitHub</strong>💚</p><a href='https://github.com/wa1tercubz'>Go to mi Github</a></body></html>`;
    sendSmtpEmail.sender = {
      name: "eury", // aca ira el nombre de quien envia el correo o el de la empresa.
      email: "eurysosagarcia@gmail.com", // aca ira quien envia el correo por ejemplo Amazon-not-replay@gmail.com <--- o tu dominio si cuentas con uno, esto con el fin que le usario sepa que es automatizado y no responda al email.
    };

    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

export default main;
