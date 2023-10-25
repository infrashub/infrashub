import type { AuthOptions } from "next-auth"

export const authOptions: AuthOptions = {
  providers: [
    {
      id: "suap",
      name: "SUAP",
      type: "oauth",
      authorization: {
        params: {
          scope: "identificacao email"
        },
        url: "https://suap.ifrn.edu.br/o/authorize/"
      },
      token: "https://suap.ifrn.edu.br/o/token/",
      userinfo: "https://suap.ifrn.edu.br/api/eu/",
      clientId: process.env.SUAP_CLIENT_ID,
      clientSecret: process.env.SUAP_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.identificacao,
          name: profile.nome_usual,
          email: profile.email_secundario,
          image: profile.foto
        }
      }
    }
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/login"
  }
}
