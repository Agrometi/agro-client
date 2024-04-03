import React from "react";

import * as Styled from "./boundary.styled";

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  message: string;
  stack: string;
  at: string;
  showStack: boolean;
};

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      at: "",
      stack: "",
      message: "",
      hasError: false,
      showStack: false,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      showStack: false,
      message: error.message,
      stack: error?.stack || "",
      at: error.stack?.split("at")?.map((f) => f?.trim())[1] || "",
    };
  }

  onToggleStack = () => {
    this.setState({ showStack: !this.state.showStack });
  };

  render() {
    if (this.state.hasError)
      return (
        <Styled.ErrorBoundary>
          <p className="alarm">❌ 💣 💥 🛠 🚑 🚒 🚓 🛴</p>

          <div className="alarm__content-box">
            <span className="alarm__content-box--title message-title">
              Message 👇🏻
            </span>
            &nbsp;
            <span className="message">{this.state.message}</span>
          </div>

          <div className="alarm__content-box">
            <span className="alarm__content-box--title">At</span>
            &nbsp;
            <span className="message at">{this.state.at}</span>
          </div>

          <div>
            {this.state.showStack && (
              <div className="alarm__content-box">
                <span className="alarm__content-box--title">Stack 👇🏻</span>
                &nbsp;
                <span className="stack">{this.state.stack}</span>
              </div>
            )}

            <button onClick={this.onToggleStack} className="toggle-stack--btn">
              {this.state.showStack ? "Hide Stack" : "Show Stack"}
            </button>
          </div>
        </Styled.ErrorBoundary>
      );
    return this.props.children;
  }
}

export default ErrorBoundary;
