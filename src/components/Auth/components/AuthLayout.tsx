import * as Styled from "./auth.styled";

type AuthLayoutT = {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => Promise<void>;
};

const AuthLayout: React.FC<AuthLayoutT> = ({ children, onSubmit }) => {
  return (
    <Styled.Auth>
      <figure className="logo" style={{ fontSize: "6.2rem", lineHeight: "1" }}>
        <img src="/assets/logo.webp" alt="" width={200} />
      </figure>

      <form className="auth-form" onSubmit={onSubmit}>
        {children}
      </form>
    </Styled.Auth>
  );
};

export default AuthLayout;
