const ErrorHandler = ({ status = 404, message = "Page not found" }) => {
  return (
    <div className="error-handler">
      <h1>Error</h1>
      <h2>Status code {status}</h2>
      <p>{message}</p>
    </div>
  )
}

export default ErrorHandler;
