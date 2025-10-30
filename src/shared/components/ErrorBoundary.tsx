import { Button } from "@/ui";
import { Component, type ErrorInfo } from "react";

// export function ErrorBoundary() {
//   return <div></div>
// }

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
  attempts: number;
}

export class ErrorBoundary extends Component<Props, State> {
  state = {
    hasError: false,
    attempts: 0,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  // componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
  componentDidCatch(error: Error): void {
    // Sentry.captureException(error);
    console.error(error); // -> Logger.error()
  }

  render() {
    // Error - display info, No Error - app, components
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div>
          <p>Oh no! An error has occurred!</p>
          {this.state.attempts < 4 && (
            <Button
              bgColor="midnightBlue"
              onClick={() =>
                this.setState({
                  hasError: false,
                  attempts: ++this.state.attempts,
                })
              }
            >
              Try again
            </Button>
          )}
        </div>
      );
    }
    return <div>{this.props.children}</div>;
  }
}
