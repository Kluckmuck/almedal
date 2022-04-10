export type Token = {
  scope: string;
  token_type: string;
  expires_in: number;
  access_token: string;
  create_at: Date;
};

type User = {
  token: Token;
};

class TokenService {
  getLocalToken(): Token | null {
    const userAsString = localStorage.getItem("user");
    return userAsString ? JSON.parse(userAsString).token : null;
  }

  updateLocalToken(token: Token) {
    const userAsString = localStorage.getItem("user");
    const user: User = userAsString
      ? JSON.parse(userAsString)
      : { token: token };
    localStorage.setItem("user", JSON.stringify(user));
  }

  clearUser() {
    localStorage.removeItem("user");
  }
}

export default new TokenService();
