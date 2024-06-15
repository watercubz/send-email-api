import brevo from "@getbrevo/brevo";

const defaultClient = brevo.ApiClient.instance;

const apikey = defaultClient.authentications["api-key"];
apikey.apiKey =
  "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 ";

const apiInstance = new brevo.TransactionalEmailsApi();
const sendSmtpEmail = new brevo.SendSmtpEmail();

async function main(user) {
  try {
    sendSmtpEmail.subject = `hello ${user.name}`;
    sendSmtpEmail.to = [{ email: user.email, name: user.name }];
    sendSmtpEmail.htmlContent = `<html><body><h1>Hola ${user.name}</h1><p>Hola bienvenido/a este test de enviar correos automatizados</p><p>si te gusta esta api dame tuu follow en github</p><a href='https://github.com/watercubz'>Go to Github</a></body></html>`;
    sendSmtpEmail.sender = {
      name: "eury",
      email: "eurysosagarcia@gmail.com",
    };

    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

export default main;
